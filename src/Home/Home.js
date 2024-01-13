import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import ProfileImage from '../Images/WhatsApp_Image_2024-01-05_at_14.56.53-removebg-preview.png';
import github from '../Images/GitHub.png';
import instagram from '../Images/Instagram.png';
import linkdin from '../Images/Linkdin.png';

function Home() {
    return (
        <>
            <Navbar />
            <div className='Main-container' id='intro'>
                <div className='container1'>
                    <div className='heading-container'>
                        <p className='heading'>Hello, <br />
                            <span>I'm <span id="myName">Vaibhav Gaikwad</span> pursuing BE from SPPU, Pune</span>
                        </p>
                        <div className='typed-out'> "Front end Developer"</div>
                    </div>
                    <span id="description">I'm Skilled and passionate about web designer. I am proficient in HTML, CSS,<br></br> Bootstrap, JavaScripT , Git & GitHub.</span>

                    <a href="https://www.canva.com/design/DAF3Wooqjis/cEedcBWLjFr9PwnLsXKCyQ/edit?utm_content=DAF3Wooqjis&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> <button id="download" type='button'>Download CV</button></a>

                    <div className='social-btn'>

                        <a href="https://github.com/vaibhavgaikwad8476">  <button id="github-btn" type='button'><img id="GithubImg" src={github} alt='profilephoto' /> </button></a>

                        <a href="https://www.linkedin.com/in/vaibhav-gaikwad27/">  <button id="linkdin-btn" type='button'> <img id="LinkdinImg" src={linkdin} alt='profilephoto' /></button></a>

                        <button id="instagram-btn" type='button'> <img id="InstaImg" src={instagram} alt='profilephoto' /></button>
                    </div>
                </div>

                <div className='container2'>
                    <img id="ProfileImg" src={ProfileImage} alt='profilephoto' />
                </div>
            </div>
        </>
    )
}

export default Home