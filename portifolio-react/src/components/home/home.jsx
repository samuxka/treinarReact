import './home.css'
import Me from '../../assets/avatar-1.png'
import { Typewriter } from 'react-simple-typewriter'
import HeaderSocials from './headerSpcials'
import ScrollDown from './ScrollDown'

function Home() {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} className='home__img'/>
                <h1 className="home__name">Samuel Oliveira</h1>
                <span className="home__education">
                    <p>Eu sou<span className='type__effect'>
                    <Typewriter
                        words={[' desenvolvedor Javascript...', ' desenvolvedor Python...', '.....', ' o seu proximo desenvolvedor!']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={40}
                        delaySpeed={1000}
                    /></span></p>
                </span>
                <HeaderSocials />
                <a href="#contact" className="btn">Fale comigo!</a>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home 