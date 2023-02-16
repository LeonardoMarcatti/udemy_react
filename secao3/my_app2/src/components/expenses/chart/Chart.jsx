import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';


class Chart extends React.Component{
  render(){
    const {dataPoints} = this.props;
    const values = dataPoints.map(el => el.value);
    const max = Number(values.reduce((acc, curr) => acc+=curr));
    return (
      <div className="chart">
        {
          dataPoints.map((el, i) => <ChartBar value={Number(el.value)} max={max} label={el.label} key={el.label}/>)
        }
      </div>
    )
  }
}

export default Chart;