import axios from 'axios'
import ui from 'utils/ui'
import { SET_FEED } from './actionTypes'

const SERVER_ENDPOINT = 'http://localhost:3000'

// Action creators

const setFeed = (feed) => ({
  type: SET_FEED,
  payload: { feed },
})

const updateFeed = (tokenId) => (dispatch, getState) => {
  const newPhoto = await axios.get(`${SERVER_ENDPOINT}/api/getPhoto/${tokenId}`)
  const { photos: { feed }} = getState()
  const newFeed = [newPhoto, ...feed]
  dispatch(setFeed(newFeed))
}

const updateOwnerAddress = (tokenId, to) => (dispatch, getState) => {
  const { photos: { feed } } = getState()
  const newFeed = feed.map((photo) => {
    if (photo[ID] !== tokenId) return photo
    photo[OWNER_HISTORY].push(to)
    return photo
  })
  dispatch(setFeed(newFeed))
}

// API functions

export const getFeed = () => async (dispatch) => {

  console.log('getFeed')
  const totalCount = await axios.get(`${SERVER_ENDPOINT}/api/getTotalPhotoCount`)
  const feed = []
  if (!totalCount) {
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
  } else {
    for(let i = totalCount; i > 0; i--) {
      const photo = await axios.get(`${SERVER_ENDPOINT}/api/getPhoto/${i}`)
      feed.push(photo)
    }    
  }
  
  dispatch(setFeed(feed))
}


export const uploadPhoto = (
  file,
  fileName,
  location,
  caption
) => async (dispatch) => {
  const reader = new window.FileReader()
  reader.readAsArrayBuffer(file)
  reader.onloadend = () => {
    const buffer = Buffer.from(reader.result)
    /**
     * Add prefix `0x` to hexString
     * to recognize hexString as bytes by contract
     */
    const hexPhoto = "0x" + buffer.toString('hex')
    const result = await axios.post(`${SERVER_ENDPOINT}/api/uploadPhoto`, {photo: hexPhoto, title: fileName, location, description: caption})    
    //event listener
    const totalCount = await axios.get(`${SERVER_ENDPOINT}/api/getTotalPhotoCount`)
    const newTokenId = totalCount+1
    dispatch(updateFeed(newTokenId))
  }
}

export const transferOwnership = (tokenId, to) => async (dispatch) => {
  console.log('transferOwnership')
  const result = await axios.post(`${SERVER_ENDPOINT}/api/transferOwnership`, {tokenId, to})
  if(result) {
    dispatch(updateOwnerAddress(tokenId, to))
  }
}

