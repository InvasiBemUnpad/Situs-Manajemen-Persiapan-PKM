import React from "react";
import ReactDOM from "react-dom";
import {
    Container,
    Row,
    Col,
    Image,
    Form,
    Button,
    Card,
    Badge
} from "react-bootstrap";

class Liga extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memberActive: "Anggota 1",
            memberActiveName: "",
            memberName: ["", "", "", ""],
            memberNPM: [undefined, undefined, undefined, undefined]
        };

        this.hdlMemberChange = this.hdlMemberChange.bind(this);
        this.hdlMemberName = this.hdlMemberName.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        console.log(this.state.memberName);
    }

    hdlMemberChange(e) {
        let memberIndex = 0;
        switch (e.target.value) {
            case "Anggota 1":
                memberIndex = 0;
                break;

            case "Anggota 2":
                memberIndex = 1;
                break;

            case "Anggota 3":
                memberIndex = 2;
                break;

            case "Anggota 4":
                memberIndex = 3;
                break;

            default:
                break;
        }
        this.setState({
            memberActive: e.target.value,
            memberActiveName: this.state.memberName[memberIndex]
        });
    }

    hdlMemberName(e) {
        this.setState({
            memberActiveName: e.target.value
        });
        switch (this.state.memberActive) {
            case "Anggota 1":
                this.state.memberName[0] = e.target.value;
                break;

            case "Anggota 2":
                this.state.memberName[1] = e.target.value;
                break;

            case "Anggota 3":
                this.state.memberName[2] = e.target.value;
                break;

            case "Anggota 4":
                this.state.memberName[3] = e.target.value;
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Container>
                <Row className="mb-4 justify-content-center">
                    <Col xs="auto" className="text-center">
                        <Card body style={{ borderRadius: "5px" }}>
                            <Badge variant="primary">1</Badge>
                            <br />
                            Masa Pengunggahan Proposal
                        </Card>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Card body style={{ borderRadius: "5px" }}>
                            <Badge variant="secondary">2</Badge>
                            <br />
                            Masa Pemeriksaan Proposal
                        </Card>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Card body style={{ borderRadius: "5px" }}>
                            <Badge variant="secondary">3</Badge>
                            <br />
                            Coaching Clinic
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg="7"
                        className="py-3 mb-4 mb-lg-0"
                        style={{
                            borderRadius: "4px",
                            backgroundColor: "white",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2"
                        }}
                    >
                        <h5>Pengajuan Proposal</h5>
                        <hr />
                        <Form>
                            <Form.Group>
                                <Form.Label>Nama ketua:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nama Ketua"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>NPM ketua:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="NPM Ketua"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nama dosen pendamping:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nama Dosen Pendamping"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>NIDN dosen pendamping:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="NIDN Dosen Pendamping"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Judul PKM:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Judul PKM"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Bidang PKM:</Form.Label>
                                <Form.Control as="select">
                                    <option>PKM-P</option>
                                    <option>PKM-K</option>
                                    <option>PKM-M</option>
                                    <option>PKM-T</option>
                                    <option>PKM-KC</option>
                                    <option>PKM-GT</option>
                                    <option>PKM-AI</option>
                                    <option>PKM-GFK</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Isi identitas anggota:</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={this.hdlMemberChange}
                                >
                                    <option>Anggota 1</option>
                                    <option>Anggota 2</option>
                                    <option>Anggota 3</option>
                                    <option>Anggota 4</option>
                                </Form.Control>
                            </Form.Group>
                            <Card style={{ backgroundColor: "#F5F5F5" }} body>
                                <Form.Group>
                                    <Form.Label>
                                        Nama {this.state.memberActive}:
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            "Nama " + this.state.memberActive
                                        }
                                        onChange={this.hdlMemberName}
                                        value={this.state.memberActiveName}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        NPM {this.state.memberActive}:
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={
                                            "NPM " + this.state.memberActive
                                        }
                                    />
                                </Form.Group>
                            </Card>
                            <Card
                                style={{ backgroundColor: "#F5F5F5" }}
                                className="mt-3"
                                body
                            >
                                <Form.Group>
                                    <Form.Label>Unggah berkas:</Form.Label>
                                    <br />
                                    <Button variant="primary">Unggah</Button>
                                    <Form.Text className="text-muted">
                                        Format berkas <b>docx</b> dengan ukuran
                                        maksimal <b>2MB</b>.
                                    </Form.Text>
                                </Form.Group>
                            </Card>
                        </Form>
                        <hr />
                        <Button
                            variant="primary"
                            onClick={this.submit}
                            className="float-right"
                        >
                            Ajukan
                        </Button>
                    </Col>
                    <Col lg="4" className="ml-lg-auto" style={{ padding: "0" }}>
                        <Container
                            style={{
                                borderRadius: "4px",
                                backgroundColor: "white",
                                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2"
                            }}
                            className="p-3"
                        >
                            <h5 className="text-center">Poster Kegiatan</h5>
                            <hr />
                            <Image src="/images/poster-liga.jpg" fluid />
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

if (document.getElementById("liga")) {
    ReactDOM.render(<Liga />, document.getElementById("liga"));
}
