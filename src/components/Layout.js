import React , {Component} from 'react';
import axios from 'axios'; 
import ChartOneBar from './ChartOneBar';
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';
import ChangeLogCard from './ChangeLogCard'; 


class Layout extends Component {

  state = {
    chartData:[], 
    sucefullyLoaded:false
  }

  componentWillMount(){
    axios.get('./data.json')
    .then((res)=>{
      this.setState ({chartData:res.data.charts , sucefullyLoaded:true});
      console.log(res.data.charts);
      console.log('loaded');
    })
    .catch((err)=>{
      console.log('errorr' + err);
    })
}

// Showcharts = () =>{

//   {this.state.sucefullyLoaded ? <div>Hello</div> : <div>error</div>  }

// };

  render() {
    {console.log(this.state.chartData)}
    if(!this.state.sucefullyLoaded)
        {
            return null;
        }
        
  return (
    <div className="layout">

        <div className="row">
            <div className="col-md-6">
              <div className="card">
              <ChartOneBar chartData={this.state.chartData}/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
              <ChartTwo chartData={this.state.chartData}/>
              </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card">
              <ChartThree chartData={this.state.chartData}/>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="card ">
              <ChangeLogCard/>
              </div>
            </div>
        </div>
      
    </div>
  );
}
}

export default Layout; 
