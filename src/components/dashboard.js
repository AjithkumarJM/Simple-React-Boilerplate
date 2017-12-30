import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='row'>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header redBg">
                            Analytics
                </div>
                        <div className="card-body">
                            <h4 className="card-title">$ 44</h4>
                            <h6 className="card-title">Disputes</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header redBg">
                            Analytics
                </div>
                        <div className="card-body">
                            <h4 className="card-title">$ 44</h4>
                            <h6 className="card-title">Disputes</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header redBg">
                            Analytics
                </div>
                        <div className="card-body">
                            <h4 className="card-title">$ 44</h4>
                            <h6 className="card-title">Disputes</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header redBg">
                            Analytics
                </div>
                        <div className="card-body">
                            <h4 className="card-title">$ 44</h4>
                            <h6 className="card-title">Disputes</h6>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}