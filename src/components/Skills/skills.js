import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import BackendDev from '../../assets/BackendDev.png'
import SQL from '../../assets/SQL.png'

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I do</span>
       <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating user-friendly websites. I have a strong understanding of web development. I am proficient in HTML,CSS,and JavaScript as well as React.Js </span>
       <div className='skillBars'>
         <div className='skillBar'>
             <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>Web Development</h2>
                <p>HTML, CSS, JS and React.js </p>
             </div>
         </div>
        
          <div className='skillBar'>
             <img src={BackendDev} alt='BackendDev' className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>Java Development</h2>
                <p>Spring Boot, Hibernate, Jdbc, Servlet and Jsp, Mvc</p>
             </div>
          </div>
          <div className='skillBar'>
             <img src={SQL} alt='SQL' className='skillBarImg'/>
             <div className='skillBarText'>
                <h2>Database-SQL Server</h2>
                <p>Sql-server</p>
             </div>
          </div>
      </div>
    </section>
  )
}

export default Skills
