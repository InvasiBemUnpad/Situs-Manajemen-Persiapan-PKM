import React from "react";
import Axios from "axios";

class KetuaTim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: ""
        };
    }

    componentDidMount() {
        let self = this;
        Axios.post("/user", {
            user_id: this.props.userId
        })
            .then(response => {
                self.setState({
                    owner: response.data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return this.state.owner;
    }
}

export default KetuaTim;
