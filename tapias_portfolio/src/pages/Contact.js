import React from 'react';
import './aboutMeStyles.css';
import NavBar from '../Components/navBar';


const Contact = () => {
    return (
        <div>
            <div className="fixed-header">
                <div className="title">
                    <div className="tile">
                        <div className="tile-content">C</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">O</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">N</div>
                        <div className="tile-number">3</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">T</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">A</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">C</div>
                        <div className="tile-number">3</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">T</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content"></div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">M</div>
                        <div className="tile-number">3</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">E</div>
                        <div className="tile-number">1</div>
                    </div>
                </div>
                <NavBar />
            </div>
            <div className="scrollable-content">
                <div className="game-box-inn">
                    
                    <div className="AMtext">
                        
                        <div>
                        <p><b><h1>Thank you for passing by!</h1></b></p>
                        <p>Feel free to contact me for any information:</p>
                        <p><b>Email:</b> tapiassofia2003@gmail.com</p>
                        <p><b>Phone:</b> +1 (825) 558-3371</p>
                        <p><b>LinkedIn:</b> <a href='https://www.linkedin.com/in/sof%C3%ADa-tapias-6a232629b/'>Click Here!</a></p>
                        <p><b>GitHub:</b> <a href='https://github.com/'>Click Here!</a></p>
                        <p><b>Resume:</b> <a href='https://docs.google.com/document/d/1wXHfEm2_phpKhIqRLbGQCAqwGpJIMIyNwFlVEuiJEGc/edit'>Click Here!</a></p>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default Contact;
