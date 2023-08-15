import {React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





export default function Dashboard(){
    //initiate
    const [counter, setCounter] = useState(0);
    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };
    //decrease counter
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };
    //reset counter
    const reset = () => {
        setCounter(0);
    };

    //render
    return (
    <Container>
        <Row className='mt-5'>
            <Col sm={4}></Col>
            <Col sm={4}>
                <Card>
                    <Card.Header className='text-center'>
                        <h6>Nomor Antrian</h6>
                    </Card.Header>
                    <Card.Body  className='text-center p-5'>
                        <h1>{counter}</h1>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={4}>
                                <Button className='btn-block mb-2' variant='primary' onClick={increase}>Tambah</Button>
                            </Col>
                            <Col sm={4}>
                                <Button className='btn-block mb-2' variant='danger' onClick={decrease}>Kurang</Button>
                            </Col>
                            <Col sm={4}>
                                <Button className='btn-block mb-2' variant='secondary' onClick={reset}>Reset</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
            <Col sm={4}></Col>
        </Row>
    </Container>
    );
};
