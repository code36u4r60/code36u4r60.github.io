import styles from './Header.module.css'
import logo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
      <h1>Eduardo Queirós</h1>
      <h2>This is my homepage !!!</h2>
      </div>
    </header>
  )
}
