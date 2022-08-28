import styles from './Card.module.css'

export function Card(props: any) {
  return (
    <section {...props} className={`${styles.card} ${props.className}`}>
      {props.children}
    </section>
  )
}
