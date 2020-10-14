import { KeyboardEvent } from "react"

export function makeAccessibleButtonProps(
  fn: () => void,
  role: string = "button"
) {
  return {
    onClick: fn,
    onKeyPress: (e: KeyboardEvent<HTMLElement>) => {
      /*
        TIP:
        you can use the HTML element type from the event
        to change the accessibility behaviour.
      */
      // if(e.target instanceof HTMLDivElement){
      //   // Do something
      // }

      if (e.keyCode === 13 || e.keyCode === 32) return fn()
    },
    role,
  }
}
