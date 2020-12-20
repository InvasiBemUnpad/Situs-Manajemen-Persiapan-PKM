import React from "react";
import ReactDOM from "react-dom";
import {
    Container,
    Row,
    Col,
    Card,
    Spinner,
    Carousel,
    Table,
    Pagination
} from "react-bootstrap";
import Axios from "axios";
import ItemActionButton from "../components/Bid/ItemActionButton";
import MainActionButton from "../components/Bid/MainActionButton";

class Bid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bids: [],
            detailModal: false,
            loading: false,
            user: [],
            currentPage: undefined,
            firstPage: 1,
            lastPage: undefined,
            perPage: undefined,
            fromData: undefined,
            toData: undefined,
            totalData: undefined
        };
        this.showDetailModal = this.showDetailModal.bind(this);
        this.hideDetailModal = this.hideDetailModal.bind(this);
        this.refreshBid = this.refreshBid.bind(this);
        this.updateBidUrl = this.updateBidUrl.bind(this);
    }

    showDetailModal() {
        this.setState({
            detailModal: true
        });
    }

    hideDetailModal() {
        this.setState({
            detailModal: false
        });
    }

    updateBidUrl(page) {
        this.setState({
            bidUrl: "/bid?page=" + page
        });
        this.refreshBid(page);
    }

    refreshBid(page) {
        let self = this;
        this.setState({
            loading: true
        });
        Axios.post("/bid?page=" + page)
            .then(response => {
                self.setState({
                    bids: response.data.data,
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

    componentDidMount() {
        let self = this;
        this.refreshBid(this.state.page);
        Axios.post("/user")
            .then(response => {
                self.setState({
                    user: response.data
                });
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <Container fluid>
                    <Card>
                        <Card.Header>Comblangin Tim PKM</Card.Header>
                        <Card.Body>
                            <Spinner animation="border" />
                        </Card.Body>
                    </Card>
                </Container>
            );
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Col
                            lg="9"
                            style={{ padding: "0" }}
                            className="px-md-3"
                        >
                            <Card>
                                <Card.Header>Comblangin Tim PKM</Card.Header>
                                <Card.Body>
                                    <MainActionButton
                                        name={this.state.user.name}
                                        faculty={this.state.user.faculty}
                                    />
                                    <small>
                                        Menampilkan data ke-
                                        {this.state.fromData} hingga data ke-
                                        {this.state.toData} dari total{" "}
                                        {this.state.totalData} data.
                                    </small>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Ketua Tim</th>
                                                <th>Ide</th>
                                                <th>Narahubung</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.bids.map(
                                                (bid, index) => (
                                                    <tr key={bid.id}>
                                                        <td>
                                                            {index +
                                                                this.state
                                                                    .fromData}
                                                            .
                                                        </td>
                                                        <td>{bid.user.name}</td>
                                                        <td>{bid.idea}</td>
                                                        <td>
                                                            {bid.contactperson}
                                                        </td>
                                                        <td>
                                                            <ItemActionButton
                                                                name={
                                                                    bid.user
                                                                        .name
                                                                }
                                                                faculty={
                                                                    bid.user
                                                                        .faculty
                                                                }
                                                                skills={
                                                                    bid.skills
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </Table>
                                    <Pagination className="float-right">
                                        <Pagination.First
                                            onClick={() => this.updateBidUrl(1)}
                                        />
                                        {this.state.currentPage != 1 ? (
                                            <Pagination.Item
                                                onClick={() =>
                                                    this.updateBidUrl(
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
                                                    this.updateBidUrl(
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
                                                this.updateBidUrl(
                                                    this.state.lastPage
                                                )
                                            }
                                        />
                                    </Pagination>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="3">
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
}

if (document.getElementById("bid")) {
    ReactDOM.render(<Bid />, document.getElementById("bid"));
}
