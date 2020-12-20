import React from "react";
import { ButtonGroup, Button, Modal, Form } from "react-bootstrap";

class ItemActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailModal: false,
            daftarModal: false
        };

        this.detailModalHide = this.detailModalHide.bind(this);
        this.detailModalShow = this.detailModalShow.bind(this);
        this.daftarModalHide = this.daftarModalHide.bind(this);
        this.daftarModalShow = this.daftarModalShow.bind(this);
    }

    detailModalHide() {
        this.setState({
            detailModal: false
        });
    }

    detailModalShow() {
        this.setState({
            detailModal: true
        });
    }

    daftarModalHide() {
        this.setState({
            daftarModal: false
        });
    }

    daftarModalShow() {
        this.setState({
            daftarModal: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <ButtonGroup>
                    <Button
                        variant="secondary"
                        onClick={this.detailModalShow}
                        size="sm"
                    >
                        Detail
                    </Button>
                    <Button
                        variant="info"
                        onClick={this.daftarModalShow}
                        size="sm"
                    >
                        Daftar
                    </Button>
                </ButtonGroup>
                <Modal
                    show={this.state.detailModal}
                    onHide={this.detailModalHide}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Informasi Lebih Lanjut </Modal.Title>
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
                                <Form.Label>Sudah didaftarkan oleh:</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue="X Orang"
                                    disabled
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            onClick={this.detailModalHide}
                        >
                            Tutup
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.daftarModal}
                    onHide={this.daftarModalHide}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Daftar Tim</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nama lengkap:</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.name}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Fakultas:</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.faculty}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Pesan:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Masukkan pesan kamu untuk tim pengaju."
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.daftarModalHide}
                        >
                            Tutup
                        </Button>
                        <Button variant="primary">Daftar Tim</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ItemActionButton;
