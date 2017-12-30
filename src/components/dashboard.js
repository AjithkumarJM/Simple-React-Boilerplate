import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="card text-center">
                    <div className="card-header redBg">
                        Analytics
                </div>
                    <div className="card-body">
                        {/* <Link to={{
                            pathname: '/duplicateReview',
                            state: { value: 'Duplicate Review', name: 'DUPLICATE_REVIEW' }
                        }}>
                            <h4 className="card-title">{this.state.dashboardData.Duplicate_Review}</h4>
                            <h6 className="card-title">(Dispute ${this.state.dashboardData.Duplicate_Review_Dispute > 0 ? this.state.dashboardData.Duplicate_Review_Dispute.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : this.state.dashboardData.Duplicate_Review_Dispute})</h6>
                        </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}