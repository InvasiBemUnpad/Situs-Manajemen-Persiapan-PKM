import React from "react";
import {
    Button,
    ButtonGroup,
    Modal,
    Form,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStore } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus, faStore);

class MainActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tambahModal: false
        };
        this.tambahModalShow = this.tambahModalShow.bind(this);
        this.tambahModalHide = this.tambahModalHide.bind(this);
    }

    tambahModalShow() {
        this.setState({
            tambahModal: true
        });
    }

    tambahModalHide() {
        this.setState({
            tambahModal: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col style={{ padding: "0" }}>
                            <ButtonGroup className="mb-3">
                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={this.tambahModalShow}
                                >
                                    <FontAwesomeIcon icon="plus" /> Tambah
                                </Button>
                                <Button variant="info" size="sm">
                                    <FontAwesomeIcon icon="store" /> Lihat Bursa
                                    Saya
                                </Button>
                            </ButtonGroup>
                        </Col>
                        <Col lg="4" style={{ padding: "0" }}>
                            <Form.Control
                                type="text"
                                placeholder={"Pencarian"}
                            />
                        </Col>
                    </Row>
                </Container>

                <Modal
                    show={this.state.tambahModal}
                    onHide={this.tambahModalHide}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Cari Tim</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nama pencari:</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.name}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Fakultas pencari:</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.faculty}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Kemampuan yang diperlukan:
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Disini diisi kemampuan yang diperlukan."
                                    defaultValue={this.props.skills}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Narahubung:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="ID Line atau nomor WhatsApp"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.tambahModalHide}
                        >
                            Tutup
                        </Button>
                        <Button variant="primary">Simpan</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default MainActionButton;
