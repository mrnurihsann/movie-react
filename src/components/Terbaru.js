import { Card, Col, Container, Row, Image } from "react-bootstrap" 
import agaklainImage from "../assets/terbaru/agaklain.jpeg"
import articleImage from "../assets/terbaru/article.jpeg"
import badarawuhiImage from "../assets/terbaru/badarawuhi.jpg"
import cekmateImage from "../assets/terbaru/cekmate.jpg"
import hunterImage from "../assets/terbaru/hunter.jpeg"
import petualanganImage from "../assets/terbaru/petualangan.jpg"
import rebelmoonImage from "../assets/terbaru/rebelmoon.jpeg"
import sehidupsematiImage from "../assets/terbaru/sehidupsemati.jpg"
import siksakuburImage from "../assets/terbaru/siksakubur.png"

const Terbaru = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="mt-4" id="terbaru">FILM TERBARU</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={agaklainImage} alt="Agak Lain" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AGAK LAIN</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Comedy
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={articleImage} alt="Article" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">ARTICLE 370</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={badarawuhiImage} alt="Badarawuhi" className="images"/>
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
                        <Image src={cekmateImage} alt="Cekmate" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Cekmate</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={hunterImage} alt="Hunter" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">CITY HUNTER</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={petualanganImage} alt="Petualangan" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Anak Penangkap Hantu</Card.Title>
                                <Card.Text className="text-left">
                                Horror, Comedy, Adventure
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={rebelmoonImage} alt="Rebelmoon" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">REBEL MOON</Card.Title>
                                <Card.Text className="text-left">
                                Action, Adventure, Sci-Fi
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sehidupsematiImage} alt="Sehidupsemati" className="images"/>
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
                        <Image src={siksakuburImage} alt="Siksakubur" className="images"/>
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SIKSA KUBUR</Card.Title>
                                <Card.Text className="text-left">
                                Horror
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

export default Terbaru