import './portifolio.css'
import Menu from './menu';
import { useState } from 'react'

function Portifolio(){
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category == categoryItem
        })

        setItems(updatedItems)
    }
    return(
        <section className="work container section" id="portifolio">
            <h2 className="section__title">Ultimos trabalhos</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Todos</span>
                <span className="work__item" onClick={() => filterItem('Web')}>Desenvolvimento Web</span>
                <span className="work__item" onClick={() => filterItem('Automação')}>Automação</span>
                <span className="work__item" onClick={() => filterItem('Design')}>Design</span>
                <span className="work__item" onClick={() => filterItem('Jogos')}>Jogos</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const{ id, image, title, desc, category } = elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <p className="work__desc">{desc}</p>
                            <a href="#" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portifolio