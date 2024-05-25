import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Nur Cinema</Navbar.Brand>
                    <Nav className="nav">
                        <Nav.Link href="#terbaru">TERBARU</Nav.Link>
                        <Nav.Link href="#action">ACTION</Nav.Link>
                        <Nav.Link href="#comedy">COMEDY</Nav.Link>
                        <Nav.Link href="#horor">HOROR</Nav.Link>
                        <Nav.Link href="#romance">ROMANCE</Nav.Link>
                        <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar