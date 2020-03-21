import React, { FC } from 'react'

import { SectionTitle } from '../utils/SectionTitle'
import { ProjectDescription } from '../utils/ProjectDescription'

import styles from './works.module.scss'

type Works = {
  id: string
  title: string
  skills: string
  description: string
}

type Props = {
  contents: Works[]
}

export const Works: FC<Props> = ({ contents }) => (
  <article id="works" className={styles.container}>
    <SectionTitle title="Works" />
    {contents.map(item => (
      <ProjectDescription key={item.id} title={item.title} skills={item.skills} description={item.description} />
    ))}
  </article>
)
