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
                <div className='row dashTiles'>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-header">Profile Details</div>
                            <div className="card-body row">
                                <div className='col-md-6 col-sm-6 col-lg-6'>
                                    <img src="/src/assets/images/img_avatar.png" height='180' width='180' className='rounded-circle justify-content-md-center' alt="Avatar" />
                                    <h6 className='text-center padBottom'><strong>John Doe</strong></h6>
                                    <hr></hr>
                                    <div className='offset-md-2 col-md-8 offset-md-2'>
                                        <div className='row'>
                                            <h6 className='col'><i className="fa fa-facebook-official" aria-hidden="true"></i></h6>
                                            <h6 className='col'><i className="fa fa-twitter" aria-hidden="true"></i></h6>
                                            <h6 className='col'><i className="fa fa-linkedin" aria-hidden="true"></i></h6>
                                            <h6 className='col'><i className="fa fa-instagram" aria-hidden="true"></i></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6 col-lg-6'>
                                    <h6 className='text-center padBottom text-primary'><strong>Skills Known</strong></h6>
                                    <h6 className='text-center'>Java , python , javascript</h6>
                                    <hr></hr>
                                    <h6 className='text-center padBottom text-primary'><strong>Experience</strong></h6>
                                    <h6 className='text-center'>3 years</h6>
                                    <hr></hr>
                                    <h6 className='text-center padBottom text-primary'><strong>Designation</strong></h6>
                                    <h6 className='text-center '>UI Developer</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-header">Interview Feedback</div>
                            <div className="card-body">
                                {/* <h4 className="card-title">$ 44</h4>
                                <h6 className="card-title">Disputes</h6> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-3 padBottom">
                        <div className="card text-center">
                            <div className="card-header">
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
                            <div className="card-header">
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
