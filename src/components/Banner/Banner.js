import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center banner mt-5 pt-2">
                <Col md={4} className="p-md-5 order-2 order-md-1">
                    <Fade left duration={2000} distance="40px">
                        <h1>Latest <br /> Tech News</h1>
                        <p className="text-muted my-4 pr-md-5">In a World of Technology, People Make the Difference.</p>
                        <Button
                            className="btn-main" style={{ backgroundColor: "#70c3be" }}
                            href="#services">
                            Get Started
                        </Button>
                    </Fade>
                </Col>
                <Col md={6} className="order-1 order-md-2 mt-5 pt-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src="https://image.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg" fluid />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;