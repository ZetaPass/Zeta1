import React from 'react'
import "./style.css"
import Navbar from './Navbar';
import Main from './Main';
import Event from './Event';
import Foot from './Foot';
import Course from './Course';
import Tagline from './Tagline';
import Team from './Team';
 function Home() {
  return (
    <div  class="containt">
     <div class="homepage">
        <Navbar/>
        <Main/>
        <Event/>
        <Course/>
        <Team/>
     </div>
    </div>
  )
}
export default Home;
