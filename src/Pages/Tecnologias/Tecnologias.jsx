import './Tecnologias.css'
import Header from '../../componetes/header/Header'
import Footer from '../../componetes/footer/Footer'

function Tecnologias(){
    return(
    <>
    <Header/>
    <main>
        <h1>Tecnologias</h1>
        <section>
            <div className="dv-imgs">
                <img src="../../../public/icon-html.png" />
                <div className="texto">
                    <p>Criação de estrutura e conteúdo das páginas web, garantindo acessibilidade e organização.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src="../../../public/icon-css.png" />
                <div className="texto">
                    <p> Estilização e layout das páginas, criando designs responsivos e visualmente atraentes.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src='../../../public/icon-Jsc.png' />
                <div className="texto">
                    <p>Desenvolvimento de interatividade e funcionalidades dinâmicas para a web.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src='../../../public/icon-react.png'/>
                <div className="texto">
                    <p> Criação de interfaces de usuário reutilizáveis e eficientes com componentes modernos.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src='../../../public/icon-ts.png' />
                <div className="texto">
                    <p>Garantia de código mais seguro e robusto com tipagem estática.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src='../../../public/icon-git.png'/>
                <div className="texto">
                    <p>Controle de versão, facilitando o gerenciamento de projetos e colaborações.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src='../../../public/git-icon.svg'/>
                <div className="texto">
                    <p>Hospedagem de repositórios e trabalho em equipe com versionamento de código.</p>
                </div>
            </div>
            <div className="dv-imgs">
                <img src='../../../public/icon-figma.png' />
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