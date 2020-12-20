import React from "react";
import ReactDOM from "react-dom";
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    Carousel
} from "react-bootstrap";
import Axios from "axios";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        let self = this;
        Axios.post("/home").then(response =>
            self.setState({
                user: response.data
            })
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg="8">
                        <Jumbotron>
                            <h1>Halo, {this.state.user.name}!</h1>
                            <hr />
                            <p>
                                Selamat datang di Portal PKM Unpad. Di situs ini
                                kamu bisa melihat info seputar PKM, mencari tim
                                PKM, mengunggah proposal baik untuk Liga dan Non
                                Liga, monitoring Coaching, dan unggah proposal
                                final yang akan diunggah kepada Simbelmawa
                                Kemendikbud.
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                    <Col lg="4">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/carousel/1.jpg"
                                    alt="Akinov"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/carousel/2.jpg"
                                    alt="Medfo"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}

if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}
