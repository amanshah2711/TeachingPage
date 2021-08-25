import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Table, Badge, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import disc0 from './disc_00.pdf';
import disc0wk from './disc00.pdf';
import disc0wksol from './disc00_sol.pdf';


class Teaching extends React.Component{
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h3 style={{color:"#047BFE"}}>CS61A Fall 2021</h3>
                        <p></p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={5}>
                        <p> <b>Discussion:</b> Wed 6:30PM - 8:00PM PDT</p>
                        <p> <b>Lab:</b> Wed 9:30AM - 11:00AM PDT</p>
                        <p><b><a href="https://docs.google.com/forms/d/e/1FAIpQLSe051PwRPnKIJ9zPWQhA-6VBW3PgnyunvbA6cT75uswLXWJPQ/viewform">Anonymous Feedback Form</a></b></p>
                    </Col>
                    <Col md={5}>
                        <ul>
                            <li>
                                <p> Feel free to contact me at amanshah2711@berkeley.edu with any questions about cs61a, math, life at Berkeley, or anything else.</p>
                            </li>
                        </ul>

                    </Col>
                </Row>
                <hr className="col-md-10"></hr>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h3 style={{color:"#047BFE"}}>Schedule</h3>
                                <Table striped borderless hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Topic</th>
                                            <th>Worksheet</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>Wed 6/22</td>
                                            <td>Welcome to 61A! <br/><Badge variant='primary'> <a href={disc0} style={{color:"white"}} target="_blank">slides</a></Badge></td>
                                            <td><a href={disc0wk} style={{color:"black"}} target="_blank">Disc 00</a></td>
                                        </tr>
                                    </tbody>

                                </Table>
                    </Col>
                </Row>
                <hr className="col-md-10"></hr>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                    <h3 style={{color:"#047BFE"}}>Additional Resources</h3>
                    Content might be added here throughout the course of the semester.
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Teaching
