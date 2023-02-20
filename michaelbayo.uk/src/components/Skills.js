import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meterJava from "../assets/pictures/Icons/meterJava.png";
import meterC from "../assets/pictures/Icons/MeterC.png";
import meterWeb from "../assets/pictures/Icons/MeterWeb.png";
import meterAPI from "../assets/pictures/Icons/meterAPI.png";
import meterBack from "../assets/pictures/Icons/meterBack.png";
import SkillsBackground from "../assets/pictures/skillsBackground.jpg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">        
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                These are just a couple of the wide range of skills I have. I am currently learning more about React and Python in order to expand my skillset.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className = "skill-slider">
                                <div className="item">
                                    <img src={meterAPI} alt="Image" />
                                    <h5>API Infrastructure</h5>
                                </div>
                                <div className="item">
                                    <img src={meterWeb} alt="Image" />
                                    <h5>Mathematics</h5>
                                </div>
                                <div className="item">
                                    <img src={meterBack} alt="Image" />
                                    <h5>Back End</h5>
                                </div>
                                <div className="item">
                                    <img src={meterC} alt="Image" />
                                    <h5>Web Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meterJava} alt="Image" />
                                    <h5>Hardware</h5>
                                </div>                            
                            </Carousel>
                        </div>
                    </Col>
                </Row>    
            </Container>
            <img src={SkillsBackground} className="background-image-left" />                
        </section>
    )
}