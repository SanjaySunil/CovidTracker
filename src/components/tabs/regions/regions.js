import React, { Component } from 'react';

import RegionCard from './regionCard';
import RegionPicker from './regionPicker';
import CardData from './regionStatistics';

import fetchData from '../../../api';

class Regions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
    };
  }
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <RegionCard />
        <RegionPicker handleCountryChange={this.handleCountryChange} />
        <CardData data={data} />
      </div>
    );
  }
}

export default Regions;
