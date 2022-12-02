import React from "react";
import './ChartBar.css';

class ChartBar extends React.Component{
  fillHeight = (val) => `${val}%`;
  render(){
    const{value, label, max} = this.props;
    let maxValue = '0%';
    if (max > 0) {
      maxValue =  this.fillHeight(Math.round((value/max)*100));
    }
    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{height: maxValue}}></div>
        </div>
          <div className="chart-bar__label">{label}</div>
      </div>
    )
  }
}

export default ChartBar;