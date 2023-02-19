import { useState, useEffect } from 'react';
import { Container, Row, Col} from "react-bootstrap"
import {ArrowBarRight} from 'react-bootstrap-icons'
import headerIMG from '../assets/pictures/Planets.png'
import astronaut from '../assets/pictures/Astronaut.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500);
    const [index, setIndex] = useState(1);
    const toRotate = ['Student', 'Developer', 'Web Designer'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
    }, delta)

    return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <section className="banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs= {12} md={6} xl ={7}>
                        <TrackVisibility>
                        {({isVisibile}) =>
                        <div className = {isVisibile ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome! My Name is Michael Bayouk</span>
                            <h1>{'I am a '} <span className="wrap">{text}</span></h1> 
                                <p>
                                    This is my personal website where I showcase my projects and skills. Please look around and learn about what I do and who I am. Also, feel free to contact me if you have any questions or if you would like to work together.
                                    
                                </p>
                                <a href="#connect">
                                <button onClick = {() => console.log('connect')}><span>Connect with me </span><ArrowBarRight size = {25}></ArrowBarRight> </button>
                                </a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs= {12} md={6} xl ={5}>
                        <TrackVisibility>
                        {({isVisibile}) =>
                        <div className = {isVisibile ? "animate__animated animate__zoomOut": ""}>
                        <img src={headerIMG} id = "planets" alt = "Header IMG" />
                        <img src={astronaut} id = "astro" alt = "Astronaut" />
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}