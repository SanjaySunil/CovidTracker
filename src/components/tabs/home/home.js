import React, { Component } from "react";
import HomeCard from "./homeCard";
import HomeStats from "./homeStatistics";

import fetchData from "../../../api";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            country: "",
        };
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        // console.log(data);
        this.setState({ data, country: country });
    };

    render() {
        const { data, country } = this.state;
        return (
            <div>
                <HomeCard />
                <HomeStats data={data} />
            </div>
        );
    }
}

export default Home;
