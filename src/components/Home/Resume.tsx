import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Suitcase,
} from 'phosphor-react'
import styles from './Resume.module.css'

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
      <div className={`${styles.badge} card`}>
        <img src={aboutMe.avatar_url} alt="" />
        <h2>{aboutMe.name}</h2>
        <p>{aboutMe.career}</p>
      </div>

      <div className={`${styles['about-me']} card`}>
        <h2>About me</h2>
        <p>{aboutMe.presentation}</p>
      </div>

      <div className={`${styles['personal-information']} card`}>
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
          </a>
        </p>
        <p>
          <Envelope size={24} weight="light" />
          eduardo.afq@gmail.com
        </p>
      </div>

      <div className="card">
        {technologies.map((tech) => (
          <div key={tech.tag} className={styles['technologies-group']}>
            <p className={styles['technology-title']}>{tech.tag}</p>
            <div className={styles.technologies}>
              {tech.list.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* A maioria das minhas habilidades foram adquiridas por meio de autoestudo, a maioria relacionada à ciência da computação.
Atualmente estou aprimorando minhas habilidades em tecnologias de desenvolvimento web, mais especificamente em tecnologia derivada da linguagem JavaScript. */
