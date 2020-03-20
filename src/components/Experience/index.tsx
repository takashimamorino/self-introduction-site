import React, { FC } from 'react'

import { SectionTitle } from '../SectionTitle'
import { ProjectDescription } from '../utils/ProjectDescription'

import styles from './experience.module.scss'

type Experience = {
  id: string
  createdAt: string
  updatedAt: string
  term: string
  title: string
  skills: string
  article: string
}

type Props = {
  resource: Experience[]
}

export const Experience: FC<Props> = ({ resource }) => (
  <article className={styles.container}>
    <SectionTitle title="EXPERIENCE" />
    {resource.map((item: Experience) => (
      <ProjectDescription
        key={item.id}
        term={item.term}
        title={item.title}
        skills={item.skills}
        description={item.article}
      />
    ))}
  </article>
)
