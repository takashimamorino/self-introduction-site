import { NextPage, GetStaticProps } from 'next'
import axios from 'axios'

import { Navigation } from '../components/Navigation'
import { SNS } from '../components/SNS'
import { SectionTitle } from '../components/SectionTitle'

import styles from '../styles/app.module.scss'

type Skills = {
  id: string
  createdAt: string
  updatedAt: string
  languages: string
  other: string
}

type Props = {
  skills: Skills
}

const Home: NextPage<Props> = ({ skills }) => (
  <>
    <Navigation />
    <main className={styles.mainContainer}>
      <div className={styles.inner}>
        <article className={styles.aboutContainer}>
          <div className={styles.profile}>
            <img src="/image_profile.svg" alt="プロフィール画像" />
            <div className={styles.myName}>
              <h2 className={styles.myNameJapanease}>高島克彦</h2>
              <p className={styles.myNameAlphabet}>Takashima Katsuhiko</p>
            </div>
          </div>
          <p className={styles.lead}>
            組織もエンジニアリングできるエンジニアを目指しています。技術だけではなく、サービス作り、組織論にも関心があります。
          </p>
          <SNS />
        </article>
        <article className={styles.sectionContainer}>
          <SectionTitle title="SKILLS" />
          <h2 className={styles.skillsHeader}>言語・フレームワークなど</h2>
          <p className={styles.skillsText}>{skills.languages}</p>
          <h2 className={styles.skillsHeader}>クラウド・その他</h2>
          <p className={styles.skillsText}>{skills.other}</p>
          <p className={styles.annotation}>
            <small>※実業務で使用したもののみ</small>
          </p>
        </article>
        <article className={styles.sectionContainer}>
          <SectionTitle title="EXPERIENCE" />
        </article>
        <article className={styles.sectionContainer}>
          <SectionTitle title="WORKS" />
        </article>
      </div>
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.api_key }
  }
  const res = await axios.get('https://self-site.microcms.io/api/v1/skills', key)
  const skills = await res.data

  return { props: { skills } }
}

export default Home
