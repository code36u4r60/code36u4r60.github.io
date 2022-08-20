import { useState } from 'react'
import styles from './KnowledgeCard.module.css'
import parse from 'html-react-parser'

interface information {
  id: string
  name: string
  place: string
  dates: string
  details: string
}

interface ElementProps {
  informations: information[]
  title: string
  icon: any
}

export function KnowledgeCard({ title, icon, informations }: ElementProps) {
  const [showAllDetails, setShowAllDetails] = useState(false)
  const [elementId, setElementId] = useState('')

  function handleShowDetails(id: string): void {
    if (elementId === id) {
      setShowAllDetails(false)
      setElementId('')
    } else {
      setShowAllDetails(true)
      setElementId(id)
    }
  }

  function detailsParser(txt: string) {
    return parse(txt)
  }

  return (
    <section className="card">
      <header className={styles.header}>
        <h2 className={styles.title}>
          <sup>{icon}</sup>
          {title}
        </h2>
      </header>

      <hr className={styles.divider} />
      {informations.map((info) => (
        <div key={info.id} className={styles.informations}>
          <div className={styles['principal-info']}>
            <p className={styles.date}>{info.dates}</p>
            <div>
              <h3 className={styles.info}>{info.name}</h3>

              <h3 className={styles.place}>{info.place}</h3>
              {showAllDetails && elementId === info.id ? (
                <span className={styles.details}>
                  {detailsParser(info.details)}
                </span>
              ) : null}
            </div>
          </div>
          <div className={styles['view-more']}>
            {info.details ? (
              <button onClick={() => handleShowDetails(info.id)}>
                {showAllDetails && elementId === info.id
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
