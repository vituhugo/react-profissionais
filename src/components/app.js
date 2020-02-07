import React from 'react'
import TableProfissionais from './table_profissionais'
import Form from './form'


export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profissionais: [
                {
                    id: 1,
                    nome: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                },
                {
                    id: 2,
                    nome: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                }
            ]
        }
    }

    render() {
        console.log("STATE: ", this.state);
        return (
            <div>
                <h1>Hello Word!</h1>
                <TableProfissionais dados={this.state.profissionais} />
                <Form />
            </div>
        )
    }
}