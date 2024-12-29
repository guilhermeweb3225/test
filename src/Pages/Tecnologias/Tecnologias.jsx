import './Tecnologias.css'
import Header from '../../componetes/header/Header'
import Footer from '../../componetes/footer/Footer'
import Estru from '../../assets/icon.html.png'
import Style from '../../assets/icon.css.png'
import Jsc from '/assets/icon-Jsc.png';
import ReactImg from '/assets/icon-react.png';
import Ts from '/assets/icon-ts.png';
import Git from '/assets/icon-git.png';
import GitIcon from '/assets/git-icon.svg';
import Figma from '/assets/icon-figma.png';

function Tecnologias(){
    return(
    <>
    <Header/>
    <main>
        <h1>Tecnologias</h1>
        <section>
            <div className="dv-imgs">
                <img src={Estru}/>
                <div className="texto">
                    <p>Criação de estrutura e conteúdo das páginas web, garantindo acessibilidade e organização.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={Style}/>
                <div className="texto">
                    <p> Estilização e layout das páginas, criando designs responsivos e visualmente atraentes.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={Jsc} />
                <div className="texto">
                    <p>Desenvolvimento de interatividade e funcionalidades dinâmicas para a web.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={ReactImg}/>
                <div className="texto">
                    <p> Criação de interfaces de usuário reutilizáveis e eficientes com componentes modernos.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={Ts} />
                <div className="texto">
                    <p>Garantia de código mais seguro e robusto com tipagem estática.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={Git}/>
                <div className="texto">
                    <p>Controle de versão, facilitando o gerenciamento de projetos e colaborações.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={GitIcon}/>
                <div className="texto">
                    <p>Hospedagem de repositórios e trabalho em equipe com versionamento de código.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src={Figma} />
                <div className="texto">
                    <p> Criação de protótipos e design de interfaces, auxiliando na visualização de projetos.</p>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
    )
}
export default Tecnologias