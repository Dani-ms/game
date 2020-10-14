import React from "react"
import { LinkAnchor } from "src/components/ui-kit/protons/link-anchor/link-anchor"
import { PaginationProps } from "./pagination-types"

type Props = PaginationProps & {
  className: string
}

export function PaginationBar(props: Props) {
  return (
    <nav className={props.className}>
      <ul className="pagination">
        {props.currentPage > 1 ? (
          <>
            <li className={`page-item`}>
              <LinkAnchor className="page-link" href={props.firstPageHref}>
                Início
              </LinkAnchor>
            </li>

            <li className={`page-item disabled`}>
              <span className="page-link" aria-hidden="true">
                ...
              </span>
            </li>
          </>
        ) : null}

        {props.previousPageHref ? (
          <li className={`page-item`}>
            {
              <LinkAnchor className="page-link" href={props.previousPageHref}>
                <span>{props.currentPage - 1}</span>
              </LinkAnchor>
            }
          </li>
        ) : null}

        <li className="page-item active">
          <span className="page-link">
            {props.currentPage} <span className="sr-only">(atual)</span>
          </span>
        </li>

        {props.nextPageHref ? (
          <li className={`page-item`}>
            {
              <LinkAnchor className="page-link" href={props.nextPageHref}>
                <span>{props.currentPage + 1}</span>
              </LinkAnchor>
            }
          </li>
        ) : null}

        {props.currentPage < props.totalPages - 1 ? (
          <>
            <li className={`page-item disabled`}>
              <span className="page-link" aria-hidden="true">
                ...
              </span>
            </li>

            <li className={`page-item`}>
              <LinkAnchor className="page-link" href={props.lastPageHref}>
                {props.totalPages}
              </LinkAnchor>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  )
}
