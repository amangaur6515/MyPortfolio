import React from 'react'
import MainImage from '../Images/mainimg.webp'
import Skills from '../Components/Skills'
import '../Styles/Home.css'
const Home = () => {
  return (
    <>
    
    <div className='container-fluid home' style={{border:"2px solid red"}} >
      <div className='row about' >
        <div className='col-md-6 '>
          <h3>Hey, I Am Aman</h3>
          <div className='prompt'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
          </div>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
        <img src={MainImage} width="300px" height="300px" />
        </div>

      </div>
      
    </div>
    <Skills/>
    </>
  )
}

export default Home
