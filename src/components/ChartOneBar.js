import React, { Component } from 'react'; 
import { Bar } from 'react-chartjs-2';


class Chart extends Component {
    
  

  render() {
    return (
      <div>

            <h3 className="chart-title">
              Product Health Score by Category
              <i className="fa fa-download" aria-hidden="true"></i>
            </h3> 
        
        <Bar
         data={this.props.chartData.chartOne}
          options={{
            legend:{
              display:false
            }, 
            scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    min: 0,
                    max: 5
                    },
                                    
                    gridLines: {
                        offsetGridLines: true
                    } 
                    
                }] , 
                xAxes: [{
                                      
                    maxBarThickness: 32,
                    gridLines: {
                    offsetGridLines: true
                    }
                    
                      }]
               
            }
                      
          }}
        />
      </div>
    );
  }
}

export default Chart;
