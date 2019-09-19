import React, { Component } from 'react'; 
import { Button, ButtonGroup } from 'reactstrap';

import { Line  } from 'react-chartjs-2';


class ChartThree extends Component {
  state={
    showChartData:this.props.chartData.chartSix
  }

  
   

    


  render() {
    const charts = this.props.chartData; 
    return (
      <div>

            <h3 className="chart-title">
              Score Over Time
              <i className="fa fa-download" aria-hidden="true"></i>
            </h3> 

          <ButtonGroup >
            <Button onClick={()=>this.setState({showChartData:charts.chartFour})}>Monthly</Button>
            <Button onClick={()=>this.setState({showChartData:charts.chartFive})}>Quarterly</Button>
            <Button onClick={()=>this.setState({showChartData:charts.chartThree})}>Yearly</Button>
          </ButtonGroup>
      <div className="my-4">
        <Line
         data={this.state.showChartData}
          options={{ 
            tooltips: {
              enabled	:true
            }
            ,
            elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
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
                    }, 
                    
                }] , 
                xAxes: [{
                                      
                    maxBarThickness: 32,
                    
                    gridLines: {
                        offsetGridLines: true
                    }, 
                    
                }]
                
            }, 
            responsive:true

          
           

          }}
        />
        </div>
      </div>
    )
  }
}

export default ChartThree;
