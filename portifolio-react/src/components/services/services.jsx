import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: 'Desenvolvimento web',
        description: 'Criação de sites modernos e responsivos. Soluções personalizadas para destacar sua presença online.'
    },
    {
        id: 2,
        image: Image2,
        title: 'Automação',
        description: 'Automatize tarefas repetitivas com eficiência. Soluções personalizadas para simplificar seu trabalho.'
    },
    {
        id: 3,
        image: Image3,
        title: 'Design Gráfico',
        description: 'Criatividade que transforma ideias em imagens poderosas. Destaque-se com um design único e impactante.'
    },
]

function Services(){
    return(
        <section className="services container section" id='services'>
            <h2 className="section__title">Serviços</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return(
                        <div className="services__card" key={id}>
                            <img src={image} className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services