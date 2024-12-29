import './Sobre.css'
import Header from '../../componetes/header/Header'
import Footer from '../../componetes/footer/Footer'
import Bulssola from '../../../public/bulssola.png'
import Avatar from '../../../public/avatar.png'
import Livro from '../../../public/livro.png'
function Sobre(){
    return(
        <>
        <Header/>
        <main>
                    <h1 id='Nome'>Guilherme P.Oliveira</h1>
            <div className="box-1">
                <div className="SobreMim">
                    <img src={Bulssola}/>
                    <div className="texto">
                        <h2>Sobre Mim</h2>
                        <p>Tenho 18 anos e atualmente moro em Tangará da Serra, MT. Possuo conhecimentos em HTML, CSS, JavaScript, React.js, TypeScript, APIs REST, Git, GitHub e Figma (básico).</p>
                    </div>
                </div>
                <div className="Experiencia">
                    <img src={Livro}/>
                    <div className="texto">
                        <h2>Experiência e Conhecimentos</h2>
                        <p>Ao longo da minha jornada, desenvolvi uma sólida base em HTML, CSS e JavaScript, fundamentais para o desenvolvimento front-end. Ampliei meu conhecimento explorando React.js, TypeScript e APIs REST, tecnologias que utilizo para criar interfaces modernas e dinâmicas.
                        Também adquiri experiência em Git e GitHub, essenciais para controle de versão e trabalho colaborativo, além de me familiarizar com ferramentas como Figma para design e Shopify para e-commerce. Essas habilidades me permitem unir design e funcionalidade, entregando projetos completos e eficientes.</p>
                    </div>
                 </div>
                <div className='minhaJornada'>
                    <img src={Avatar}/>
                    <div className="texto">
                        <h2>Minha Jornada</h2>
                        <p>No primeiro ano do ensino médio, eu ainda não tinha ideia do que queria fazer da vida. Foi então que um amigo me apresentou ao mundo da programação. Curiosamente, ele acabou seguindo outro caminho, mas essa introdução mudou tudo para mim. Naquela época, eu não tinha um computador, apenas um celular. Mesmo assim, comecei a assistir a vídeos no YouTube, especialmente do professor Guanabara, e, com o celular, escrevi minhas primeiras linhas de código. Depois de algum tempo trabalhando e juntando dinheiro, consegui comprar meu primeiro computador — uma conquista que marcou o início da minha jornada na tecnologia.</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
        )
}
export default Sobre