import './home.css'
import Me from '../../assets/avatar-1.svg'

function Home() {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} className='home__img'/>
                <h1 className="home__name">Samuel Oliveira</h1>
                <span className="home__education">
                    
                </span>
            </div>
        </section>
    )
}

export default Home 