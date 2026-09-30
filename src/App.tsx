import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';



function App() { 
    return (
        <>
           <Container>
                <Logo />
           </Container>

           <Container>
                <Menu />
           </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className='formRow'>
                        <DefaultInput 
                            labelText="task" 
                            id="meuInput" 
                            type="text" 
                            placeholder="Digite sua tarefa..."
                        />
                    </div>

                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>

                    
                    <div className='formRow'>
                        {/* Por que o valor de icon está entre chaves? R = Porque estamos passando um JSX element como prop */}
                       <DefaultButton icon={<PlayCircleIcon />} color='green'/>  
                       {/* <DefaultButton icon={<PlayCircleIcon />} color='red'/>    */}
                    </div>
                </form>
            </Container>


            <Container>
                <Footer />
            </Container>

        </>
    )
       
}

export {App};