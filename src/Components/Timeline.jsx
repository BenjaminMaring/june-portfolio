import React from 'react';
import './css/Timeline.css'

export default function Timeline() {


    return (
        <div className="timeline--wrapper">
          <p className="timeline--title">Experience</p>
          <div className="timeline--line-wrapper">
              {/* centerline and numbers */}
              <div className="timeline--center"></div>
              <div className="timeline--abs timeline--2018">2018</div>
              <div className="timeline--abs timeline--2021">2021</div>
              <div className="timeline--abs timeline--2022">2022</div>
              <div className="timeline--abs timeline--2023">2023</div>
              <div className="timeline--abs timeline--2024">2024</div>
              <div className="timeline--present">Present</div>
              {/* content */}
              <div className="content--wrapper csustan--wrapper">
                <div className="csustan--top"></div>
                <div className="csustan--line"></div>
                <div className="csustan--bottom"></div>
                
              </div>
          </div>
        </div>
    )
}