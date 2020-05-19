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

        this.setState({
            repositories: response.data
        })
    }


    render(){
        const { repositories } = this.state;
        return (
            <>
                <Container>
                    <Row>
                        {repositories.map(repo => (
                            <Col className="col-md-4">
                                <Card className="dark">
                                    <ul>
                                        <li key={repo.id}>
                                            <h5 className="text-white">{repo.title}</h5>
                                        </li>
                                        <h5>{repo.state === 'open' ? ' Vaga: Aberta' : 'Vaga: Fechada'}</h5>
                                    </ul>
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