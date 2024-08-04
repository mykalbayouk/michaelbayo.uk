import { Col, Container, Tab, Row, Nav } from "react-bootstrap"
import {ProjectCard} from "./ProjectCard";
import pokeApp from "../assets/pictures/pokeApp.png";
import dawgRider from "../assets/pictures/dawgRider.png";
import comQuest from "../assets/pictures/comquest.png";
import georgia from "../assets/pictures/georgia.png";
import ugaHacks from "../assets/pictures/ugaHacks.png";
import honor from "../assets/pictures/honorsCollege.jpg";
import motorsports from "../assets/pictures/motorsports.jpg";
import SSRL from "../assets/pictures/SSRL.png";
import ula from "../assets/pictures/ula.jpeg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const projects = [
        { 
            title: "PokédexApp",
            description: "Flutter App using PokeAPI",
            imgUrl: pokeApp,
            link: "https://github.com/mykalbayouk/PokedexApp?tab=readme-ov-file" ,
        },
        {
            title: "DawgRider",
            description: "Android Studio App using Firebase",
            imgUrl: dawgRider,
            link: "https://github.com/mykalbayouk/DawgRider",
        },
        {
            title: "ComQuest",
            description: "Hackathon App using Java and SQLite",
            imgUrl:  comQuest,
            link: "https://github.com/mykalbayouk/ComQuest",
        },
    ];

    const academic = [
        {
            title: "Bachelor of Computer Science",
            description: "University of Georgia",
            imgUrl: georgia,
        },
        {
            title: "University Hackathons",
            description: "Participated in multiple timed coding comps.",
            imgUrl: ugaHacks,
        },
        {
            title: "UGA Honors College",
            description: "Apart of the Honors Program",
            imgUrl: honor,
        },
    ];

    const work = [
        {
            title: "United Launch Alliance",
            description: "Summer Internship building Enterprise Apps",
            imgUrl: ula,
        },
        {
            title: "UGA Motorsports",
            description: "Helped to create a website for the team",
            imgUrl: motorsports,
        },
        {
            title: "SSRL",
            description: "Developed Flight Software using CUDA",
            imgUrl: SSRL,
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
                                <Nav.Link eventKey = "third">Firsthand</Nav.Link>
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