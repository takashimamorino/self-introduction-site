import React, { FC } from 'react'

import { SectionTitle } from '../utils/SectionTitle'

import styles from './interests.module.scss'

export const Interests: FC = () => (
  <article id="interests" className={styles.container}>
    <SectionTitle title="INTERESTS" />
    <p className={styles.text}>
      今までフロントエンドをメインとしていたので、今年はバックエンド、インフラやCSの知識もつけていきたいです。
      <br />
      また、ブログなどで社外への技術発信やコミュニティへの貢献もしていきます。
    </p>
  </article>
)
