import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import {CSSTransition} from "react-transition-group"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   component: *,
  *   toastProps: Object,
  * }} Props
  */

const duration = 600

const initialStyle = {
  transitionDuration: `${duration}ms`,
  left: "-600px",
  borderRadius: "0",
}

const transitionStyles = {
  entering: {left: "-600px"},
  entered: {
    left: "200px",
    borderRadius: "16px",
  },
  exiting: {left: "200px"},
  exited: {left: "200px"},
}

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class Toast extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    component: PropTypes.any,
    toastProps: PropTypes.object,
  }

  render() {
    const content = <this.props.component {...this.props.toastProps}/>
    const animation = state => {
      const style = {
        ...initialStyle,
        ...transitionStyles[state],
      }
      return <div className={classnames(css.container, this.props.className)} style={style}>
        {content}
      </div>
    }
    return <CSSTransition timeout={duration} appear in unmountOnExit>{animation}</CSSTransition>
  }

}