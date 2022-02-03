/* eslint-disable jsx-a11y/alt-text */
import * as C from './header.style'

const Header = () => {
    return (
        <>
            <C.Container>
                <C.Logo>DIO Shopping</C.Logo>
                <C.Navigation>
                    <C.NavItem>Inicio</C.NavItem>
                    <C.NavItem>Contato</C.NavItem>
                </C.Navigation>
                <C.Cart>
                    <i className="icon-cart">🛒</i>
                    <p className='count-items'>1</p>
                </C.Cart>
            </C.Container>
        </>
    )
}

export default Header