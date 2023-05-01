import React from 'react';
import Header from '../page/Shared/Header/Header';
import Footer from '../page/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../page/Shared/LeftNav/LeftNav';
import RightNav from '../page/Shared/RightNav/RightNav';

const MainL = () => {
    return (
        <div>
            <Header></Header>

            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <h2>Main content coming</h2>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainL;