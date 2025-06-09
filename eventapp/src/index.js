import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Seminars from './component/Seminars';
import Event from './component/Event';
import Speaker from './component/Speaker';
import Footer from './component/Footer';
import Pricing from './component/Pricing';
import Gallary from './component/Gallary';
import Testimonials from './component/Testimonials';
import Partners from './component/Partners';
import Articles from './component/Articles';
import Location from './component/Location';


import Upcomingworkshop from './component/Upcomingworkshop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
      <HeroSection/> 
    <Event/>
     <Seminars/>
     <Upcomingworkshop/>
     <Pricing/>
     <Gallary/>
     <Testimonials/>
     <Partners/> 
     <Articles/>
     <Location/>
     <Footer/>

    
     

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
