import React from 'react';

const Header = () => {
  return (
    <div className="header">
        <a href=".//" className="back">&lt; Back</a>
        <div className="card">
           
           <div className="rectangle">
               <p className="health-score">Health Score</p> 
               <p className="score">3.6</p>
           </div>

           
           <div className="card-body">
            
            <div className="row">
                <div className="col-md-9 col-sm">
                <span className="client">Clorox </span>
                <span className="brand">Burt’s Bees </span>
                </div>

                <div className="col-md-3 col-sm">
                <div className="export-button text-right">
                <button className="btn btn-lg">
                <i className="fa fa-download mr-2" aria-hidden="true"></i>
                    EXPORT 

                </button>
                </div>
                </div>
            </div>
           
            <p className="card-text product">Burt's Bees 100% Natural Origin Blush with Vitamin E, Shy Pink - 0.19 Ounce</p>
                <span className="date">Last updated March 9, 2019</span>
   
                <div className="row">

                    <div className="col detail">
                    Product ASIN:<span>&nbsp;B073X2KX9Z</span> 
                    </div>

                    <div className="col detail">
                    Amazon Platform:<span>&nbsp;fresh</span> 
                    </div>

                    <div className="col detail">
                    Product Category:<span>&nbsp;health; beauty; makeup; blush</span> 
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-4 detail">
                    Product URL:
                    <a href="https://www.amazon.com/Burts-Bees-Natural-Blush-Vitamin/dp/B073X2KX9Z">
                    &nbsp; https://www.amazon.com/Burts-Bees-Natural-Blush-Vitamin/dp/B073X2KX9Z
                    </a>
                    </div>

                    <div className="col-md-4 detail">
                    Amazon Region:
                    <span >
                    &nbsp; fr
                    </span>
                    </div>
                </div>
               
            </div>
            </div>

        </div>
      
    
  );
}

export default Header;
