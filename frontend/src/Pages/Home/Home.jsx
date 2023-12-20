import React from 'react';
import Navbar from '../../Components/NavBar/Navbar';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Navbar searchBar={false}/>
      <div className="home-content">
        <div className='left-content'>
          <h1 className='main-text'>Your code is in <span className='sub-text'>BlockChain</span></h1>
          <p className='description'>Start your journey towards the <br />Decentralised World</p>
          <div className='btn-container'>
            <input type='text' spellCheck='false' placeholder='Profile Name is Mandatory!!' className='input-field' />
          </div>
          <button className='btn'>START</button>
          <div className='signin-text'>Already Have an Account, 
            <a href="#" className='sign-in' target='_blank'>Sign In</a>
          </div>
        </div>
        <div className="right-content">
          <img src="hero.jpg" alt="" id="bg-img" />
        </div>
      </div>
    </div>
  )
}

export default Home
