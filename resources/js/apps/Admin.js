import React from "react";
import ReactDOM from "react-dom";
import {
    Card,
    Form,
    Container,
    Row,
    Col,
    Badge,
    Table,
    Button,
    Pagination,
    Spinner
} from "react-bootstrap";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Doughnut } from "react-chartjs-2";
library.add(faPlus, faAngleDoubleRight);

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            users: [],
            loading: true,
            currentPage: undefined,
            firstPage: 1,
            lastPage: undefined,
            perPage: undefined,
            fromData: undefined,
            toData: undefined,
            totalData: undefined,
            sortFaculty: undefined,
            memberData: {
                labels: [
                    "FH",
                    "FEB",
                    "FK",
                    "FMIPA",
                    "Faperta",
                    "FKG",
                    "FIB",
                    "Fisip",
                    "Fapsi",
                    "Fapet",
                    "Fikom",
                    "FKEP",
                    "FPIK",
                    "FTIP",
                    "FF",
                    "FTG"
                ],
                datasets: [
                    {
                        label: "Mahasiswa",
                        backgroundColor: [
                            "#1abc9c",
                            "#2ecc71",
                            "#3498db",
                            "#9b59b6",
                            "#34495e",
                            "#16a085",
                            "#27ae60",
                            "#2980b9",
                            "#8e44ad",
                            "#2c3e50",
                            "#f1c40f",
                            "#e67e22",
                            "#e74c3c",
                            "#ecf0f1",
                            "#95a5a6",
                            "#f39c12"
                        ],
                        data: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16
                        ]
                    }
                ]
            }
        };
        this.refreshUser = this.refreshUser.bind(this);
        this.handleFaculty = this.handleFaculty.bind(this);
    }

    handleFaculty(e) {
        this.setState({
            sortFaculty: e.target.value
        });

        let self = this;
        Axios.post("/user/moderator/search/faculty", {
            faculty: e.target.value
        })
            .then(response =>
                self.setState({
                    users: response.data.data
                })
            )
            .catch(error => {
                console.log(error.response);
            });
    }

    componentDidMount() {
        let self = this;
        Axios.post("/user")
            .then(response => {
                self.setState({
                    user: response.data
                });
            })
            .catch(error => {
                console.log(error.response);
            });
        this.refreshUser(1);
    }

    updateUserUrl(page) {
        this.setState({
            userUrl: "/user/moderator?page=" + page
        });
        this.refreshUser(page);
    }

    refreshUser(page) {
        let self = this;
        Axios.post("/user/moderator?page=" + page)
            .then(response => {
                self.setState({
                    users: response.data.data,
                    currentPage: response.data.current_page,
                    firstPage: 1,
                    lastPage: response.data.last_page,
                    perPage: response.data.per_page,
                    fromData: response.data.from,
                    toData: response.data.to,
                    totalData: response.data.total
                });
            })
            .catch(error => {
                console.log(error.response);
            })
            .then(() => {
                self.setState({
                    loading: false
                });
            });
    }

    render() {
        if (this.state.loading)
            return (
                <Container>
                    <Row>
                        <Col lg="8">
                            <Card>
                                <Card.Header>Laman Admin</Card.Header>
                                <Card.Body>
                                    <Spinner animation="border" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        else
            return (
                <Container>
                    <Row>
                        <Col lg="8" className="mb-3 mb-lg-0">
                            <Card>
                                <Card.Header>Laman Admin</Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="2">
                                                Nama:
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control
                                                    type="text"
                                                    defaultValue={
                                                        this.state.user !=
                                                        undefined
                                                            ? this.state.user
                                                                  .name
                                                            : ""
                                                    }
                                                    disabled
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="2">
                                                NPM/NIDN:
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control
                                                    type="text"
                                                    defaultValue={
                                                        this.state.user !=
                                                        undefined
                                                            ? this.state.user
                                                                  .npm
                                                            : ""
                                                    }
                                                    disabled
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="2">
                                                Status:
                                            </Form.Label>
                                            <Col sm="10">
                                                <h3>
                                                    <Badge variant="success">
                                                        Admin
                                                    </Badge>
                                                </h3>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                    <hr />
                                    <h5>Daftar Moderator:</h5>
                                    <Container fluid style={{ padding: "0" }}>
                                        <Row>
                                            <Col md="6">
                                                <Form.Control
                                                    as="select"
                                                    onChange={
                                                        this.handleFaculty
                                                    }
                                                >
                                                    <option>
                                                        Semua mahasiswa
                                                    </option>
                                                    <option>
                                                        Fakultas Hukum
                                                    </option>
                                                    <option>
                                                        Fakultas Ekonomi dan
                                                        Bisnis
                                                    </option>
                                                    <option>
                                                        Fakultas Kedokteran
                                                    </option>
                                                    <option>
                                                        Fakultas Matematika dan
                                                        IPA
                                                    </option>
                                                    <option>
                                                        Fakultas Pertanian
                                                    </option>
                                                    <option>
                                                        Fakultas Kedokteran Gigi
                                                    </option>
                                                    <option>
                                                        Fakultas Ilmu Budaya
                                                    </option>
                                                    <option>
                                                        Fakultas Ilmu Sosial dan
                                                        Ilmu Politik
                                                    </option>
                                                    <option>
                                                        Fakultas Psikologi
                                                    </option>
                                                    <option>
                                                        Fakultas Peternakan
                                                    </option>
                                                    <option>
                                                        Fakultas Ilmu Komunikasi
                                                    </option>
                                                    <option>
                                                        Fakultas Keperawatan
                                                    </option>
                                                    <option>
                                                        Fakultas Perikanan dan
                                                        Ilmu Kelautan
                                                    </option>
                                                    <option>
                                                        Fakultas Teknologi
                                                        Industri Pertanian
                                                    </option>
                                                    <option>
                                                        Fakultas Farmasi
                                                    </option>
                                                    <option>
                                                        Fakultas Teknik Geologi
                                                    </option>
                                                </Form.Control>
                                            </Col>
                                            <Col md="6">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Pencarian"
                                                ></Form.Control>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <small>
                                        Menampilkan data ke-
                                        {this.state.fromData} hingga data ke-
                                        {this.state.toData} dari total{" "}
                                        {this.state.totalData} data.
                                    </small>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Nama</th>
                                                <th>Fakultas</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.users.map(
                                                (user, count) => (
                                                    <tr key={user.id}>
                                                        <td>
                                                            {this.state
                                                                .fromData +
                                                                count}
                                                        </td>
                                                        <td>
                                                            {user.name + " "}
                                                            <Badge variant="primary">
                                                                Mod
                                                            </Badge>
                                                        </td>
                                                        <td>{user.faculty}</td>
                                                        <td>
                                                            <Button variant="info">
                                                                Edit
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </Table>
                                    <Pagination className="float-sm-right">
                                        <Pagination.First
                                            onClick={() =>
                                                this.updateUserUrl(1)
                                            }
                                        />
                                        {this.state.currentPage != 1 ? (
                                            <Pagination.Item
                                                onClick={() =>
                                                    this.updateUserUrl(
                                                        this.state.currentPage -
                                                            1
                                                    )
                                                }
                                            >
                                                {this.state.currentPage - 1}
                                            </Pagination.Item>
                                        ) : (
                                            ""
                                        )}
                                        <Pagination.Item active>
                                            {this.state.currentPage}
                                        </Pagination.Item>
                                        {this.state.currentPage !=
                                        this.state.lastPage ? (
                                            <Pagination.Item
                                                onClick={() =>
                                                    this.updateUserUrl(
                                                        this.state.currentPage +
                                                            1
                                                    )
                                                }
                                            >
                                                {this.state.currentPage + 1}
                                            </Pagination.Item>
                                        ) : (
                                            ""
                                        )}
                                        <Pagination.Last
                                            onClick={() =>
                                                this.updateUserUrl(
                                                    this.state.lastPage
                                                )
                                            }
                                        />
                                    </Pagination>
                                    <Button variant="success">
                                        <FontAwesomeIcon icon="plus" /> Tambah
                                        Moderator
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>Statistik</Card.Header>
                                <Card.Body>
                                    <Container fluid style={{ padding: "0" }}>
                                        <Row>
                                            <Doughnut
                                                data={this.state.memberData}
                                                options={{
                                                    legend: {
                                                        display: false
                                                    },
                                                    title: {
                                                        display: true,
                                                        text:
                                                            "Grafik Pendaftar Berdasarkan Fakultas"
                                                    }
                                                }}
                                            />
                                        </Row>
                                        <Row className="mt-2">
                                            <Col xs="8">
                                                <b>Total pendaftar:</b>
                                            </Col>
                                            <Col xs="4">12</Col>
                                        </Row>
                                        <Row>
                                            <Col xs="8">
                                                <b>Fakultas terbanyak:</b>
                                            </Col>
                                            <Col xs="4">FK</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Doughnut
                                                data={this.state.memberData}
                                                options={{
                                                    legend: {
                                                        display: false
                                                    },
                                                    title: {
                                                        display: true,
                                                        text:
                                                            "Grafik Pengunggah Berdasarkan Fakultas"
                                                    }
                                                }}
                                            />
                                        </Row>
                                        <Row className="mt-2">
                                            <Col xs="8">
                                                <b>Total pengunggah:</b>
                                            </Col>
                                            <Col xs="4">8</Col>
                                        </Row>
                                        <Row>
                                            <Col xs="8">
                                                <b>Fakultas terbanyak:</b>
                                            </Col>
                                            <Col xs="4">FMIPA</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col>
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                >
                                                    Lihat Semua Member{" "}
                                                    <FontAwesomeIcon icon="angle-double-right" />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
    }
}

export default Admin;

if (document.getElementById("admin")) {
    ReactDOM.render(<Admin />, document.getElementById("admin"));
}
