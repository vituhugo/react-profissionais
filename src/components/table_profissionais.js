import React from 'react'

export default class TableProfissionais extends React.Component {
    render() {
        console.log("TableProfissionais PROPS:", this.props);
        return (
            <table className="table mt-5 mb-5">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Github</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dados.map((profissional) => {
                        return (
                            <tr key={profissional.id}>
                                <td>{profissional.nome}</td>
                                <td>{profissional.github}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
} 