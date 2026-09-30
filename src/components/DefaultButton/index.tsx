import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode; //React.ReactNode é um tipo que representa qualquer coisa que possa ser renderizada pelo React, incluindo elementos JSX, strings, números, arrays de elementos, fragmentos e null/undefined. Ele é usado para tipar propriedades que podem receber conteúdo variado para renderização.
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;


export function DefaultButton({icon, color = 'green', ...props }: DefaultButtonProps) {
  
  return (
    <>

      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  )
}