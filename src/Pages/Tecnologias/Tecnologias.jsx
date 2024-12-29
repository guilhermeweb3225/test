import './Tecnologias.css';
import Header from '../../componetes/header/Header';
import Footer from '../../componetes/footer/Footer';

// Importando as imagens da pasta src
import iconHtml from '../../assets/icon-html.png';
import iconCss from '../../assets/icon-css.png';
import iconJsc from '../../assets/icon-Jsc.png';
import iconReact from '../../assets/icon-react.png';
import iconTs from '../../assets/icon-ts.png';
import iconGit from '../../assets/icon-git.png';
import gitIcon from '../../assets/git-icon.svg';
import iconFigma from '../../assets/icon-figma.png';

function Tecnologias() {
  return (
    <>
      <Header />
      <main>
        <h1>Tecnologias</h1>
        <section>
          <div className="dv-imgs">
            <img src={iconHtml} alt="HTML" />
            <div className="texto">
              <p>Criação de estrutura e conteúdo das páginas web, garantindo acessibilidade e organização.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={iconCss} alt="CSS" />
            <div className="texto">
              <p> Estilização e layout das páginas, criando designs responsivos e visualmente atraentes.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={iconJsc} alt="JavaScript" />
            <div className="texto">
              <p>Desenvolvimento de interatividade e funcionalidades dinâmicas para a web.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={iconReact} alt="React" />
            <div className="texto">
              <p> Criação de interfaces de usuário reutilizáveis e eficientes com componentes modernos.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={iconTs} alt="TypeScript" />
            <div className="texto">
              <p>Garantia de código mais seguro e robusto com tipagem estática.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={iconGit} alt="Git" />
            <div className="texto">
              <p>Controle de versão, facilitando o gerenciamento de projetos e colaborações.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={gitIcon} alt="Git Icon" />
            <div className="texto">
              <p>Hospedagem de repositórios e trabalho em equipe com versionamento de código.</p>
            </div>
          </div>
          <div className="dv-imgs">
            <img src={iconFigma} alt="Figma" />
            <div className="texto">
              <p> Criação de protótipos e design de interfaces, auxiliando na visualização de projetos.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Tecnologias;
