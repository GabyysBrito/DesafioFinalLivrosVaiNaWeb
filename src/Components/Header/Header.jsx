import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import logoLivro from '../../assets/logoLivro.png'
import search from '../../assets/search.png' 
import s from './header.module.scss'

export default function Header(){
    return(
        <BrowserRouter>
            <header>
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt="Imagem de ilustração de livro aberto" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to = '/LivrosDoados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to= 'QueroDoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className = {s.barraDeBusca}>
                    <input type="search" name="" id="" placeholder='O que você procura?' />
                    <img src={search} alt="um ícone de busca que mostra ao lado direito do formulário" />
                </section>
            </header>

            <Routes>
                <Route path='/' element = {<Inicio/>} />
                <Route path='/LivrosDoados' element = {<LivrosDoados/>} />
                <Route path='/QueroDoar' element = {<QueroDoar/>} />
            </Routes>
        </BrowserRouter>
    )
}

