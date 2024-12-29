import './Footer.css'
import linkeIcon from '../../assets/link-icon.svg'
import gitIcon from '../../assets/git-icon.svg'
import whatsIcon from '../../assets/whats-icon.svg'
import emailIcon from '../../assets/email-icon.svg'
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