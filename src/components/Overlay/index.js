import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import Queue from "components/Queue"

import query from "src/query"

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
export default class Overlay extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    return <div className={classnames({debug: Boolean(query.debug)}, css.container, this.props.className)}>
      <Queue/>
    </div>
  }

}