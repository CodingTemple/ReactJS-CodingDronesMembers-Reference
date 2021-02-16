import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col,Row } from 'react-bootstrap';
import drone from '../../assets/img/drone.svg';

export const Drones = () => {

    let { droneData, getData} = useGetData();
    console.log(droneData)


    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Hello Drones</h1>
                        <p>Here are your current collection of drones!</p>
                        <Button>Create New Drone</Button>
                    </Jumbotron>
                </Col>
            </Row>

            {/* Row to display Data */}
            <Row>
                <Col>
                    <div>
                        {droneData.map( (item:any) => (
                            <div key={item.id}>
                                  <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={drone} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.name }
                                        </Card.Title>
                                        <Card.Text>
                                            {item.model}
                                        </Card.Text>
                                        <Card.Text>
                                            { item.price }
                                        </Card.Text>

                                        <Button variant="danger">Delete</Button>
                                        <Button variant="primary">Update</Button>
                                    </Card.Body>   
                                  </Card>      
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}