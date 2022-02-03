import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 0 30px;
    box-sizing: border-box;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Text = styled.input`
    border: none;
    border: ${props => props.valid === false ? '1px solid #cecece' : '1px solid #E38F8F'};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    outline: none;

    font-size: 20px;
`

export const TextArea = styled.textarea`
    height: 100px;
    border: none;
    border: ${props => props.valid === false ? '1px solid #cecece' : '1px solid #E38F8F'};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    outline: none;

    font-size: 20px;

    font-family: Arial;
    resize: none;
`

export const SentButton = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background: #70E1CB;
    border: none;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: #232323;

    &:hover {
        background: #028A6F;
        color: #fff;
    }
`

export const ValidatorAlert = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    background: #FEEB72;
    border-radius: 10px;
    margin-bottom: 20px;

    font-weight: bold;
    font-size: 18px;
    color: #5B1D1D;
`

export const MessageSent = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    background: #79E76F;
    border-radius: 10px;
    margin-bottom: 20px;

    font-weight: bold;
    font-size: 18px;
    color: #0B2F07;
`

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: 60px;
`

export const MessageIntro = styled.h1`
    font-weight: bold;
    color: #4F325A;
`

export const CardMessage = styled.div`
    width: 100%;
    background: #D2E6F6;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #95CBF5;
    box-sizing: border-box;

    text-align: left;

    margin-bottom: 20px;
`

export const CardTitle = styled.div`
    color: #591C7C;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
`

export const CardText = styled.p`
    font-size: 17px;
`

export const CardData = styled.p`
    font-size: 15px;
    color: #505050;
    font-weight: bold;
    letter-spacing: 1.1px;
`