import React, { FC } from 'react'

import { SectionTitle } from '../SectionTitle'
import { ProjectDescription } from '../utils/ProjectDescription'

import styles from './works.module.scss'

type Works = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  skills: string
  description: string
}

type Props = {
  resource: Works[]
}

export const Works: FC<Props> = ({ resource }) => (
  <article className={styles.container}>
    <SectionTitle title="Works" />
    {resource.map((item: Works) => (
      <ProjectDescription key={item.id} title={item.title} skills={item.skills} description={item.description} />
    ))}
  </article>
)
