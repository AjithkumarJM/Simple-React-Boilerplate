import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render() {
        return (
            <Fragment>
                <Button size='sm' color="danger">Danger!</Button>
            </Fragment>
        )
    }
}

export default (connect(null, {}))(Dashboard);
