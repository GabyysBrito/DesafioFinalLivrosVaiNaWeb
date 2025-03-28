import logoFormularioLivro from '../../assets/logoFormularioLivro.png'

import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    } 

    const capturaAutor = (e) => {
        setAutor(e.target.value) 
    }

    const capturaImage = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async() => {

        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post("https://apilivrosvainaweb.onrender.com/doar", dadosPEnviar)

    }

    return(
        <section className={s.QueroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>

            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <img src={logoFormularioLivro} alt="Imagem de um icone de um livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>

                <input type="text" id="" placeholder='Título' onChange={capturaTitulo} />
                <input type="text" id="" placeholder='Categoria' onChange={capturaCategoria}/>
                <input type="text" id="" placeholder='Autor' onChange={capturaAutor}/>
                <input type="text" id="" placeholder='Link da Imagem' onChange={capturaImage}/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados} />
            </form>
        </section>
    )
}