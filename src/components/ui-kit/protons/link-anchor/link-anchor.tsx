import { Link } from "gatsby"
import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
  href: string
  className?: string
  activeClassName?: string
  "aria-label"?: string
}

export function LinkAnchor(props: Props) {
  if (props.href.includes("://")) {
    return (
      <a
        rel="noopener noreferrer"
        href={props.href}
        className={props.className}
        target="_blank"
        aria-label={props["aria-label"]}
      >
        {props.children}
      </a>
    )
  } else if (
    props.href.startsWith("mailto:") ||
    props.href.startsWith("tel:")
  ) {
    return (
      <a
        href={props.href}
        className={props.className}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </a>
    )
  } else if (props.href.includes("#")) {
    return (
      <a
        href={props.href}
        className={props.className}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </a>
    )
  } else {
    return (
      <Link
        partiallyActive
        activeClassName={props.activeClassName}
        to={props.href}
        className={props.className}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </Link>
    )
  }
}
