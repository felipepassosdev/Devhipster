import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
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


    render = () => {
        const { repositories } = this.state;
        return (
            <>
                <Card>
                    
                </Card>
            </>
        )
    }
}

export default Vagas