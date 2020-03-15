import React, { FC } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare, faTwitterSquare, faGithubSquare)

type Props = {
  url: string
  icon: any
}

export const Item: FC<Props> = ({ url, icon }) => (
  <a href={url} target="_blank" rel="noopener">
    <FontAwesomeIcon icon={['fab', icon]} size="6x" color="#808080" />
  </a>
)
