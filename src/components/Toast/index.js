import classnames from "classnames"
import ms from "ms.macro"
import PropTypes from "prop-types"
import React from "react"
import {connect} from "react-redux"
import {CSSTransition} from "react-transition-group"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   component: *,
  *   toastProps: Object,
  *   dispatch: Function,
  *   duration: number,
  * }} Props
  */

const animationDuration = ms`1 second`

@connect()

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class extends React.Component {

  displayName = "Toast"

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    component: PropTypes.any,
    toastProps: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    duration: PropTypes.number,
  }

  constructor(props) {
    super(props)
    this.state = {
      animationState: "none",
    }
  }

  componentDidMount() {
    if (window.freezeToast) {
      return
    }
    setTimeout(() => {
      this.setState({
        animationState: "out",
      })
      setTimeout(() => {
        this.props.dispatch({type: "queueItemDone"})
        setTimeout(() => {
          this.props.dispatch({type: "nextQueueItem"})
        }, 100)
      }, animationDuration)
    }, this.props.duration + animationDuration)
  }

  render() {
    const content = <this.props.component {...this.props.toastProps}/>
    const animation = state => {
      const style = {
        transitionDuration: `${animationDuration}ms`,
      }
      return <div className={classnames(css[state], css.container, this.props.className)} style={style}>
        {content}
      </div>
    }
    return <CSSTransition classNames={{...css}} in={this.state.animationState !== "out"} timeout={animationDuration} appear>
      {animation}
    </CSSTransition>
  }

}