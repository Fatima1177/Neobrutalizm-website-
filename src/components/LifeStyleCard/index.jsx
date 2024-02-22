import  './style.scss'
 import React from 'react'
 import lifestyle1 from '../../assets/lifeStyle/lifestyle1.svg'
 import lifestyle2 from '../../assets/lifeStyle/lifestyle2.svg'

 
 const LifeStyleCard = () => {
   return (
     <section className='big-card'>
        <div className="mini-card">
            <img src={lifestyle1} alt="" />
            <div className="txt-sec">
                <h2>The 5 Golden Rules of Athleisure: Is It Really Acceptable to Wear Yoga Pants All Day Long?</h2>
                <p>Blame the designer athleisure boom or the annual glut of New Year’s resolutions to hit the gym on the regular, but this month you can expect to see even more women than usual wearing workout gear.</p>
            </div>
            <button>Read Article</button>
        </div>

        <div className="mini-card">
            <img src={lifestyle2} alt="" />
            <div className="txt-sec">
                <h2>The 5 Golden Rules of Athleisure: Is It Really Acceptable to Wear Yoga Pants All Day Long?</h2>
                <p>Blame the designer athleisure boom or the annual glut of New Year’s resolutions to hit the gym on the regular, but this month you can expect to see even more women than usual wearing workout gear.</p>
            </div>
            <button>Read Article</button>
        </div>

        


     </section>
   )
 }
 
 export default LifeStyleCard