import { Button, Col, Container, Row } from 'react-bootstrap';
const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="title" id="intro">NUR CINEMA</div>
                <div className="welcome">ENJOY YOUR WATCH FILM</div>
                <div className="introButton mt-4 text-center">
                    <Button variant="dark" href="#terbaru">Lihat Film Terbaru</Button>
                </div>              
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro