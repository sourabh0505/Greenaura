import React from 'react';
import './greenaura.css';

function Greenaura() {
return (
<div className='greenaura' id='about'>
  <div className="allcontainers">
  <div className="whygreenaura">
    <div className="image1">
    <img className='logo1' src="https://shorturl.at/hmBLN" />
    </div>
    <h3>Why Greenaura?</h3>
    <p className='desc1'>Gain knowledge about different methods  <br /> to protect the environment and work   <br /> towards a sustainable future. Get a    <br /> customized certificates on the completion <br /> of quizes.</p>
  </div>

  <div className='keyfeatures'>
    
    <div className="image2">
      <img className='logo3' src="https://shorturl.at/moDJ9" />
    </div>
    <h3>Key Features</h3>
    <p className='desc1'>Providing quizes to learn about different  <br /> methods to protect the environment in a  <br /> fun way like fundamentals of renewable  <br /> energy, photovoltaics systems and smart, <br /> and introduction to electric vehicles.</p>
  </div>

  <div className="mission">
    <div className="image3">
    <img className='logo2' src="https://shorturl.at/hkCFO" />
    </div>
    <h3>Mission</h3>
    <p className='desc1'>We aim to raise awareness about pressing  <br /> environmental issues and their impact on  <br /> our world. We provide accessible, science-backed  <br /> information that empowers individuals to take <br /> steps toward a more sustainable future.</p>
  </div>
  </div>
</div>
)
}

export default Greenaura