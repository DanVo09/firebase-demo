import styles from './styles.module.scss'
import Link from 'next/link'

function AppBar (props){
    return(
            <nav className={styles.light}>
            <ul>
                <li>
                    <Link href="/">
                    <a>{props.brand}</a>
                    </Link>
                    
                </li>
                <li>
                    <Link href="/login">
                    <a>{props.company}</a>
                    </Link>
                    
                    
                </li>
                <li>
                    <Link href="/signup">
                    <a>{props.loginOption}</a>
                    </Link>
                    
                </li>
            </ul>
            </nav>
       
        
    )

}

export default AppBar