import './Projetos.css'
import Header from '../../componetes/header/Header'
import Footer from '../../componetes/footer/Footer'
import projectImg from '../../../public/projeto-img.svg'
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
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="decricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"><button className="BT-Primario">clique aqui</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="decricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"><button className="BT-Primario">clique aqui</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="decricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <button className="BT-Primario">clique aqui</button>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="decricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"><button className="BT-Primario">clique aqui</button></a>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="decricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <button className="BT-Primario">clique aqui</button>
                </div>
                <div className="dv-primaria">
                    <div className="img">
                        <img src={projectImg} />
                    </div>
                    <h2>projeto</h2>
                    <p className="decricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa quas eveniet molestiae architecto temporibus natus. Ratione eum debitis possimus quidem quod natus dignissimos nisi sunt fugiat consequatur, quia rem?</p>
                    <a href="#"><button className="BT-Primario">clique aqui</button></a>
                </div>
            </div>
        </main>
    </main>
    <Footer/>
    </>
    )
}
export default Projetos