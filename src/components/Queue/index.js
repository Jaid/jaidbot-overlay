import classnames from "classnames"
import {startCase} from "lodash"
import ms from "ms.macro"
import PropTypes from "prop-types"
import React from "react"
import {connect} from "react-redux"

import Toast from "components/Toast"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   queueItem: Object,
  *   queueItems: Object[],
  *   dispatch: function
  * }} Props
  */

@connect(({main}) => ({
  queueItem: main.queueItem,
  queueItems: main.queueItems,
}))

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class extends React.Component {

  // static displayName = "Queue"

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    queueItem: PropTypes.object,
    queueItems: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    if (!this.props.queueItem) {
      return null
    }
    const toastName = `${startCase(this.props.queueItem.type)}Toast`
    const Component = require(`../${toastName}`).default
    const toastProps = this.props.queueItem.toastProps || {}
    const item = <Toast className={css.toast} component={Component} duration={this.props.queueItem.duration || ms`6 seconds`} toastProps={toastProps}/>
    return <div className={classnames(css.container, this.props.className)}>
      {item}
    </div>
  }

}