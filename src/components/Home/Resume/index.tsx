import styles from './Resume.module.css'

import {
  ArrowSquareOut,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Suitcase,
} from 'phosphor-react'
import { Card } from '../../Common/Card'

interface Technology {
  tag: string
  list: {
    id: string
    name: string
  }[]
}

interface AboutMe {
  name: string
  career: string
  presentation: string
  avatar_url: string
}

interface TechnologiesProps {
  technologies: Technology[]
  aboutMe: AboutMe
}

export function Resume({ technologies, aboutMe }: TechnologiesProps) {
  return (
    <section className={styles.resume}>
      <Card>
        <div className={styles.badge}>
          <img src={aboutMe.avatar_url} alt="" />
          <h1>{aboutMe.name}</h1>
          <p>{aboutMe.career}</p>
        </div>
      </Card>

      <Card className={styles['about-me']}>
        <h2>About me</h2>
        <p>{aboutMe.presentation}</p>
      </Card>

      <Card className={styles['personal-information']}>
        <div>
          <p>
            <MapPin size={24} weight="light" /> Portugal
          </p>
          <p>
            <Suitcase size={24} weight="light" /> Free to Work
          </p>
          <p>
            <GithubLogo size={24} weight="light" />
            <a
              href="https://github.com/code36u4r60"
              target="_blank"
              rel="noopener noreferrer"
            >
              @code36u4r60
              <sup>
                <ArrowSquareOut size={13} weight="light" />
              </sup>
            </a>
          </p>
          <p>
            <GithubLogo size={24} weight="light" />
            <a
              href="https://github.com/Sebenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sebenta
              <sup>
                <ArrowSquareOut size={13} weight="light" />
              </sup>
            </a>
          </p>
          <p>
            <LinkedinLogo size={24} weight="light" />{' '}
            <a
              href="https://www.linkedin.com/in/eduardoqueiros/"
              target="_blank"
              rel="noopener noreferrer"
            >
              eduardoqueiros
              <sup>
                <ArrowSquareOut size={13} weight="light" />
              </sup>
            </a>
          </p>
          <p>
            <Envelope size={24} weight="light" />
            <a href="mailto:eduardo.afq@gmail.com">
              eduardo.afq@gmail.com
              <sup>
                <ArrowSquareOut size={13} weight="light" />
              </sup>
            </a>
          </p>
        </div>
      </Card>

      <Card>
        <h2>Technologies</h2>
        {technologies.map((tech) => (
          <div key={tech.tag} className={styles['technologies-group']}>
            <h3 className={styles['technology-title']}>{tech.tag}</h3>
            <div className={styles.technologies}>
              {tech.list.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </section>
  )
}
