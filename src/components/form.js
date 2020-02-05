import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <div class="col-12">
                <form class="card">
                    <div class="card-header">
                        <h2 class="card-title">Formulário</h2>
                    </div>
                    <div class="card-body">
                        <p class="form-group">
                            <label class="form-label">Nome</label><br />
                            <input class="form-control" type="text" />
                        </p>
                        <p>
                            <label class="form-label">Github</label><br />
                            <input class="form-control" type="url" />
                        </p>
                    </div>
                    <div class="card-footer text-right">
                        <button class="btn btn-primary">Enviar!</button>
                    </div>
                </form>
            </div>
        )
    }
}