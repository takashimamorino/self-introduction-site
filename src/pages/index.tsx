import { NextPage } from 'next'

import { Navigation } from '../components/Navigation'

import styles from '../styles/app.module.scss'

const Home: NextPage = () => (
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
        </article>
      </div>
    </main>
  </>
)

export default Home
