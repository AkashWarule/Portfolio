import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,<br/></span>
            <span className='introText'>I'm <span className='introName'>Akash</span><br/>Fullstack Developer</span>
            <p className='intoPara'>I am a Skilled with HTML,CSS,JS and React.Js<br/> with good knowledge of Java,Spring Boot,Hibernate and SQL</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro
