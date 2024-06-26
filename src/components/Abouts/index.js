import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() =>{
           return setLetterClass('text-animate-hover');
        },3000)
    },[])
    return(
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                    I'm very ambitioud front-end deceloper looking for a role in established It company with the oppertunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curiouds, and perceptually working on improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define mself in one sentence tht would be a family person, a sprots fanatic, and tech obsessed!!!
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;