import React from 'react';
import { images } from './images';

const Footer = () => {
  return (
    
    <div class="ending">
	<div class="container">
		<div class="row">
			<div class="col-md-2">
				<h5 class="text-header">HELP</h5>
				<p>Privacy Policy</p>
				<p>Refund Policy</p>
			</div>
			<div class="col-md-2">
				<h5 class="text-header">STORE</h5>
				<p>Men Fashion</p>
				<p>Women Fashion</p>
				<p>Gadgets and Store Sale</p>
        <p>Collection</p>
			</div>
			<div class="col-md-3">
				<h5 class="text-header">SUPPORT</h5>
				<p>Feedback</p>
				<p>Contact Us</p>
        <p>Customer Service</p>
        <p>Terms & Condition</p>
			</div>
			<div class="col-md-5">
				<h5 class="text-header">Follow us on All Social Media</h5>
				<p>e-mail<span><img src={images.gmail} alt="" height='30px'/></span> : Williamaziza37@gmail.com</p>
				<p>instagram<span><img src={images.instagram} alt="" height='30px'/></span> : @ azey_man_</p>
        <p>twitter(X) <span><img src={images.twitter} alt="" height='30px'/></span>: @ azey_man1</p>

			</div>
		</div>
  
	</div>
  <p className='copy'>&copy; 2023 All Rights Reserved</p>
	</div>
  
    
  );
}

export default Footer;
