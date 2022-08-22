import { Resume } from '../../components/Home/Resume'
import styles from './Home.module.css'
import { Barbell, GraduationCap, Suitcase } from 'phosphor-react'

import {
  WorkExperience,
  Technologies,
  AboutMe,
  AcademicEducation,
  OtherTraining,
} from '../../db'
import { KnowledgeCard } from '../../components/Home/KnowledgeCard'

export function Home() {
  return (
    <div className={styles.wrapper}>
      <aside>
        <Resume technologies={Technologies} aboutMe={AboutMe} />
      </aside>
      <main>
        <KnowledgeCard
          title="Work Experience"
          icon={<Suitcase size={32} weight="light" />}
          informations={WorkExperience}
        />
        <KnowledgeCard
          title="Academic Education"
          icon={<GraduationCap size={32} weight="light" />}
          informations={AcademicEducation}
        />
        <KnowledgeCard
          title="Training & Course"
          icon={<Barbell size={32} weight="light" />}
          informations={OtherTraining}
        />
      </main>
    </div>
  )
}
