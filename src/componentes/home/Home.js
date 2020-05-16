import React, { Component } from 'react'
import js from '../../images/js.svg'
import react from '../../images/react.svg'
import node from '../../images/node.svg'

class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="p-5"></div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card dark yellow shadow">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="yellow">Curso de JavaScript</h3>
                                        <img src={js} className="img-fluid" />
                                        <h5 className="text-white">Aprenda uma das tecnologias mais usadas atualmente, o <b className="yellow">JavaScript</b></h5>
                                        <button type="button" class="btn btn-dark passarmouse-yellow"><h5 className="text-white">( EM BREVE )</h5></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card dark blue shadow">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="blue">Curso de React</h3>
                                        <img src={react} className="img-fluid" />
                                        <h5 className="text-white">Aprenda uma das biblioteca mais amadas do mundo do JS o <b className="blue">React</b></h5>
                                        <button type="button" class="btn btn-dark passarmouse-blue"><h5 className="text-white">( EM BREVE )</h5></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card dark green shadow">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="green">Curso NodeJS</h3>
                                        <img src={node} className="img-fluid" />
                                        <h5 className="text-white">Aprenda usar JavaScript no backend da sua aplicação usando o <b className="green">NodeJS</b></h5>
                                        <button type="button" class="btn btn-dark passarmouse-green"><h5 className="text-white">( EM BREVE )</h5></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Home