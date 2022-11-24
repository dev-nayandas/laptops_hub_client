import React from 'react';

const Secure = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <div>
            <h2 className='text-yellow-800 text-3xl text-center p-6 mt-12'>How to be secure</h2> 
 
            </div>
            <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Where to meet?
  </div>
  <div className="collapse-content"> 
    <p>Meet at public place. Don't meet a place if the place is unknown to you. You can meet a middle point.</p>
  </div>
</div> 
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Don't pay first.
  </div>
  <div className="collapse-content"> 
    <p>First see the laptop practically is it ok or not. Take enough time for make a decision.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Don't meet alone .
  </div>
  <div className="collapse-content"> 
    <p>When you go to buy or sell a laptop don't meet alone. It will be safe for you and don't meet at night.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Secure;