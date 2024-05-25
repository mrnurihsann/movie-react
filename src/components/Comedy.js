import { Card, Col, Container, Row, Image } from "react-bootstrap" 
import bajajImage from "../assets/comedy/bajaj.jpg"
import bigImage from "../assets/comedy/big.jpeg"
import freeImage from "../assets/comedy/free.jpg"
import hangImage from "../assets/comedy/hang.jpg"
import heloImage from "../assets/comedy/helo.jpeg"
import kingImage from "../assets/comedy/king.jpg"
import orangImage from "../assets/comedy/orang.jpeg"

const Comedy = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="mt-4" id="comedy">FILM COMEDY</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={bajajImage} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BAJAK BAJURI</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={bigImage} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE BIG 4</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={freeImage} alt="Blackpanther" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">FREE GUY</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={hangImage} alt="Darkphoenik" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">HANG THE OVER</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={heloImage} alt="days" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">HELLO GHOST</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={kingImage} alt="Endgame" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE KING COMEDY</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={orangImage} alt="Guardian" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">ORANG KAYA BARU</Card.Title>
                                <Card.Text className="text-left">
                                Comedy, Romance, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Comedy