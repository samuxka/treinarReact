import './pricing.css'
import Image1 from '../../assets/price-1.svg'
import Image2 from '../../assets/price-2.svg'
import Image3 from '../../assets/price-3.svg'

function Pricing(){
    return(
       <section className="pricing container section">
        <h3 className="section__title">Planos</h3>

        <div className="pricing__container grid">
            <div className="pricing__item">
                <img src={Image1} className="pricing__img" />
                <h3 className="pricing__plan">Basic</h3>
                <p className="pricing__title">A simple option but powerful to manage your business</p>
                <p className="pricing__support">Email support</p>
                <h3 className="price">
                    <em>R$</em> 9 <span>Mounth</span>
                </h3>
                <a href="" className="btn">Get Started</a>
            </div>

            <div className="pricing__item">{/* best */}
                <span className="badge">Recommended</span>
                <img src={Image2} className="pricing__img" />
                <h3 className="pricing__plan">Medium</h3>
                <p className="pricing__title">Unlimited product including app integration and more features</p>
                <p className="pricing__support">Mon-fri support</p>
                <h3 className="price">
                    <em>R$</em> 15 <span>Mounth</span>
                </h3>
                <a href="" className="btn">Get Started</a>
            </div>


            <div className="pricing__item">
                <img src={Image3} className="pricing__img" />
                <h3 className="pricing__plan">Ultimate</h3>
                <p className="pricing__title">A wise option for large companies and individuals</p>
                <p className="pricing__support">24/7 support</p>
                <h3 className="price">
                    <em>R$</em> 19 <span>Mounth</span>
                </h3>
                <a href="" className="btn">Get Started</a>
            </div>
        </div>
       </section>
    )
}

export default Pricing