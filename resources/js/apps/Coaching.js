import React from "react";
import ReactDOM from "react-dom";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Table,
    Button
} from "react-bootstrap";

class Coaching extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="8">
                        <Card>
                            <Card.Header>Sesi Coaching</Card.Header>
                            <Card.Body>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        Nama Ketua:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        NPM Ketua:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        Dosen pendamping:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        NIDN dosen pendamping:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        Judul PKM:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        Bidang PKM:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        Dosen Coach:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control type="text" size="sm" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column md="3">
                                        Identitas anggota:
                                    </Form.Label>
                                    <Col md="6">
                                        <Form.Control
                                            as="select"
                                            onChange={this.hdlMemberChange}
                                        >
                                            <option>Anggota 1</option>
                                            <option>Anggota 2</option>
                                            <option>Anggota 3</option>
                                            <option>Anggota 4</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Card
                                    style={{ backgroundColor: "#F5F5F5" }}
                                    body
                                >
                                    <Form.Group as={Row}>
                                        <Form.Label column md="3">
                                            Nama Anggota 1:
                                        </Form.Label>
                                        <Col md="6">
                                            <Form.Control
                                                type="text"
                                                size="sm"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column md="3">
                                            Nama Anggota 1:
                                        </Form.Label>
                                        <Col md="6">
                                            <Form.Control
                                                type="text"
                                                size="sm"
                                            />
                                        </Col>
                                    </Form.Group>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card>
                            <Card.Header>Riwayat Coaching</Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Tanggal</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2018-2-3</td>
                                            <td>
                                                <Button variant="info">
                                                    Aksi
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Coaching;

if (document.getElementById("coaching")) {
    ReactDOM.render(<Coaching />, document.getElementById("coaching"));
}
