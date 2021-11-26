import styles from './styles.module.scss'
import Logo from '../logo'

function Brand({tagline, title}){
    return(
        <div className={styles.brand}>
            <header>
            <Logo/>
                <h1>{title}</h1>
               
                <p>{tagline}</p>
            </header>
        </div>
    )
}
export default Brand