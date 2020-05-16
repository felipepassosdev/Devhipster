import React, { Component } from 'react';

class Perfil extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            Users: [],
            name: '',
            bio: '',
            username: ''
        })
    }

    updateUsers() {
        fetch('http://localhost:3001/Users')
            .then(response => response.json())
            .then(response => {
                response.map((users) => {
                    this.setState({
                        Users: [
                            ...this.state.Users, {
                                id: users._id,
                                name: users.name,
                                bio: users.bio,
                                username: users.username
                            }
                        ]
                    })
                })
            })
    }

    componentDidMount() {
        this.updateUsers()
    }

    handleChange = event => {
        this.setState({ 
            name: event.target.value, 
        });
    }

    handleChange2 = event => {
        this.setState({ 
            bio: event.target.value
        });
    }

    handleChange3 = event => {
        this.setState({ 
            username: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            bio: this.state.bio
        };

        fetch('http://localhost:3001/User', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(res => console.log(res));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Cadastro de usuários</h2>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Primeiro nome</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Nome" name="name" onChange={this.handleChange}  />
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
                                <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Usuário" name="username" onChange={this.handleChange3} aria-describedby="inputGroupPrepend2" />
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
                <div className="container table-responsive">
                    <div className="row">
                        <div className="col">
                            <h2>Listagem de usuários</h2>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Bio</th>
                                        <th scope="col">Usarname</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Users.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{item.name}</td>
                                                <td>{item.bio}</td>
                                                <td>{item.username}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil;