function AboutBox(){
    return(
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">10+</h3>
                    <apan className="about__subtitle">Pojetos completos</apan>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">2720</h3>
                    <apan className="about__subtitle">Garrafas de café</apan>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-speedometer"></i>

                <div>
                    <h3 className="about__title">90+</h3>
                    <apan className="about__subtitle">Page speed</apan>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-rocket"></i>

                <div>
                    <h3 className="about__title">20+</h3>
                    <apan className="about__subtitle">Automações</apan>
                </div>
            </div>
        </div>
    )
}

export default AboutBox