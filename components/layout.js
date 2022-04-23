//importing styles of layout.module.css
import styles from './layout.module.css'

export default function Layout({children})
{
    return <div className={styles.container}>{children}</div>
}