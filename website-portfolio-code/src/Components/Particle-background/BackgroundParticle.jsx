/*----- Imports React and others -----*/
import React from 'react';
import Particles from 'react-particles-js';

/*----- Import css -----*/
import './BackgroundParticle.scss';

/*----- Begin class and functions -----*/
class BackgroundParticle extends React.Component
{
    render()
    {
      return(
        //Set your particle form here!
        <Particles className="canvas"
          params = {
            {
              particles: {
                number: {
                  value: 120,
                  density: { enable: true, value_area: 800}
                },
                color: { value: "#FFFFFF" },
                shape: { type: "circle" },
                size: { value: 3, random: true },
                opacity: { value: 1 },
                lineLinked: { enable: false },
                move: { 
                  enable: true, 
                  direction: "top", 
                  random: true, speed: 3, 
                  out_mode: "out",
                  attract: true
                }
              },//end particles
              retina_detect: true
            }//end params
          }
        />
      );
    }//end render()
}//end class

export default BackgroundParticle;