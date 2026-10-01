import styles from './styles.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};

/* Componente genérico para renderizar conteúdo HTML */
export function GenericHtml({children}: GenericHtmlProps) {
  return <div className={styles.genericHtml}>
    {children}
  </div>
}