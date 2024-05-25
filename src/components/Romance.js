import { Card, Col, Container, Row, Image } from "react-bootstrap" 
import ancikaImage from "../assets/romance/ancika.jpg"
import dilan1Image from "../assets/romance/dilan1.jpg"
import dilan2Image from "../assets/romance/dilan2.jpg"
import galaksiImage from "../assets/romance/galaksi.jpeg"
import mileaImage from "../assets/romance/milea.jpg"
import nikahImage from "../assets/romance/nikah.jpeg"
import umurImage from "../assets/romance/umur.jpg"

const Romance = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="mt-4" id="romance">FILM ROMANCE</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={ancikaImage} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">ANCIKA 1995</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={dilan1Image} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DILAN 1990</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={dilan2Image} alt="Blackpanther" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DILAN 1991</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={galaksiImage} alt="Darkphoenik" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">GALAKSI</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={mileaImage} alt="days" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">MILEA</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={nikahImage} alt="Endgame" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Bukannya Aku Tidak Mau Nikah</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={umurImage} alt="Guardian" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DI BAWAH UMUR</Card.Title>
                                <Card.Text className="text-left">
                                Romance, Drama
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

export default Romance