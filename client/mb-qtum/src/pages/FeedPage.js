import React from 'react'
import Feed from 'components/Feed'
import UploadButton from 'components/UploadButton'

import './FeedPage.scss'

const FeedPage = () => (
  <main className="FeedPage">
    <Feed />
    <UploadButton />
  </main>
)

export default FeedPage
