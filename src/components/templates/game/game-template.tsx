import React, { useEffect, useState } from "react"
import { Page } from "src/components/routing/page/page"
//import { throwError } from "src/logic/app-internals/utils/throw-error"
import { GAME_ROUTE } from "./game-routes"
import "./game-template.scss"

type Props = {
  board: string
  item: number
}
type State = {
  board?: String
}

export function GameTemplate(props: Props, state: State) {
  // const empty: Array<null | "X" | "O"> = Array(9).fill(null)
  // const [board] = useState([empty])

  const empty: string[] = Array(9).fill(null)
  const [currentPlayer, setCurrentPlayer] = useState("O")
  const [result, setResult] = useState(null)

  const [board, setBoard] = useState(empty)
  const handleCellClick = (index: number) => {
    //verifca se o card não tem item, se e diferente de elemento vazio e para no momento
    if (result) {
      //console.log('Jogo Finalizado');
      return
    }
    if (board[index] === "") {
      //console.log('Posição ocupada');
      return
    }
    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    ) //recriando o arrary

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X") //comparando os jogadores para trocar o O para X
  }
  //const [secondsLeft, setSecondsLeft] = useState(15)
  //verifica quem ganhou
  const checkResult = () => {
    //ARRAY de possibilidade para ganhar
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ]

    possibleWaysToWin.forEach(items => {
      if (items.every(cell => cell === "O")) setResult(null) //setResult("O")

      if (items.every(cell => cell === "X")) setResult(null) //setResult("X")
    })
    checkDraw()
  }
  //verificar empate
  const checkDraw = () => {
    if (board.every(item => item === "")) {
      setResult(null) //setResult("E")
    }
  }
  //check result
  useEffect(checkResult, [board])
  const resetGame = () => {
    setCurrentPlayer("O")
    setBoard(empty)
    setResult(null)
  }
  // useEffect(() => {
  //     if (secondsLeft > 0 && setCurrentPlayer.length > 0) {
  //       const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1500)
  //       return () => clearTimeout(timerId)
  //     }
  //   })

  return (
    <Page noContainment noTopPadding title={GAME_ROUTE.label}>
      {() => {
        return (
          <div className={`game-page container`}>
            <section>
              <h1 className={`title `}> Game </h1>

              {result && (
                <div className={`mix-auto text-center mb-3`}>
                  {result === "E" ? (
                    <span> {result} Empate </span>
                  ) : (
                    <span> {result} venceu! </span>
                  )}
                  <h1 className={`winner-messages`}></h1>
                  <button className={`btn btn-warning`} onClick={resetGame}>
                    {" "}
                    Reset Game
                  </button>
                </div>
              )}
              <div
                className={`game-container mix-auto text-center justify-content-center `}
              >
                <div
                  className={`board-container pt-4 pb-4 ${
                    result ? "game-over" : ""
                  } mix-auto text-center justify-content-center`}
                >
                  {board.map((item, index) => (
                    <div
                      key={index}
                      className={`cell ${item}`}
                      onClick={() => handleCellClick(index)}
                    >
                      {item}
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
