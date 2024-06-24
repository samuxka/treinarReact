import './contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact(){
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const [subject, setSubject] = useState('')

   function sendEmail(e){
    e.preventDefault();

    if(name == '' || email == '' || message == '' || subject == '' ){
        alert("Preencha todos os campos!")
        return
    }

    const templateParams = {
        from_name: name,
        subject: subject,
        message: message,
        email: email
    }
    
    emailjs.send('service_jiir8tm', 'template_epgk9pk', templateParams, 'UNKmh1fHwU-j9baTe')
    .then((response) =>{
        alert('Email enviado com suvesso')
        console.log('email enviado', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
    }, (err) => {
        alert('Algo deu errado, tente novamente')
        console.log("ERRO", err)
    })
   }

    return(
        <section className="contact container section" id="contact">
            <h2 className="section__title">Fale comigo!</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Vamos conversar um pouco!</h3>
                    <p className="contact__details">Me envie uma mensagem para convesarmos. 👋</p>
                </div>

                <form action="" onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="contact__form-input" 
                                placeholder='Digite seu nome' 
                                required/>
                        </div>

                        <div className="contact__form-div">
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="contact__form-input" 
                                placeholder='Digite seu email' 
                                required/>
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input 
                            className="contact__form-input" 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type="text" 
                            placeholder='Assunto da mensagem' 
                            required/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            cols="30" 
                            rows="10" 
                            className='contact__form-input' 
                            placeholder='Mensagem' 
                            required>
                            </textarea>
                    </div>
                    <button className="btn">Enviar mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact