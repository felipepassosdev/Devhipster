import React, { Component } from 'react'

class CardsBalada extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            Dados: [],
        })
    }

    getAPI() {
        fetch('http://localhost:3001/api/baladas')
            .then(response => response.json())
            .then(response => {
                response.map((dados) => {
                    this.setState({
                        Dados: [
                            ...this.state.Dados, {
                                titulo: dados.titulo,
                                descricao: dados.descricao,
                                horario: dados.horario,
                                localizacao: dados.localizacao,
                                telefone: dados.telefone,
                                imagem: dados.imagem
                            }
                        ]
                    })
                })
            })
    }

    imagens(){

    }

    componentDidMount() {
        this.getAPI()
    }

    render() {
        const state = this.state
        return (
            <>
                <div className="container">
                    <h2>Baladas para conhecer em jundiaí:</h2>
                    <hr/>
                    <div className="row">
                        {state.Dados.map((dd, index) => (
                            <>
                                <div className="col-md-4 col-sm-1">
                                    <div className="card d-flex margin-bottom shadow-lg" >
                                        <div className="card-header">
                                            <h2 className="text-vermelho">{dd.titulo}</h2>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-text">{dd.localizacao}</h6>
                                            <h6 className="card-text text-vermelho">{dd.descricao}</h6>
                                            <img props src={dd.imagem} className="img-fluid" alt="Imagem responsiva"></img>
                                            <hr></hr>
                                            <h5 className="card-text">Telefone: {dd.telefone}</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default CardsBalada