import React, { Component } from 'react'
import mapa from '../imagens/mapa.svg'

class Localizacao extends Component {
    render() {
        return (
            <div className="bg-laranja secao">
                <div className="container">
                    <div className="col-md-12 col-sm-12">
                        <p className="display-2 text-center text-white">Onde Estamos:</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <img src={mapa} className="img-fluid" alt="Imagem responsiva" />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <p className="font-weight-bold text-white display-3"> Estamos localizados na cidade de Jundiaí - SP .</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Localizacao;