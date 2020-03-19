import React, { FC } from 'react'

import styles from './projectDescription.module.scss'

type Props = {
  term: string
  title: string
  skills: string
  description: string
}

export const ProjectDescription: FC<Props> = ({ term, title, skills, description }) => (
  <section className={styles.container}>
    <p className={styles.term}>{term}</p>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.skills}>【 {skills} 】</p>
    <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
  </section>
)
