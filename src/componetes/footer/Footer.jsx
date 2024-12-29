import './Footer.css'
import linkeIcon from '../../../public/link-icon.svg'
import gitIcon from '../../../public/git-icon.svg'
import whatsIcon from '../../../public/whats-icon.svg'
import emailIcon from '../../../public/email-icon.svg'
function Footer(){
    return (
    <footer>
        <div className="redes">
            <a href="https://api.whatsapp.com/send?phone=5565992807604"target='_blank'>
                <img src={whatsIcon} id="img1"/></a>
            <a href="mailto:guilhermeponciano3225@gmail.com"target='_blank'>
                <img src={emailIcon} id="img2"/></a>
            <a href="https://github.com/guilhermeweb3225"target='_blank'>
                <img src={gitIcon} id="img3"/></a>
            <a href="https://www.linkedin.com/in/guilherme-ponciano-13b166308/"target='_blank'><img src={linkeIcon}id="img4"/></a>
        </div>
    </footer>
    )
}
export default Footer