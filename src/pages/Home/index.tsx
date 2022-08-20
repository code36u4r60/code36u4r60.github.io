import { Education } from '../../components/Home/Education'
import { Resume } from '../../components/Home/Resume'
import styles from './Home.module.css'

import { technologies, aboutMe, courses } from '../../db'

export function Home() {
  return (
    <div className={styles.wrapper}>
      <aside>
        <Resume technologies={technologies} aboutMe={aboutMe} />
      </aside>
      <main>
        <Education courses={courses} />
      </main>
    </div>
  )
}
