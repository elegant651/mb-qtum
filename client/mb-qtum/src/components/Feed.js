import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Loading from 'components/Loading'
import PhotoHeader from 'components/PhotoHeader'
import PhotoInfo from 'components/PhotoInfo'
import CopyrightInfo from 'components/CopyrightInfo'
import TransferOwnershipButton from 'components/TransferOwnershipButton'

import * as photoActions from 'redux/actions/photos'

import './Feed.scss'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: !props.feed,
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const isUpdatedFeed = (nextProps.feed !== prevState.feed) && (nextProps.feed !== null)
    if (isUpdatedFeed) {
      return { isLoading: false }
    }
    return null
  }

  componentDidMount() {
    const { feed, getFeed } = this.props
    if (!feed) getFeed()
  }

  render() {
    const { feed, userAddress } = this.props

    if (this.state.isLoading) return <Loading />

    return (
      <div className="Feed">
        {feed.length !== 0
          ? feed.map(({
            id,
            ownerHistory,
            data,
            name,
            location,
            caption,
            timestamp,
          }) => {
            const originalOwner = 'originOwner'
            const currentOwner = 'tester'
            const imageUrl = 'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct'
            const issueDate = moment(timestamp * 1000).fromNow()

            return (
              <div className="FeedPhoto" key={id}>
                <PhotoHeader
                  currentOwner={currentOwner}
                  location={location}
                />
                <div className="FeedPhoto__image">
                  <img src={imageUrl} alt={name} />
                </div>
                <div className="FeedPhoto__info">
                  <PhotoInfo
                    name={name}
                    issueDate={issueDate}
                    caption={caption}
                  />
                  <CopyrightInfo
                    className="FeedPhoto__copyrightInfo"
                    id={id}
                    issueDate={issueDate}
                    originalOwner={originalOwner}
                    currentOwner={currentOwner}
                  />
                  {
                    // userAddress === currentOwner && (
                      <TransferOwnershipButton
                        className="FeedPhoto__transferOwnership"
                        id={id}
                        issueDate={issueDate}
                        currentOwner={currentOwner}
                      />
                    // )
                  }
                </div>                
                FeedPhoto {name} , {location}
              </div>
            )
          })
          : <span className="Feed__empty">No Photo :D</span>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  feed: state.photos.feed  
})

const mapDispatchToProps = (dispatch) => ({
  getFeed: () => dispatch(photoActions.getFeed()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)

