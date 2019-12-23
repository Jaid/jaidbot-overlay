import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import css from "./style.scss"

/**
  * @typedef {{
  *   text: string,
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class TextToast extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    return this.props.text
  }

}