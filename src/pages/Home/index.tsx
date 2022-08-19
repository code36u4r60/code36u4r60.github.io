import { Main } from '../../components/Home/Main'
import { Resume } from '../../components/Home/Resume'
import styles from './Home.module.css'

import { technologies, aboutMe } from '../../db'

export function Home() {
  return (
    <div className={styles.home}>
      <Resume technologies={technologies} aboutMe={aboutMe} />
      <Main />
    </div>
  )
}
