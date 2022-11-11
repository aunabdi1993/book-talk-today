import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon url={`mailto:${siteMetadata.email}`} style={{ height: 40, width: 40 }} />
          <SocialIcon
            url="https://www.youtube.com/c/BookTalkToday/videos"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.instagram.com/booktalktoday/"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon url="https://twitter.com/booktalktoday" style={{ height: 40, width: 40 }} />
          <SocialIcon
            url="https://podcasts.apple.com/gb/podcast/book-talk-today-with-aun-abdi/id1525619296"
            network="itunes"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://open.spotify.com/show/1C1AFpKaNrQbVcluJmL33h"
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
