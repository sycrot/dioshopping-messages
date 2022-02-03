import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-bottom: 1px solid #cecece;
`

export const Logo = styled.h1`
    color: #9301FF;
    margin-left: 30px;
    letter-spacing: -5px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        color: #00A2FF;
    }
`

export const Navigation = styled.ul`
    display: flex;
    list-style-type: none;
`

export const NavItem = styled.li`
    color: #3D3D3D;
    font-size: 18px;
    font-weight: bold;
    margin: 0 14px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        color: #9301FF;
    }
`

export const Cart = styled.div`
    width: 50px;
    height: 50px;
    background: #D6AEF9;
    color: #3D3D3D;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-right: 30px;
    padding: 0 10px;

    font-weight: bold;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        background: #A855F1;
        color: #fff;
    }
`