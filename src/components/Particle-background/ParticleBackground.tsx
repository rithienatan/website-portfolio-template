/**
 * Particle Background
 * 
 * @author Rithie Natan
 * @date 2023-01-30
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Components -----
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";


//---------- Custom Imports ----------
import style from "./ParticleBackground.module.scss";


//---------- Exports ----------
/**
 * Particle Background component
 * 
 * @returns {JSX.Element}
 */
export default function AcademicHistoric()
{
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles className={style.canvas}
            init={particlesInit}
            options={
                {
                    autoPlay: true,
                    detectRetina: true,
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
                            random: true, 
                            speed: 3, 
                            out_mode: "out"
                        }
                    }
                }
            }
        />
    );
}//end AcademicHistoric()