import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import css from "./style.scss"

/**
  * @typedef {{
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class HelloToast extends React.Component {

  render() {
    return <span className={css.container}>Hello <img className={css.emote} src="https://cdn.discordapp.com/emojis/566166939609858048.gif"/></span>
  }

}