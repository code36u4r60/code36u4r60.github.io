import { Briefcase, Code, GraduationCap } from 'phosphor-react'
import styles from './Main.module.css'
export function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.education}>
        <header className={`${styles.header} card`}>
          <h2 className={styles.title}>
            <GraduationCap size={32} weight="light" /> Education
          </h2>
          <p className={styles['view-more']}>View More</p>
        </header>

        <div className="card">
          <h3>
            <strong>Course:</strong>Licenciatura em Ciências de Engenharia
            Eletrotécnica e de Computadores – Ramo Telemática
          </h3>
          <h4>UTAD – Universidade Trás-os-Montes e Alto Douro</h4>
          <p>09/2011 - 07/2022</p>
          <p className={styles.description}>
            A obtenção de este curso deve-se ao facto de ter completado com
            sucesso todas as unidades curriculares dos três primeiros anos do
            Mestrado Integrado em Engenharia Eletrotécnica e de Computadores –
            Ramo Telemática.{' '}
          </p>
        </div>
      </section>

      <section className={styles.experience}>
        <header className={`${styles.header} card`}>
          <h2 className={styles.title}>
            <Briefcase size={32} weight="light" />
            Experience
          </h2>
          <p className={styles['view-more']}>View More</p>
        </header>
      </section>

      <section className={styles.projects}>
        <header className={`${styles.header} card`}>
          <h2 className={styles.title}>
            <Code size={32} weight="light" />
            My Projects
          </h2>
          <p className={styles['view-more']}>View More</p>
        </header>
      </section>
    </main>
  )
}
