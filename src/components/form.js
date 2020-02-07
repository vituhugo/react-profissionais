import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <div className="col-12">
                <form className="card">
                    <div className="card-header">
                        <h2 className="card-title">Formulário</h2>
                    </div>
                    <div className="card-body">
                        <p className="form-group">
                            <label className="form-label">Nome</label><br />
                            <input className="form-control" type="text" />
                        </p>
                        <p>
                            <label className="form-label">Github</label><br />
                            <input className="form-control" type="url" />
                        </p>
                    </div>
                    <div className="card-footer text-right">
                        <button className="btn btn-primary">Enviar!</button>
                    </div>
                </form>
            </div>
        )
    }
}