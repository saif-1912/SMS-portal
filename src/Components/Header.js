import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">
                            <Link to='add_library' className='button'>Add Library</Link>
                        </Nav.Link>
                        <Nav.Link href="">
                            <Link to='add_group' className='button'>Add Group</Link>
                        </Nav.Link>
                        <Nav.Link href="">
                            <Link to='add_contact' className='button'>Add Contact</Link>
                        </Nav.Link>
                        <Nav.Link href="">
                            <Link to='add_message' className='button'>Add Message</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
