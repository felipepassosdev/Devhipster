import React, { Component } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';
import api from '../../services/api'

class Vagas extends Component {
    state = {
        vagas: [],
    }

    componentDidMount = () => {
        this.apiVagas()
    }

    apiVagas = async () => {
        const response = await api.get(`/repos/frontendbr/vagas/issues`, {
            params: {
                state: 'open',
            },
        })
        console.log(response.data)

        this.setState({
            vagas: response.data
        })
    }



    render() {
        const { vagas } = this.state;
        return (
            <>
                <Container>
                    <div className='p-5'></div>
                    <h3 className="text-white">Vagas Front end</h3>
                    <Row>
                        {vagas.map(vaga => (
                            <Col md={4} key={vaga.id}>
                                <div className='p-3'></div>
                                <Card className="dark shadow-lg" style={{ minHeight: '186px' }}>
                                    <Card.Text className="text-success">{vaga.state ? 'ABERTA' : 'FECHADA'}</Card.Text>
                                    <Card.Link href="#">
                                        <Card.Title className="text-white">{vaga.title}</Card.Title>
                                    </Card.Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </>
        )
    }
}

export default Vagas