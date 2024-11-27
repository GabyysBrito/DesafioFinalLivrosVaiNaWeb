import Doar1 from '../../assets/Doar1.png'
import Doar2 from '../../assets/Doar2.png'
import Doar3 from '../../assets/Doar3.png'
import Doar4 from '../../assets/Doar4.png'

import s from './inicio.module.scss'

export default function Inicio(){
    return(
        <main>
            
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                
                <section className={s.cardsMotivos}> 
                    <section>
                        <img src={Doar1} alt="Imagem ilustrando circulo social de 4 pessoas"/>
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    
                    <section>
                        <img src={Doar2} alt="Imagem ilustrando a pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    
                    <section>
                        <img src={Doar3} alt="Imagem ilustrando 6 pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    
                    <section>
                        <img src={Doar4} alt="Imagem ilustrando balança representando igualdade"/>
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>

            </section>
        </main>
    )
}