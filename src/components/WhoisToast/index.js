import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import millify from "lib/millify"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   displayName: string,
  *   avatarUrl: string,
  *   offlineImageUrl: string,
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
    avatarUrl: PropTypes.string,
    offlineImageUrl: PropTypes.string,
    twitchId: PropTypes.string,
    views: PropTypes.number,
    followDate: PropTypes.number,
    followers: PropTypes.number,
    creationDateString: PropTypes.string,
    followees: PropTypes.number,
    stream: PropTypes.object,
  }

  render() {
    const img = <img className={css.avatar} src={this.props.avatarUrl}/>
    const offlineImg = <img className={css.offlineImage} src={this.props.offlineImageUrl}/>
    const creationString = <span>{this.props.creationDateString} erstellt</span>
    const views = <span>{millify(this.props.views)} Views</span>
    const followers = <span>{millify(this.props.followers)} Follower</span>
    const followees = <span>folgt {millify(this.props.followees)}</span>
    let stream
    if (this.props.stream) {
      stream = <div className={css.stream}>
        <span className={css.live}>● {this.props.stream.viewers} Live-Zuschauer</span>
        <br/>
        {this.props.stream.startDateString} auf {this.props.stream.languageTitle || this.props.stream.languageId}
        <br/>
        {this.props.stream.game}
      </div>
    }
    return <div className={classnames(css.container, this.props.className)}>
      <div className={css.imageRow}>
        {img}
        {offlineImg}
      </div>
      <div className={css.nameRow}>
        <span>{this.props.displayName}</span>
        <span className={css.twitchId}>{this.props.twitchId}</span>
      </div>
      {stream}
      <div className={css.infoList}>
        {creationString}
        {views}
        {followers}
        {followees}
      </div>
    </div>
  }

}