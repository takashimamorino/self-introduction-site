import React, { FC } from 'react'

import { SectionTitle } from '../utils/SectionTitle'
import { ProjectDescription } from '../utils/ProjectDescription'

import styles from './experience.module.scss'

type Experience = {
  id: string
  term: string
  title: string
  skills: string
  article: string
}

type Props = {
  contents: Experience[]
}

export const Experience: FC<Props> = ({ contents }) => (
  <article id="experience" className={styles.container}>
    <SectionTitle title="EXPERIENCE" />
    {contents.map(item => (
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
