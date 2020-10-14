import React from "react"
import { MaterialIconName } from "./material-icon-names"

export enum MaterialIconSize {
  Default = "1rem",
  Navbar = "1.5rem",
  Thumbnail = "3rem",
}

type Props = {
  name: MaterialIconName
  className?: string
  size?: MaterialIconSize
}

export const MaterialIcon = (props: Props) => {
  const icon = (
    <i
      role="presentation"
      style={{
        fontSize: props.size || MaterialIconSize.Default,
      }}
      className={`material-icons ${props.className || ""}`}
    >
      {props.name}
    </i>
  )

  return icon
}
