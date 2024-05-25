import { Card, Col, Container, Row, Image } from "react-bootstrap" 
import badImage from "../assets/action/bad.jpeg"
import bomImage from "../assets/action/bom.jpg"
import fallImage from "../assets/action/fall.jpeg"
import furiosaImage from "../assets/action/furiosa.jpeg"
import kingdomImage from "../assets/action/kingdom.jpeg"
import liftImage from "../assets/action/lift.jpeg"

const Action = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="mt-4" id="action">FILM ACTION</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={badImage} alt="Badland" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BADLAND HUNTERS</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={bomImage} alt="Bom" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">13 BOM DIJAKARTA</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={fallImage} alt="Thefall" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE FALL GUY</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={furiosaImage} alt="Furiosa" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">FURIOSA</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={kingdomImage} alt="Kingdom" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">KING OF THE PLANET</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={liftImage} alt="Lift" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">LIFT</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
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

export default Action