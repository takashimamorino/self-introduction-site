import React, { FC } from 'react'

import { Item } from './Item'

import styles from './sns.module.scss'

export const SNS: FC = () => (
  <section className={styles.container}>
    <Item url="https://github.com/takashimamorino" icon="github-square" />
    <Item url="https://twitter.com/takashima_katsu" icon="twitter-square" />
    <Item url="https://www.facebook.com/profile.php?id=100030277245331" icon="facebook-square" />
  </section>
)
