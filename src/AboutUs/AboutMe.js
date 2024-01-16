import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';

function AboutMe() {
  return (
    <>
      <Navbar />
      <div id="skills">
        <h1 className='heading-name'>My skills</h1>
        <section>
          <div class="myskillbox1">
            <h1 class="technicalskill">Technical Skills</h1>
            <div class="technical-bars">

              <div class="bar"><i style={{ color: 'red' }} class='bx bxl-html5' ></i>
                <div class="info">
                  <span>HTML</span>
                </div>
                <div class="progress-line html">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'blue' }} class='bx bxl-css3' ></i>

                <div class="info">
                  <span>CSS</span>
                </div>
                <div class="progress-line css">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'yellow' }} class='bx bxl-javascript' ></i>
                <div class="info">
                  <span>JavaScripT</span>
                </div>
                <div class="progress-line javascript">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'voilet' }} class='bx bxl-react' ></i>
                <div class="info">
                  <span>React</span>
                </div>
                <div class="progress-line react">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'white' }} class='bx bxl-github' ></i>
                <div class="info">
                  <span>GitHub</span>
                </div>
                <div class="progress-line github">
                  <span></span>
                </div>
              </div>

            </div>
          </div>

          <div class="myskillbox2">
            <h1 class="professionalskill">Professional Skills</h1>
            <div class="radial-bars">

            <div class="radial-bar">
              <svg x="0" y="0" viewBox="0 0 200 200">
                <circle class="pragress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                <div class="percentage">90%</div>
                <div class="subheading">creativity</div>
              </svg>
            </div>

            <div class="radial-bar">
              <svg x="0" y="0" viewBox="0 0 200 200">
                <circle class="pragress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                <div class="percentage">65%</div>
                <div class="subheading">Communication</div>
              </svg>
            </div>

            <div class="radial-bar">
              <svg x="0" y="0" viewBox="0 0 200 200">
                <circle class="pragress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                <div class="percentage">50%</div>
                <div class="subheading">Problem Solving</div>
              </svg>
            </div>

            <div class="radial-bar">
              <svg x="0" y="0" viewBox="0 0 200 200">
                <circle class="pragress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                <div class="percentage">80%</div>
                <div class="subheading">TeamWork</div>
              </svg>
            </div>

            </div>
          </div>
        </section>
      </div>

      <div>
        <h1 class="eduhead">Education</h1>
      </div>
</>
)
}
export default AboutMe