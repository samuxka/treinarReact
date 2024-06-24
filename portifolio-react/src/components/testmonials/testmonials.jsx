import './testmonials.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'
import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
    {
        id: 1,
        image: Image1,
        title: 'Cliente 1',
        subtitle: 'subtitulo 01',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus justo '
    },
    {
        id: 2,
        image: Image3,
        title: 'Cliente 2',
        subtitle: 'subtitulo 02',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus justo '
    },
    {
        id: 3,
        image: Image3,
        title: 'Cliente 3',
        subtitle: 'subtitulo 03',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus justo '
    },
    {
        id: 4,
        image: Image3,
        title: 'Cliente 4',
        subtitle: 'subtitulo 04',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus justo '
    },
    {
        id: 5,
        image: Image3,
        title: 'Cliente 5',
        subtitle: 'subtitulo 05',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus justo '
    },
]

function Testimonials(){
    return(
        <section className="testimonials container section">
            <h2 className="section__title">Clients & Reviews</h2>

            <Swiper className="testimonials__container grid" 
                modules={[ Pagination ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                grabCursor={true}
            >
                {data.map(({id, image, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image}/>
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials