import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function LivrosDoados(){
    
    const [livros, setLivros] = useState([])

    const getLivros = async() => {
        const resposta = await axios.get("https://apilivrosvainaweb.onrender.com/livros")

        setLivros(resposta.data)
    }

    useEffect(() => {
        getLivros()
    }, [])

    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>

            <section className={s.containerCards}>

                        {
                            livros.map((item) => 
                                (
                                    <section className= {s.secao}>
                                        <div>
                                            <h3>{item.titulo}</h3>
                                            <h3>{item.categoria}</h3>
                                            <h3>{item.autor}</h3>
                                            <img src={item.image_url} alt={item.titulo} />
                                        </div>
                                    </section>
                                ))
                        }
            </section>
        </section>
    )
}