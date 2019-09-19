import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utlities/css/font-awesome.min.css';


import NavBar from './components/NavBar';
import Header from './components/Header';
import Layout from './components/Layout';



import './App.css';


const App =()=>{
  return (
        <>
         <NavBar/>
        
        <div className="container">
            
           <Header/>
           <Layout/>


         </div>

        </>
  );

}

export default App;
