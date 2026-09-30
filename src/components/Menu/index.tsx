import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';


export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');
    
    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Evita que o link seja seguido
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        })
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); 
    }, [theme]); // Executa toda vez que o estado do componente muda, ou seja, toda vez que o tema é alterado.

    return (
        <>
            <nav className={styles.menu}>
                <h1>{theme}</h1>
                <a className={styles.menuLink} href="#" aria-lavel="Ir para a Home" title="Ir para a Home">
                    <HouseIcon/>
                </a>
                <a className={styles.menuLink} href="#" aria-lavel="Ver histórico" title="Ver histórico">
                    <HistoryIcon/>
                </a>
                <a className={styles.menuLink} href="#" aria-lavel="Configurações" title="Configurações">
                    <SettingsIcon/>
                </a>
                <a className={styles.menuLink} 
                href="#" 
                aria-lavel="Mudar tema" 
                title="Mudar tema"
                onClick={handleThemeChange}
                >
                    <SunIcon/>
                </a>
            </nav>
        </>
    ) 
}