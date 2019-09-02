import ui from 'utils/ui'
import { SET_FEED } from './actionTypes'

// Action creators

const setFeed = (feed) => ({
  type: SET_FEED,
  payload: { feed },
})

// API functions

export const getFeed = () => (dispatch) => {

  console.log('getFeed')
  const feed = []
  //mock data
  feed.push({
    'id': 1,
    'ownerHistory': [],
    'data': 'ipfsdata',
    'name': 'tester',
    'location': 'Seoul',
    'caption': 'test',
    'timestamp': 123422323
  })
  dispatch(setFeed(feed))
}


export const uploadPhoto = (
  file,
  fileName,
  location,
  caption
) => (dispatch) => {
  const reader = new window.FileReader()
  reader.readAsArrayBuffer(file)
  reader.onloadend = () => {
    const buffer = Buffer.from(reader.result)
    /**
     * Add prefix `0x` to hexString
     * to recognize hexString as bytes by contract
     */
    const hexString = "0x" + buffer.toString('hex')
    //uploadPhoto to IPFS
  }
}

export const transferOwnership = (tokenId, to) => (dispatch) => {
  console.log('transferOwnership')
}

