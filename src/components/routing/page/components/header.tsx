import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { GAME_ROUTE } from "src/components/templates/game/game-routes"
import { INDEX_ROUTE } from "src/components/templates/index/index-routes"
import { makeAccessibleButtonProps } from "src/components/ui-kit/core/accessibility/make-accessible-button-props"
import { throwError } from "src/logic/app-internals/utils/throw-error"
import { v4 as uuidV4 } from "uuid"

type Props = {}

type State = {
  domId: string
  scrollListener?: () => void
  windowResizeListener?: () => void
  isScrolled?: boolean
  expanded?: boolean
}

export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      domId: uuidV4(),
    }
  }

  componentDidMount() {
    this.setState(
      {
        isScrolled: this.isScrolled(),
      },
      () => {
        const scrollListener = () => this.handleScroll()

        this.setState(
          {
            scrollListener,
          },
          () => {
            window.addEventListener("scroll", scrollListener)
          }
        )
      }
    )

    //

    const windowResizeListener = () => {
      if (this.state.expanded) {
        this.toggleMenu()
      }
    }

    this.setState(
      {
        windowResizeListener,
      },
      () => {
        window.addEventListener("resize", windowResizeListener)
      }
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.state.scrollListener || throwError()
    )
    window.removeEventListener(
      "resize",
      this.state.windowResizeListener || throwError()
    )
  }

  isScrolled() {
    return window.pageYOffset > 0
  }

  handleScroll() {
    const isScrolled = this.isScrolled()

    if (this.state.isScrolled !== isScrolled) {
      this.setState({
        isScrolled: isScrolled,
      })
    }
  }

  toggleMenu() {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    return (
      <>
        <header className="sticky-top">
          <Navbar
            className={`bg-primary shadow`}
            collapseOnSelect
            expand="lg"
            expanded={this.state.expanded}
            variant="dark"
          >
            <Navbar.Toggle
              onClick={() => this.toggleMenu()}
              aria-controls={this.state.domId}
            />
            <Navbar.Collapse id={this.state.domId}>
              <Nav className="container px-0 mr-auto">
                <Nav.Link href={INDEX_ROUTE.getHref()}>Home</Nav.Link>
                <Nav.Link href={GAME_ROUTE.getHref()}>Game</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        {this.state.expanded ? (
          <div
            {...makeAccessibleButtonProps(() => {
              if (this.state.expanded) {
                this.toggleMenu()
              }
            })}
            className="header__backdrop"
          />
        ) : null}
      </>
    )
  }
}
