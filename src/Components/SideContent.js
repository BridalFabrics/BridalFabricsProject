import React from 'react'
import elipse from '../images/elipse.png'
import people from '../images/hero.png'

import '../sideContent.css'

export default function SideContent() {
  return (
    <div className="side-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <img src={elipse} alt="Elipse" className="elipse elipse-signup" />
          <img src={people} alt="People" className="people people-signup" />
        </div>
      </div>

    </div>
  )
}
