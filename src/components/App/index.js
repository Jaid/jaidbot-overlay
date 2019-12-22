import "modern-normalize"

import PropTypes from "prop-types"
import React from "react"
import {connect} from "react-redux"

import ChatPage from "components/ChatPage"
import Overlay from "components/Overlay"

import query from "src/query"

import css from "./style.scss"

@connect(state => ({
  loginInfo: state.login,
}))
export default class extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    if (query.chat) {
      return <ChatPage/>
    }
    return <Overlay/>
  }

}