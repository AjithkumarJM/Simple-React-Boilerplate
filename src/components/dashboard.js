import React, { Component } from 'react'
import Loader from 'react-loader-advanced'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux';
import moment from 'moment';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            // <Loader show={true} message={'loading'}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-header redBg">
                                Profile Details
                </div>
                            <div className="card-body">
                                <div className='col-md-6 col-sm-6 col-lg-6'>
                                    <img src="/src/assets/images/img_avatar.png" className='rounded-circle' alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-header redBg">
                                Interview Feedback
                </div>
                            <div className="card-body">
                                {/* <h4 className="card-title">$ 44</h4>
                                <h6 className="card-title">Disputes</h6> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-3 padBottom">
                        <div className="card text-center">
                            <div className="card-header redBg">
                                Analytics
                </div>
                            <div className="card-body">
                                <h4 className="card-title">$ 44</h4>
                                <h6 className="card-title">Disputes</h6>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-md-3 padBottom">
                        <div className="card text-center">
                            <div className="card-header redBg">
                                Analytics
                </div>
                            <div className="card-body">
                                <h4 className="card-title">$ 44</h4>
                                <h6 className="card-title">Disputes</h6>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            // </Loader>
        )
    }
}

export default (connect(null, {}))(Dashboard);
