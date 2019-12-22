import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   displayName: string
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class WhoisToast extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    displayName: PropTypes.string,
  }

  render() {
    const content = <span>{this.props.displayName}</span>
    return <div className={classnames(css.container, this.props.className)}>
      {content}
    </div>
  }

}