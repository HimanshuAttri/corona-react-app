import React, { Component } from 'react';
import Charts from './components/Charts/Charts.jsx'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import fetchData from './api'
import fetchDailyDate from './api'

class App extends Component{

  state = {
    data: [],
    country: ' ;'
  }

  async componentDidMount(){
    const data  = await fetchData();

    this.setState({
      data: data
    })
  }

  handleCountryChange = async(country) => {

      const data  = await fetchData(country);
      console.log(data)


      this.setState({
        data: data,
        country:country
      })
  }

  render(){
    return(
      <div className={styles.container}>

      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Cards data={this.state.data} country={this.state.country}/>
      <Charts/>

      </div>
    )
  }
}
export default App;
