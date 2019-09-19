import React, { Component } from 'react'; 
import { HorizontalBar } from 'react-chartjs-2';


class ChartTwo extends Component {
    
  render() {
    return (
      <div>

            <h3 className="chart-title">
              Competitors’ Product Health Score
            <i className="fa fa-download" aria-hidden="true"></i>
            </h3> 

        <HorizontalBar
        

         data={this.props.chartData.chartTwo}
         
          options={{
            
            legend:{
              display:false
            }, 
            scales: {
              scaleLabel:[{

              }],
                xAxes: [{
                   
                    ticks: {
                      beginAtZero: true,
                      stepSize: 1,
                      min: 0,
                      max: 5
                      },
                    gridLines: {
                        offsetGridLines: false
                    }, 
                    
                }]
                
            }, 

          
            scales: {
              yAxes: [{
                
                    maxBarThickness: 10,
                
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
            }, 
            responsive:true

          }}
        />
      </div>
    )
  }
}

export default ChartTwo;
