import React from 'react';
import './homeStyles.css'; // Import the CSS file
import NavBar from '../Components/navBar';

const Home = () => {
    
    return (
       
        <div 
        style={{
            backgroundColor: '#0A2A02',
            width:'100vw',
            height:'100vh',
            display: 'flex',
            flexWrap: 'wrap', // Wrap tiles to next line when no space
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center', // Center content vertically
            marginBottom:'10px', 
            flexDirection: 'column'
            
            
        }}>
            
             <div  className='game-box'>
             
             <div style={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center', // Center content vertically
                flexDirection: 'row', // Align tiles in row
            }}>
                <div className="grid-red"></div>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-dblue"></div>
                <div className="grid"></div>
                <div className="grid-red"></div>
                <div className="grid"></div>
                <div className="grid-blue"></div>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-red"></div>

             </div>
            <div 
            style={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center', // Center content vertically
                flexDirection: 'row', // Align tiles in row
            }}>

                <div className="tile">
                  <div className="tile-content">P</div>
                  <div className="tile-number">3</div>
                </div>
                <div className="tile">
                  <div className="tile-content">E</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile">
                  <div className="tile-content">R</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile">
                  <div className="tile-content">S</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile">
                  <div className="tile-content">O</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile">
                  <div className="tile-content">N</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile">
                  <div className="tile-content">A</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile">
                  <div className="tile-content">L</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="grid"></div>
                <div className="grid-blue"></div>
                <div className="grid"></div>
                
                
                
            </div>
            <div
            style={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center', // Center content vertically
                flexDirection: 'row', // Align tiles in row
            }}>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-blue"></div>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-yellow"></div>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-dblue"></div>
                <div className="grid"></div>
                <div className="grid"></div>
                

            </div>
            <div 
            style={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center', // Center content vertically
                flexDirection: 'row', // Align tiles in row
            }}>
                <div className="grid"></div>
                <div className="grid-blue"></div>
                <div className="tile-bottom">
                  <div className="tile-content">P</div>
                  <div className="tile-number">3</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">O</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">R</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">T</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">F</div>
                  <div className="tile-number">4</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">O</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">L</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">I</div>
                  <div className="tile-number">1</div>
                </div>
                <div className="tile-bottom">
                  <div className="tile-content">O</div>
                  <div className="tile-number">1</div>
                </div>

            </div>
             
             <div style={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center', // Center content vertically
                flexDirection: 'row', // Align tiles in row
            }}>
                <div className="grid-red">
                Sofia Tapias
                </div>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-dblue"></div>
                <div className="grid"></div>
                <div className="grid-red"></div>
                <div className="grid"></div>
                <div className="grid-blue"></div>
                <div className="grid"></div>
                <div className="grid"></div>
                <div className="grid-red">
                   
                </div>

             </div>
            
        </div>

       <NavBar/>
        
        </div>
       
        
    );
};

export default Home;





