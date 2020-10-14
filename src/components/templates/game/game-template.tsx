import React, { useState } from "react"
import { Page } from "src/components/routing/page/page"
import { throwError } from "src/logic/app-internals/utils/throw-error"
import { GAME_ROUTE } from "./game-routes"
import styles from "./game-template.module.scss"

type Props = {
  board: string
}
type State = {
  board?: String
}

export function GameTemplate(props: Props, state: State) {
  const empty = Array(9).fill(null)
  // const [board] = useState([empty])
  const [board, setBoard] = useState(empty)
  const handleCell = (index: number) => {
    setBoard(board.map((item, itemIndex) => (itemIndex === index ? "X" : item)))
  }
  return (
    <Page noContainment noTopPadding title={GAME_ROUTE.label}>
      {() => {
        return (
          <div className={`${styles["game-page"] || throwError()} container`}>
            <section>
              <h1 className={`${styles["title"] || throwError()}  `}> Game </h1>
              <div
                className={`${
                  styles["game-container"] || throwError()
                }  mix-auto text-center justify-content-center`}
              >
                <div
                  className={`${
                    styles["board-container"] || throwError()
                  } mix-auto text-center justify-content-center`}
                >
                  {board.map((item, index) => (
                    <div
                      key={index}
                      className={`${styles["cell"] || throwError()} ${item} `}
                      onClick={() => handleCell(index)}
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )
      }}
    </Page>
  )
}
