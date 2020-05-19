import React, { Component } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';
import api from '../../services/api'

class Vagas extends Component {
    state = {
        repositories: [],
    }

    componentDidMount = () => {
        this.apiRepositories()
    }

    apiRepositories = async () => {
        const response = await api.get(`/repos/frontendbr/vagas/issues`, {
            params: {
                state: 'open',
            },
        })
        console.log(response.data)

        this.setState({
            repositories: response.data
        })
    }


    render() {
        const { repositories } = this.state;
        return (
            <>
                <Container>
                    <div className='p-5'></div>
                    <h3 className="text-white">Vagas Front end</h3>
                    <Row>
                        {repositories.map(repo => (
                            <Col md={4}>
                            <div className='p-3'></div>
                                <Card className="dark shadow-lg">
                                    <div key={repo.id}>
                                        <Card.Link href="#">
                                            <Card.Title className="text-white">{repo.title}</Card.Title>
                                        </Card.Link>
                                    </div>
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