import React, { FC } from 'react'

import styles from './sectionTitle.module.scss'

type Props = {
  title: string
}

export const SectionTitle: FC<Props> = ({ title }) => <h2 className={styles.title}>{title}</h2>
