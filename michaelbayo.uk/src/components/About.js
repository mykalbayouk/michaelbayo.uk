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
                            As a proud member of the Honors College at the University of Georgia, I'm excited to bring my love for Computer Science into action. Beyond the classroom, I'm all about diving into projects that keep me learning and growing. Whether it's tinkering with web scraping, connecting APIs to websites, or diving into software development, I'm constantly pushing my boundaries.
                        </p>
                        <p>
                            But it's not just about coding for me. I've got a real passion for app development, especially using Flutter for mobile app development. There's something exhilarating about crafting apps that not only work seamlessly but also look and feel fantastic on any device.
                        </p>                        
                        <p>
                            I believe in blending the best of both worlds—learning from textbooks and applying that knowledge to real-world projects. And with my focus on DevOps, I'm all about finding ways to work smarter and collaborate better, because teamwork makes the dream work, right?
                        </p>
                        Ultimately, I see myself not just as a student but as someone who can bridge the gap between what's happening now and what's possible in the future in the world of Computer Science. Let's make some magic happen together!
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}