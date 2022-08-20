import { GraduationCap } from 'phosphor-react'
import { useState } from 'react'
import styles from './Education.module.css'
import parse from 'html-react-parser'

interface Course {
  id: string
  name: string
  place: string
  completeIn: string
  details: string
}

interface EducationProps {
  courses: Course[]
}

export function Education({ courses }: EducationProps) {
  const [showAllDetails, setShowAllDetails] = useState(false)
  const [courseId, setCourseID] = useState('')

  function handleShowDetails(id: string): void {
    if (courseId === id) {
      setShowAllDetails(false)
      setCourseID('')
    } else {
      setShowAllDetails(true)
      setCourseID(id)
    }
  }

  function detailsParser(txt: string) {
    return parse(txt)
  }

  return (
    <section className="card">
      <header className={styles.header}>
        <h2 className={styles.title}>
          <sup>
            <GraduationCap size={32} weight="light" />
          </sup>
          Education
        </h2>
      </header>

      <hr className={styles.divider} />

      {courses.map((course) => (
        <div key={course.id} className={styles.courses}>
          <div className={styles['principal-info']}>
            <p className={styles.date}>{course.completeIn}</p>
            <div>
              <h3 className={styles.course}>{course.name}</h3>

              <h3 className={styles.place}>{course.place}</h3>
              {showAllDetails && courseId === course.id ? (
                <span className={styles.details}>
                  {detailsParser(course.details)}
                </span>
              ) : null}
            </div>
          </div>
          <div className={styles['view-more']}>
            {course.details ? (
              <button onClick={() => handleShowDetails(course.id)}>
                {showAllDetails && courseId === course.id
                  ? 'Show Less'
                  : 'Show more'}
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
