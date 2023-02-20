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
                        As a member of the Honors College at the University of Georgia, I intend on using my passion for Computer Science to serve as a liaison between current disparities and future developments.
                        </p>
                        <p>
                         Outside of my career as a CS major, I also continue my passion for learning beyond the classroom by working on worthwhile passion projects including web scraping, API fulfillment to website infrastructure, and software development.
                        </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}