import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
    children: React.ReactNode;
}

/*MainTemplate é um componente que envolve o conteúdo principal da aplicação */
function MainTemplate({ children }: MainTemplateProps) { 
    return (
        <>
           <Container>
                <Logo />
           </Container>

           <Container>
                <Menu />
           </Container>

            {children}

            <Container>
                <Footer />
            </Container>

        </>
    )
       
}

export {MainTemplate};