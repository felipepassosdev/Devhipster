import React, { Component } from 'react';

class Perfil extends Component {
    constructor(props) {
        super(props)

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    pegarValor(event) {
        console.log(event.target.value)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Cadastro de usuários</h2>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Primeiro nome</label>
                            <input type="text" className="form-control" id="nome" value={this.state.value} />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="inputPassword6">Senha</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefaultUsername">Usuário</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                </div>
                                <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Usuário" name="username" onClick={this.pegarValor} aria-describedby="inputGroupPrepend2" />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Pequena descrição sobre você</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="bio" onChange={this.handleChange2}></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>
                <br />
            </div>
        )
    }
}

export default Perfil;