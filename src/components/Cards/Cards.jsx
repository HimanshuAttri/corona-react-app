import React from 'react';
import {Card, CardContent, Typography, Grid} from  '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ({data: {confirmed, recovered,deaths,lastUpdate}}) => {
  if(!confirmed){
    return 'Loading............'
  }

  return(
    <div className = {styles.container}>
      <Grid container spacing={3} justify= 'center'>
        <Grid item component = {Card} xs={12} md={3} className= {cx(styles.card, styles.infected)}>
          <CardContent>
          <Typography color= "textSecondary " gutterBottom>Infected</Typography>
          <Typography varaint = 'h5'>
            <CountUp start= {0} end= {confirmed.value} duration= {2.5} separator=','/>

          </Typography>
          <Typography color = "textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
          <Typography varaint= "body2">No of active cases of COVID-19 </Typography>

  </CardContent>
        </Grid>
        <Grid item component = {Card} xs={12} md={3} className= {cx(styles.card, styles.recovered)}>
          <CardContent>
          <Typography color= "textSecondary " gutterBottom>Recovered</Typography>
            <Typography varaint = 'h5'>
              <CountUp start= {0} end= {recovered.value} duration= {2.5} separator=','/>

            </Typography>
            <Typography color = "textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
          <Typography varaint= "body2">No of recovered cases of COVID-19 cases </Typography>

  </CardContent>
        </Grid>
          <Grid item component = {Card} xs={12} md={3} className= {cx(styles.card, styles.deaths)}>
          <CardContent>
          <Typography color= "textSecondary " gutterBottom>Deaths</Typography>
            <Typography varaint = 'h5'>
              <CountUp start= {0} end= {deaths.value} duration= {2.5} separator=','/>

            </Typography>
            <Typography color = "textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
          <Typography varaint= "body2">No of deaths due to COVID-19 </Typography>

  </CardContent>
        </Grid>
      </Grid>

    </div>
  )
}
export default  Cards;
