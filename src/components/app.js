import React from 'react'
import TableProfissionais from './table_profissionais'
import Form from './form'


export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profissionais: [
                {
                    nome: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                },
                {
                    nome: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Hello Word!</h1>
                <TableProfissionais profissionais={this.state.profissionais}/>
                <Form />
            </div>
        )
    }
}