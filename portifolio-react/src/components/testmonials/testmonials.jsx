import './testmonials.css'

const data = [
    {
        id: 1,
        image: Image1,
        title: 'Cliente 1',
        subtitle: 'subtitulo 01',
        comment: 'relato do cliente 1'
    },
]

function Testimonials(){
    return(
        <section className="testimonials container section">
            <h2 className="section__title">Clients & Reviews</h2>

            <div className="testimonials__container grid"></div>
        </section>
    )
}

export default Testimonials