import './Projetos.css'
import Header from '../../componetes/header/Header'
import Footer from '../../componetes/footer/Footer'
import projectImg from '../../assets/projeto-img.svg'
import imgTC from '../../assets/img-tc.png'
import imgBoard from '../../assets/board-img.png'
import imgBlog from '../../assets/img-blog.jpeg'
function Projetos(){
    return (
    <>
    <Header/>
    <main>
        <main>
            <div className='cabeçalho'>
                <h1 id='projetos'>Projetos</h1>
            </div>
            <div className='caixa-projetos'>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={imgTC} />
                    </div>
                    <h2>+TC</h2>
                    <p className="descriçao">Esta landing page apresenta uma empresa de serviços digitais focada em transformar ideias em produtos de alta qualidade. Com uma equipe experiente, oferece Gestão de Projetos, Análise de Negócios e Testes de Software para garantir eficiência, redução de erros e economia de tempo e custos.</p>
                    <a href="https://guilhermeweb3225.github.io/TC/"target='_blanck'><button className="BT-Primario">Abrir</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={imgBoard} />
                    </div>
                    <h2>Board de Tarefas</h2>
                    <p className="descriçao">Aplicação web simples para gerenciar usuários e suas tarefas. Permite criar,excluir e marcar tarefas como concluídas. Ideal para praticar HTML, CSS e JavaScript com foco em manipulação de dados e DOM. </p>
                    <a href="https://guilhermeweb3225.github.io/RID-190400_Desafio3/"target='_blanck'><button className="BT-Primario">Abrir</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={imgBlog} />
                    </div>
                    <h2>Blog</h2>
                    <p className="descriçao">Um blog totalmente responsivo,mantendo a integridade visual do site.</p>
                    <a href="https://guilhermeweb3225.github.io/RID--190400-Desafio-2/index.html"target='_blanck'><button className="BT-Primario">clique aqui</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="descriçao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"target='_blanck'><button className="BT-Primario">clique aqui</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="descriçao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"target='_blanck'><button className="BT-Primario">clique aqui</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="descriçao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"target='_blanck'><button className="BT-Primario">clique aqui</button></a>
                </div>
            </div>
        </main>
    </main>
    <Footer/>
    </>
    )
}
export default Projetos