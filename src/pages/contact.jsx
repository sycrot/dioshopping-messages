/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import * as C from './contact.style'

const Contacts = () => {
    
    const api = 'http://localhost:5000/message'
    const [messages, setMessages] = useState([])
    const [author, setAuthor] = useState('')
    const [messageContent, setMessageContent] = useState('')
    const [render, setRender] = useState(false)
    const [validator, setValidator] = useState(false)
    const [messageSent, setMessageSent] = useState(false)

    useEffect(async () => {
        const res = await fetch(api)
        const data = await res.json()
        setMessages(data)
    }, [render])

    const sendMessage = () => {
        setValidator(false)

        if(author.length <= 0 || messageContent.length <=0) return setValidator(!validator)

        const bodyForm = {
            email: author,
            message: messageContent
        }

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyForm)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.id) {
                setRender(true)
                setMessageSent(true)
                setTimeout(() => {
                    setMessageSent(false)
                }, 4000)
            }
        })

        setAuthor('')
        setMessageContent('')
    }

    const formateDate = (dateMessage) => {
        let months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro'
        ]

        let date = new Date(dateMessage)
        let dia = date.getDate().toString().padStart(2, '0')
        let month = months[date.getMonth()]
        let year = date.getFullYear()

        let hours = date.getHours()
        let minutes = date.getMinutes()

        return `${dia} de ${month} de ${year} às ${hours}:${minutes}`
    }

    return (
        <>
            <C.Container>
                <C.FormContainer>
                    <C.Text type="email" name="name" id="name" placeholder="Digite seu nome ou e-mail aqui..." value={author} onChange={(e) => {setAuthor(e.target.value)}} valid={validator}/>

                    <C.TextArea name="message" id="message" value={messageContent} onChange={(e) => {setMessageContent(e.target.value)}} placeholder="Escreva sua mensagem aqui..." rows="5" valid={validator}/>
                    {validator && 
                        <C.ValidatorAlert>
                            Preencha todos os dados para enviar a mensagem!
                        </C.ValidatorAlert>
                    }

                    {messageSent &&
                        <C.MessageSent>Mensagem enviada!</C.MessageSent>
                    }

                    <C.SentButton onClick={sendMessage}>Enviar</C.SentButton>
                </C.FormContainer>
                <C.MessagesContainer>
                    <C.MessageIntro>Últimas Mensagens</C.MessageIntro>
                    {messages.map((item) => {
                        return(
                            <C.CardMessage id={item.id}>
                                <C.CardTitle>{item.email}</C.CardTitle>
                                <C.CardText>{item.message}</C.CardText>
                                <C.CardData>
                                    {formateDate(item.created_at)}
                                </C.CardData>
                            </C.CardMessage>
                        )
                    })}
                </C.MessagesContainer>
            </C.Container>
        </>
    )
}

export default Contacts