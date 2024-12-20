import iconeFacebook from '../../assets/iconeFacebook.png'
import iconeInstagram from '../../assets/iconeInstagram.png'
import iconeTwitter from '../../assets/iconeTwitter.png'
import iconeYoutube from '../../assets/iconeYoutube.png'
import iconeLinkedln from '../../assets/iconeLinkedln.png'

import s from '../footer/footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={iconeFacebook} alt="Logo de icone do Facebook" /></a>
                    <a href=""><img src={iconeTwitter} alt="Logo de icone do Twitter" /></a>
                    <a href=""><img src={iconeYoutube} alt="Logo de icone do Youtube" /></a>
                    <a href=""><img src={iconeLinkedln} alt="Logo de icone do Linkedln" /></a>
                    <a href=""><img src={iconeInstagram} alt="Logo de icone do Instagram" /></a>
                </nav>    
            </section>
            
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>  
            </section>
        </footer>
    )
}