import React from 'react';
import NavBar from '../Components/navBar';
import Carousel from '../Components/carousel';
import PR31 from '../Images/PR31.jpg';
import PR32 from '../Images/PR32.jpg';
import PR33 from '../Images/PR33.jpg';
import AM1 from '../Images/AM1.jpg';
import PR11 from '../Images/PR11.png';
import PR12 from '../Images/PR12.png';
import PR13 from '../Images/PR13.png';
import PR14 from '../Images/PR14.png';
import AM2 from '../Images/AM2.jpg';
import PR21 from '../Images/PR21.png';
import PR22 from '../Images/PR22.png';
import PR23 from '../Images/PR23.png';
import PR24 from '../Images/PR24.png';
import PR25 from '../Images/PR25.png';
import PR26 from '../Images/PR26.jpg';



const Projects = () => {
    const imagesProject3 = [PR31, PR32, PR33, AM1];
    const imagesProject1 = [PR11, PR12, PR13, PR14, AM2];
    const imagesProject2 = [PR21, PR22, PR23, PR24, PR25, PR26];
    return (
        <div>
            <div className="fixed-header">
                <div className="title">
                    <div className="tile">
                        <div className="tile-content">P</div>
                        <div className="tile-number">3</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">R</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">O</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">J</div>
                        <div className="tile-number">8</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">E</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">C </div>
                        <div className="tile-number">3</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">T</div>
                        <div className="tile-number">1</div>
                    </div>
                    <div className="tile">
                        <div className="tile-content">S</div>
                        <div className="tile-number">1</div>
                    </div>
                </div>
                <NavBar />
            </div>
            <div className="scrollable-content">
                <div className="game-box-inn">
                    <h1><u>InkLink:</u></h1>
                    <div className="AMtext">
                        
                        <div>
                            <p>
                                <b>Description:</b> InkLink is a versatile app designed
                                 to encourage Calgary residents to visit public libraries,
                                  read more, and connect with their community. The app offers 
                                  access to library catalogs, personalized book recommendations,
                                   and community forums. It also uses location-based services 
                                   to highlight nearby benches perfect for watching sunsets and cafes 
                                   ideal for enjoying a cup of coffee while reading. Additionally, InkLink 
                                   includes social networking features that allow users to connect with friends
                                    and fellow readers, facilitating book discussions and sharing recommendations.
                                    With this application we managed to score in the top 10 of the compeating groups!
                               
                            </p>
                            <p>
                                <b>Technologies:</b> React, HTML, CSS, Javascript

                            </p>
                            <p>
                                <b>Devpost Link:</b> <a href='https://devpost.com/software/inklink-j67f8h'>Click Here!</a>
                            </p>
                            <p>
                                <Carousel images ={imagesProject2}/>
                            
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="game-box-inn">
                    <h1><u>Clear Currents:</u></h1>
                    <div className="AMtext">
                       
                        <div>
                        <p>
                                <b>Description:</b> Our website aims to raise awareness about Canada’s 
                                water crisis and its profound impact on indigenous communities, including 
                                those in rural areas. We engage users through interactive games that not
                                 only educate but also encourage meaningful community involvement. 
                                 Furthermore, we have also included research sections, which more deeply 
                                 describe the primitive situations people are living as a result of water 
                                 insecurity. To further our cause, we would ideally partner with an NGO deeply 
                                 committed to supporting indigenous communities. By highlighting their initiatives on 
                                 our website, we showcase their direct impact on the water crisis and inspire others to take action.

                                 
                               
                            </p>
                            <p>
                                <b>Technologies:</b> HTML, CSS, Javascript

                            </p>
                            <p>
                                <b>Devpost Link:</b> <a href="https://devpost.com/software/clear-currents">Click Here!</a>
                            </p>
                            <p>
                            <Carousel images={imagesProject1}/>
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div className="game-box-inn">
                    <h1><u>Handheld gaming console:</u></h1>
                    <div className="AMtext">
                       
                        <div>
                        <p>
                                <b>Description:</b>  The front face of the console contains all of the
                                  interactive components of the game, including 5 buttons, a potentiometer,
                                   the seven segment display and the screen. This design is also inspired
                                    from that of the original two-player game. The console has a compact design
                                     where all of the circuitry fits nicely on the inside, which was 
                                     important considering this is an on the go console, so this design decision 
                                     permits the circuitry to remain well connected. The code contains all seven mini games,
                                      and five of this will be randomly selected and ordered. On the initial menu, the player
                                       will be able to choose difficulty, which is a function of the time available for 
                                       the player to finish the games. For the easy mode players get 5 minutes and 2.30 and  
                                       1.25 minutes are available for the intermediate and hard levels respectively. 

                                 
                               
                            </p>
                            <p>
                                <b>Technologies:</b> C, Arduino

                            </p>

                            <p>
                                <Carousel images={imagesProject3}/>
                            
                            </p>
                           
                            
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Projects;