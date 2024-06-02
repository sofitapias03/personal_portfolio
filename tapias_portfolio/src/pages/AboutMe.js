import React from 'react';
import './aboutMeStyles.css';
import NavBar from '../Components/navBar';
import AM1 from '../Images/AM1.jpg';
import AM2 from '../Images/AM2.jpg';
import AM3 from '../Images/AM3.jpg';

const AboutMe = () => {
    return (
        <div>
            <div className="fixed-header">
                <div className="title">
                    <div className="tile">
                        <div className="tile-content">A</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">B</div>
                        <div className="tile-number">3</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">O</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">U</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">T</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content"> </div>
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
                    <h1><u>Education and background</u></h1>
                    <div className="AMtext">
                        <img src={AM1} alt="Final ENGG 200 project" className="AMimage" style={{ marginRight: '20px' }} /> 
                        <div>
                            <p>
                                I was born and raised in Bogotá, Colombia, in the early 2000s. Fast forward ten 
                                years, alongside my parents and older brother, we embarked on a new chapter by 
                                moving to El Salvador in Central America, marking the beginning of my culturally 
                                diverse upbringing. There, I joined the Academia Británica Cuscatleca, where I 
                                pursued a very successful high school career, both academically and socially. 
                                I graduated in 2022, with a 39/40 IB score, honors, the head master’s medal and the community service award. 
                            </p>
                            <p>
                                After high school, I moved to Calgary, Canada, where I began my engineering bachelor’s at the Schulich School at the University of Calgary. 
                                After a year of general engineering courses, I decided to specialize in software engineering, 
                                where I’ve had the opportunity to sit in on lectures ranging from discrete math and statistics 
                                to full stack development and software architecture, meanwhile developing a strong passion for full stack development. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="game-box-inn">
                    <h1><u>Professional Journey</u></h1>
                    <div className="AMtext">
                        <img src={AM2} alt="First Hackathon" className="AMimage" style={{ marginRight: '20px' }} /> 
                        <div>
                            <p> 
                                My very first exposure to programming was in my ENGG 233 class, where I learned the
                                basics of Python programming during my first semester. In my second semester, for our
                                final design class, my friends and I built a handheld version of the 'Keep Talking 
                                Don't Explode' game using an Arduino and C. 
                            </p>
                            <p> 
                                During the summer between my first and second year, I developed a passion for full-stack
                                development by learning HTML, CSS, and JavaScript. In my second year, I had the opportunity
                                to expand my skills further. I delved into object-oriented programming through Java and C++,
                                and I also explored front-end frameworks like React.JS.
                            </p>
                            <p> 
                                Additionally, I participated in two hackathons, 'Hack the Change' and 'Calgary Hacks 2024.' 
                                Alongside an amazing group, we designed and developed two projects, one of which reached the 
                                top 10 contestants. Finally, as of the end of second year I positioned myself as event organizer
                                for WISE (Women in Science and Engineering).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="game-box-inn">
                    <h1><u>Passions and Interests</u></h1>
                    <div className="AMtext">
                        <img src={AM3} alt="Half Marathon" className="AMimage" style={{ marginRight: '20px' }} /> 
                        <div>
                            <p> 
                            Since I can remember, sports have been a cornerstone of my life. I began with fencing at the age of five
                             and competed for four years, earning national and international titles for Colombia. A couple of years 
                             before moving to El Salvador, I also took up BMX and competed until I left the country, now I bike recreationaly. 
                            </p>
                            <p> 
                            Throughout middle and high school, I was recognized as the sporty girl. I captained the soccer and volleyball teams
                             while also playing as a middle for the basketball team until my senior year. Recently, I’ve embraced running, and 
                             during the summer between my second and third years of university, I completed my first half marathon in El Salvador.
                            </p>
                            <p> 
                            Beyond sports, I am very family-oriented. I cherish spending time with my family and friends, whether we’re playing board
                             games, enjoying a game of cards, or singing karaoke. I am an easy-going, fun, and overall very happy person who values 
                             the connections and moments shared with loved ones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;



