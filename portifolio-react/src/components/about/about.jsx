import './about.css'
import Image from '../../assets/avatar-1.png'
import AboutBox from './AboutBox'

function About(){
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre mim</h2>
        
            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Cras ultricies risus justo, eget cursus eros consectetur vitae. 
                            Maecenas dignissim congue ex, a porta metus lacinia quis. Vestibulum vel diam dui. 
                        </p>
                        <a href="" className="btn">Baixar currículo</a>
                    </div>

                    <div className="about__skils grid">
                        <div className="skills__data">
                            <div className="skills__titles reactjs">
                                <h3 className="skills__name">React js</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage react"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Node.Js</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage nodejs"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Design Gráfico</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage design"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <AboutBox />
        </section>
    )
}

export default About