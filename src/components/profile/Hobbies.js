import React from 'react'
import './Hobbies.scss'
const Hobbies = () => {
    return (
        <div className="bd-hobbies">
            <ul className="honeycomb" lang="es" style={{paddingTop:'50px'}}>
              <li className="honeycomb-cell">
                 <img className="honeycomb-cell__image" src="basket.jpg" />
                 <div className="honeycomb-cell__title">BasketBall</div>
              </li>
              <li className="honeycomb-cell">
                <img className="honeycomb-cell__image" src="travel.jpg" />
               <div className="honeycomb-cell__title">Travel</div>
             </li>
             <li className="honeycomb-cell">
                <img className="honeycomb-cell__image" src="swim.jpg" />
              <div className="honeycomb-cell__title">Swimming</div>
            </li>
            <li className="honeycomb-cell">
              <img className="honeycomb-cell__image" src="foot.jpg" />
              <div className="honeycomb-cell__title">FootBall</div>
            </li>
            <li className="honeycomb-cell">
              <img className="honeycomb-cell__image" src="music.jpg" />
              <div className="honeycomb-cell__title">Music</div>
            </li>
           
          <li className="honeycomb-cell honeycomb__placeholder" />
</ul>

        </div>
    )
}

export default Hobbies
