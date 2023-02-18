import React from 'react'
import "./footer.css"
function Foot() {
  return (
    <footer>
        <div class="frame-f">
        <div class="contact-f">
          <h2>Don’t Miss Out</h2>
          <h5>*Sign up for latest events and don’t miss out on anything.</h5>
          <h4>Email Address*</h4>
          <input type="text" placeholder="Enter Your Email Address"></input>
          <button><h3>Subscribe</h3></button>
        </div>
        <div class="company">
          <h3 class="comp-b">Company</h3>
          <a class="comp-c">Community</a>
          <a class="comp-d">Experts</a>
          <a class="comp-e">About</a>
        </div>
        <div class="company-a">
          <h3 class="comp-ab">Customer Service</h3>
          <a class="comp-ac">Community</a>
          <a class="comp-ad">Experts</a>
        </div>
        <div class="company-b">
          <h3 class="comp-bb">Legal</h3>
          <a class="comp-bc">Community</a>
          <a class="comp-bd">Experts</a>
        </div>
        <h5 class="last">Copyright 2023 Zetapass. All rights reserved</h5>
        </div>
        </footer>
  )
}

export default Foot;