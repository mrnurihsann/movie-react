import { Card, Col, Container, Row, Image } from "react-bootstrap" 
import badarawuhiImage from "../assets/horror/badarawuhi.jpg"
import jenazahImage from "../assets/horror/jenazah.jpg"
import keretaImage from "../assets/horror/kereta.jpg"
import lampirImage from "../assets/horror/lampir.jpeg"
import sehidupsematiImage from "../assets/horror/sehidupsemati.jpg"
import siksakuburImage from "../assets/horror/siksakubur.png"
import vinaImage from "../assets/horror/vina.jpeg"

const Horor = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="mt-4" id="horor">FILM HOROR</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={badarawuhiImage} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BADARAWUHI</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={jenazahImage} alt="Apo" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">PEMANDI JENAZAH</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={keretaImage} alt="Blackpanther" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">KERETA BERDARAH</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={lampirImage} alt="Darkphoenik" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">LAMPIR</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sehidupsematiImage} alt="days" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SEHIDUP SEMATI</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={siksakuburImage} alt="Endgame" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SIKSA KUBUR</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={vinaImage} alt="Guardian" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">VINA SEBELUM 7 HARI</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Adventure
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

export default Horor