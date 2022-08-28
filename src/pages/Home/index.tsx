import styles from './Home.module.css'
import { Barbell, GraduationCap, Suitcase } from 'phosphor-react'

import { Resume } from '../../components/Home/Resume'

import {
  WorkExperience,
  Technologies,
  AboutMe,
  AcademicEducation,
  OtherTraining,
} from '../../db'
import { SectionCard } from '../../components/Home/SectionCard'

export function Home() {
  return (
    <div className={styles.wrapper}>
      <aside>
        <Resume technologies={Technologies} aboutMe={AboutMe} />
      </aside>
      <main>
        <SectionCard
          title="Work Experience"
          icon={<Suitcase size={32} weight="light" />}
          informations={WorkExperience}
        />
        <SectionCard
          title="Academic Education"
          icon={<GraduationCap size={32} weight="light" />}
          informations={AcademicEducation}
        />
        <SectionCard
          title="Training & Course"
          icon={<Barbell size={32} weight="light" />}
          informations={OtherTraining}
        />
      </main>
    </div>
  )
}
