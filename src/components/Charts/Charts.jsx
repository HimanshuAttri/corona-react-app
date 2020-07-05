import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Charts = ({data:{confirmed,deaths,recovered}, country}) => {
  const [dailyData, setDailyData]= useState([]);


  useEffect(() => {
    const fetchAPI = async() =>{
      setDailyData(await fetchDailyData());
    }

    fetchAPI();



  },[]);
  const lineChart = (

    dailyData.length

    ?(<Line
      data={{
        labels: dailyData.map(({date})=> date),
        datasets:[{
          data: dailyData.map(({confirmed})=>confirmed),
          label: "infected",
          borderColor:"#3333ff",
          fill: true,
          autoSkip : true
        },{
          data: dailyData.map(({deaths})=>deaths),
          label: "deaths",
          borderColor:"red",
          backgroundColor: "blue",
          fill: true,
          autoSkip: true
        }]

      }}/>):<div>data not available<h1></h1></div>


  );
const barChart =(
 true
  ?(
    <Bar
      data={{
        labels: ["infected", "recovered", "deaths"],
        datasets:[{
          label : "People",
          data: confirmed
        }]

      }}
      options={{
        legends: {display:false},
        title: {display: true, text:`Current state in ${country}`}
      }}/>
  ):null
);


  return(
  <div className = {styles.container}>
    {lineChart}

  </div>
  )
}
export default Charts;
