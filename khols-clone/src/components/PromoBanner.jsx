import React from 'react';
import './PromoBanner.css';
function PromoBanner() {
  return (
    <div className="promo-banner">
      <div className='dc'>
      <div className='earn'>
        <span>Earn $10 Kohl's cash</span>
        <p>for every $50 spent through june 16.</p>
        <p>Not valid on Sephora at Khol's.</p>
        <a href="cash">details</a>
      </div>
      <div className='rewards'>
        <span>Members earn 5% rewards</span>
        <span>every day.</span>
        <a href="sign">Sign In or join Free Today</a>
      </div>
      <div className='return'>
        <span>Have a Kohl's return?</span>
        <p>It's quick & hassle free!</p>
        <a href="Learn">Learn More</a>
      </div>
      </div>
      <div className='advertisement'>
      <div className='event'>
        <p>NEW</p>
        <p>Customer</p>
        <p>Appreciation</p>
        <span>EVENT</span>
        <h6>Ends june 16</h6>
      </div>
      <div className='offer'>
        <p>We're saying thanks with a brand new event!</p>
        <p>Everyone saves-but just how much is up to you!</p>
        <a href="det">details</a>
        <div>
          <p>Non-members</p>
          <p>Take an extra</p>
          <p>15%</p>
          <p>off</p>
        </div>
        <div>
          <p>Kohl's Rewards Members</p>
          <p>Take an extra</p>
          <p>20%</p>
          <p>off</p>
          <p>+earn 5% rewards.</p>
        </div>
        <div>
          <p>Kohl's card Holders</p>
          <p>Take an extra</p>
          <p>30%</p>
          <p>off</p>
          <p>+ earn 7.5% rewards</p>
          <p>with a</p>
          <p>Kohl's Card</p>
        </div>
        <p>Not a Kohl's Rewards member?<a href="j">Join today</a> to save 20%</p>
        <p>Not a Kohl's Card holder? <a href="at">Apply today</a> to save even more once approved.</p>
      </div>
      </div>

      <div className='box'>
        <div className='bu'>$10 & under</div>
        <div className='bu'>$20 & under</div>
        <div className='bu'>Men</div>
        <div className='bu'>Father's Day Gifts</div>
        <div className='bu'>Home</div>
        <div className='bu'>Women</div>
        <div className='bu'>Kids</div>
        <div className='bu'>shoes</div>
      </div>

      <div className="countdown">
        <span>Don’t wait! These savings end in… 3 HR : 58 MIN : 36 SEC</span>
      </div>
    </div>
  );
}

export default PromoBanner;
