import {Link} from 'react-router-dom'
import { useRef } from 'react'
import './Header.css'
import linkeIcon from '../../../public/link-icon.svg'
import gitIcon from '../../../public/git-icon.svg'
function Header(){
    const Bt=useRef(null)
    const menu=useRef(null)
    function abrir(){
        Bt.current.style.display='none'
        menu.current.style.display='flex'
}
function fechar(){
    Bt.current.style.display='block'
    menu.current.style.display='none'
}
    return(
    <>
        <div id='menu'ref={menu}>
            <p id='fechar'onClick={fechar}>X</p>
            <div className="caminhoMobile">
                <Link to='/Tecnologias'>tecnologias</Link>
                <Link to='/Sobre'>sobre mim</Link>
                <Link to='/'>projetos</Link>
            </div>
        </div>
        <header>
            <div className="caminhosHeader">
                <Link to='/'>projetos</Link>
                <Link to='/Tecnologias'>tecnologias</Link>
                <Link to='/Sobre'>sobre mim</Link>
            </div>
            <div className="redes">
                <a href="https://github.com/guilhermeweb3225"target='_blank'>
                    <img src={gitIcon}/></a>
                <a href="https://www.linkedin.com/in/guilherme-ponciano-13b166308/"target='_blank'>
                    <img src={linkeIcon}/>
                </a>
            </div>
            <button className='BT-menu'id='abrir'onClick={abrir}ref={Bt}>menu</button>
        </header>
    </>
    )
}
export default Header