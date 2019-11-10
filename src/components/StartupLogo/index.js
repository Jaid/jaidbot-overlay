import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class StartupLogo extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    const content = <span className={css.content}>abc<br/>def</span>
    return <div className={classnames(css.container, this.props.className)}/>
  }

}