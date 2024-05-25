import { Card, Col, Container, Row, Image } from "react-bootstrap" 
import apoImage from "../assets/superhero/apo.jpg"
import blackImage from "../assets/superhero/black.jpeg"
import darkImage from "../assets/superhero/dark.png"
import daysImage from "../assets/superhero/days.jpg"
import endgameImage from "../assets/superhero/endgame.jpg"
import guarImage from "../assets/superhero/guar.jpeg"
import infiImage from "../assets/superhero/infi.jpeg"
import marvelImage from "../assets/superhero/marvel.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="mt-4" id="superhero">FILM SUPER HERO</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={apoImage} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">X-MEN Apocalypse</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={blackImage} alt="Blackpanther" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BLACK PANTHER</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={darkImage} alt="Darkphoenik" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">X-MEN DARK PHOENIK</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={daysImage} alt="days" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">X-MEN DAYS OF FUTURE PAST</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={endgameImage} alt="Endgame" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AVENGERS END GAME</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={guarImage} alt="Guardian" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">GUARDIAN OF THE GALAXY</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={infiImage} alt="Infinity" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">INFINITY WAR</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={marvelImage} alt="Themarvel" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE MARVELS</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
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

export default SuperHero