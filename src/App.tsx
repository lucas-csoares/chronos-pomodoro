import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
    return (
        <>
            <Heading>Olá, Mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio delectus dignissimos quae quam a, harum suscipit quas impedit voluptatem placeat esse quo aliquam veritatis dolor deserunt facilis fugiat distinctio!
            Esse amet ipsum harum praesentium ullam eaque? Repellendus repudiandae dolorem tempore aliquam? Impedit voluptatibus debitis, nam sapiente facere qui pariatur veritatis ut, quasi suscipit esse? Nihil soluta nisi minus sint.
            </p>
        </>
    )
       
}

export {App};