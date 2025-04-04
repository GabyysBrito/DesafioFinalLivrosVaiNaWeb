import logoFormularioLivro from '../../assets/logoFormularioLivro.png'

import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")
    const [mensagem, setMensagem] = useState("")

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

        setMensagem("Livro enviado com sucesso")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImage_url("")

        setTimeout(() => {
            setMensagem("")
        }, 3000)
    }

    return(
        <section className={s.QueroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>

            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <img src={logoFormularioLivro} alt="Imagem de um icone de um livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>

                <input type="text" value={titulo} placeholder='Título' onChange={capturaTitulo} required />
                <input type="text" value={categoria} placeholder='Categoria' onChange={capturaCategoria} required/>
                <input type="text" value={autor} placeholder='Autor' onChange={capturaAutor} required/>
                <input type="text" value={image_url} placeholder='Link da Imagem' onChange={capturaImage} required/>
                
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados} />
            </form>

            {mensagem && (
                <p className={s.mensagem}>{mensagem}</p>
            )}
        </section>
    )
}