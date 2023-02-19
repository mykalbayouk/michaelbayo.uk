import { Col, Container, Tab, Row, Nav } from "react-bootstrap"
import {ProjectCard} from "./ProjectCard";
import gallaryApp from "../assets/pictures/gallaryApp.png";
import bestRoute from "../assets/pictures/BestRouteIMG.png";
import miniProjects from "../assets/pictures/MiniProjectsIMG.PNG";
import georgia from "../assets/pictures/georgia.png";
import ugaHacks from "../assets/pictures/ugaHacks.png";
import honor from "../assets/pictures/honorsCollege.jpg";
import motorsports from "../assets/pictures/motorsports.jpg";
import Tutoring from "../assets/pictures/tutoring.jpg";
import buildingPC from "../assets/pictures/buildingPC.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const projects = [
        { 
            title: "ItunesAPI GUI",
            description: "JavaFX app",
            imgUrl: gallaryApp,
        },
        {
            title: "BestRoute",
            description: "JavaScript/React app",
            imgUrl: bestRoute,
        },
        {
            title: "Small Ideas",
            description: "Programs utilizing C/C++",
            imgUrl:  miniProjects,
        },
    ];

    const academic = [
        {
            title: "Bachelor of Computer Science",
            description: "University of Georgia",
            imgUrl: georgia,
        },
        {
            title: "UGA Hacks 8",
            description: "36 Hour Hackathon",
            imgUrl: ugaHacks,
        },
        {
            title: "UGA Honors College",
            description: "Apart of the Honors Program",
            imgUrl:  honor,
        },
    ];

    const work = [
        {
            title: "UGA Motorsports",
            description: "Member of the UGA Motorsports Team",
            imgUrl: motorsports,
        },
        {
            title: "Math Tutor",
            description: "Concepts of Linear Algebra and Multivariable Calculus",
            imgUrl: Tutoring,
        },
        {
            title: "Computer Building",
            description: "Building and Maintaining Computers",
            imgUrl: buildingPC,
        },
    ];
     return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size = {12}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className = {isVisible ? "animate__animated animate__zoomInDown" : ""}>
                        <h2>Experience</h2>
                        <p>Showcase of some of my completed projects as well as different involvements I have been a part of. The first tab is filled with primarily coding projects. Second Tab of academic standings. And third tab filled with work or other real life experiences. </p>
                        <Tab.Container id = "projects-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "second">Academics</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey = "third">Hands On</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                            <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "second">
                            <Row>
                                    {
                                    academic.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row></Tab.Pane>
                            <Tab.Pane eventKey = "third">
                            <Row>
                                    {
                                    work.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        </div> }
                        </TrackVisibility>                        
                    </Col>
                </Row>
            </Container>
        </section>  

    )
}