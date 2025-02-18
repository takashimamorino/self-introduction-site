import { NextPage, GetStaticProps } from 'next'
import axios from 'axios'

import { Navigation } from '../components/Navigation'
import { SNS } from '../components/SNS'
import { Interests } from '../components/Interests'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Works } from '../components/Works'

import styles from '../styles/app.module.scss'

type Skills = {
  languages: string
  other: string
}

type Experience = {
  id: string
  term: string
  title: string
  skills: string
  article: string
}

type Works = {
  id: string
  title: string
  skills: string
  description: string
}

type Props = {
  skills: Skills
  experience: Experience[]
  works: Works[]
}

const Home: NextPage<Props> = ({ skills, experience, works }) => (
  <>
    <Navigation />
    <main className={styles.container}>
      <div className={styles.inner}>
        <article>
          <div className={styles.profile}>
            <img src="/image_profile.svg" alt="プロフィール画像" />
            <div className={styles.myName}>
              <h2 className={styles.myNameJapanease}>高島克彦</h2>
              <p className={styles.myNameAlphabet}>Takashima Katsuhiko</p>
            </div>
          </div>
          <p className={styles.lead}>都内でエンジニアをしています。現在は主にReactを使ったSPA開発を担当しています。</p>
          <SNS />
          <a className={styles.blogLink} href="https://qiita.com/katsutakashima" target="_blank" rel="noopener">
            技術ブログはこちら
          </a>
        </article>
        <Interests />
        <Skills contents={skills} />
        <Experience contents={experience} />
        <Works contents={works} />
      </div>
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.api_key }
  }
  let skills = await axios.get('https://self-site.microcms.io/api/v1/skills', key)
  skills = await skills.data

  let experience = await axios.get('https://self-site.microcms.io/api/v1/experience', key)
  experience = experience.data.contents

  let works = await axios.get('https://self-site.microcms.io/api/v1/works', key)
  works = await works.data.contents

  return { props: { skills, experience, works } }
}

export default Home
