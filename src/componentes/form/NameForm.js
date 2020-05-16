import React from 'react';
import Cadastro from './cadastro.svg'
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            nome: '',
            senha: '',
            email: ''
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            nome: event.target.value,
        });
    }

    handleChange2(event) {
        this.setState({
            senha: event.target.value
        })
    }

    handleChange3(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit(event) {
        alert("CADASTRO REALIZADO COM SUCESSO")
        event.preventDefault();
        this.api()
    }


    api() {
        var data = {
            usuario: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        };

        fetch('http://localhost:3001/api/perfil', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => console.log(res));
    }

    render() {
        return (

            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <h1>Cadastro de usuários</h1>
                                <hr/>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationDefault01">Email</label>
                                        <input type="text" className="form-control" id="nome" value={this.state.email} onChange={this.handleChange3} />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="inputPassword6">Senha</label>
                                        <input type="password" value={this.state.senha} onChange={this.handleChange2} id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationDefaultUsername">Usuário</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                            </div>
                                            <input type="text" value={this.state.nome} onChange={this.handleChange} className="form-control" id="validationDefaultUsername" placeholder="Usuário" name="username" aria-describedby="inputGroupPrepend2" />
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
                                <button className="btn bg-gradiente" type="submit"><h6 className="text-white">Enviar</h6></button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img className="d-block w-100" src={Cadastro} className="img-fluid"/>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default NameForm