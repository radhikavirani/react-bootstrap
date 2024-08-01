import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import './style.css';


const menuLinks = [
    {name:"Home", link:"Home" },
    {name:"About", link:"About"},
    {name:"Contact", link:"Contact"},
]

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#logo">Traders</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        menuLinks?.map((menuLink) => <Nav.Link href={menuLink?.link}>{menuLink?.name}</Nav.Link>)
                    }
                    <Button variant="primary">Login</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header