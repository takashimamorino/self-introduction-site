import React, { FC } from 'react'

import { SectionTitle } from '../utils/SectionTitle'

import styles from './skills.module.scss'

type Skills = {
  id: string
  createdAt: string
  updatedAt: string
  languages: string
  other: string
}

type Props = {
  contents: Skills
}

export const Skills: FC<Props> = ({ contents }) => (
  <article id="skills" className={styles.container}>
    <SectionTitle title="SKILLS" />
    <h2 className={styles.header}>言語・フレームワークなど</h2>
    <p className={styles.text}>{contents.languages}</p>
    <h2 className={styles.header}>クラウド・その他ツール</h2>
    <p className={styles.text}>{contents.other}</p>
    <p className={styles.annotation}>
      <small>※実業務で使用したもののみ</small>
    </p>
  </article>
)
