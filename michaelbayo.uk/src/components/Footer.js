import { Container, Row, Col } from 'react-bootstrap';

import logo from '../assets/pictures/Icons/logo.png';

export const Footer = () => {

    return (
        <footer className = "footer">
            <Container>
                <Row className = "alignt-item-center">
                    <Col sm = {6}>
                        <img src = {logo} alt = "Logo" />
                    </Col>
                        <Col sm = {6} className = "text-center text-sm-end">
                            <div className = "social-icon">
                                <p>Created by Michael Bayouk 2023</p>
                            </div>
                        </Col>                    
                </Row>
            </Container>
        </footer>
        
    );
    }