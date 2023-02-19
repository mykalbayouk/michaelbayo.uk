import { Container, Row, Col} from "react-bootstrap"
import aboutImg from "../assets/pictures/about.png"
import meOne from "../assets/pictures/Icons/circlePicMe.png";
import meTwo from "../assets/pictures/circleMeMona.png";

export const About = () => {

    return (
    <section className="about" id="about">
        <Container>
            <Row>
                <Col sm={6}>
                    <img src={meOne} className = "me" />
                    <img src={meTwo} className = "me2" />
                    
                </Col>
                <Col sm={6}>
                    <div className="about-content">
                        <img src={aboutImg} alt="who" />
                        <h2></h2>   
                        <div className="about-text">
                        <p>
                        Hello! My name is Michael Bayouk and I am a 20 year old student at the University of Georgia. I have been into computers my whole life and built my first Computer at the age of 9.
                        I first started programming in 2018 when I was 15 years old. I started with Python and then moved on to Java. I have been programming ever since. 
                        </p>
                        <p> I am currently a Sophomore and I am majoring in Computer Science. I am also completeing a certificate in Data Science and am currently a candidate for the Artificial Intelligence Masters.
                        I am currently looking for a summer internship in the field of Software Engineering. I am also looking for a full time position after I graduate in December 2024.
                        </p>
                        <p>
                        Also, I am a fanatic when it comes to space. I have been interested since I was as long as I can remember whether it be about Hawking Radiation or the Big Bang, I am always trying to learn more.
                        </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}