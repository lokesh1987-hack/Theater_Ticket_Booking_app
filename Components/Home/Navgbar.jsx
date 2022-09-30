import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap"
import Link from 'next/link'


const Navgbar = () => {

    const NavbarHeadings = [
        ['Home', '/'],
        ['About Us', '/about'],
        ['Contact Us', '/contact'],
     
    ]
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Movie Blaster</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {NavbarHeadings.map(([title, url]) => (
                                // <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                                <Link key={url} href={url}>
                                <a>{title}</a>
                                </Link>
                            ))}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navgbar