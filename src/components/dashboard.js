import React, { Component, Fragment } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { sampleReducerCall, sampleCallbackCall } from './../actions'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            callbackData: []
        }
    }

    componentWillMount() {
        this.props.sampleReducerCall();
        this.props.sampleCallbackCall((data) => {            
            this.setState({ callbackData: data.data })
        })
    }

    render() {
        const { testReducer } = this.props;
        const { callbackData } = this.state;
        var list = _.map(testReducer[0], (data) => {
            return (
                <ListGroupItem>
                    <div className='d-inline font-weight-bold'>{data.email} - {data.phone}</div>
                    <a href='/' className='float-right d-inline'>{data.email}</a>
                </ListGroupItem>
            )
        })        

        // var list = _.map(callbackData, (data) => {
        //     console.log(data)
        //     return (
        //         <ListGroupItem>
        //             <div className='d-inline font-weight-bold'>{data.email} - {data.phone}</div>
        //             <a href='/' className='float-right d-inline'>{data.email}</a>
        //         </ListGroupItem>
        //     )
        // })

        return (
            <Fragment>
                <ListGroup>
                    {list}
                </ListGroup>
            </Fragment>
        )
    }
}

function mapStateToProps({ testReducer }) {
    return { testReducer }
}

export default connect(mapStateToProps, { sampleReducerCall, sampleCallbackCall })(Dashboard);
