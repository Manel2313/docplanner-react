import React, { Component } from 'react'
import './healthplat.css'

class HealthPlat extends Component {
    state = {}
    render() {
        return (
            <div id="healthcare-platform">
                <div className="healthcare-platform-division">
                    <div className="healthcare-platform-description">
                        <h1>The world's <br /> biggest healthcare platform</h1>
                        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
                </p>
                    </div>
                    <div className="plateform-description-list">
                        <div className="plateform-items-firstpart">
                            <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/flag.png" alt="" />
                                <h1>Leader in 10&nbsp;countries</h1>
                                <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile
                        </p>
                            </div>
                            <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/patients.png" alt="" />
                                <h1>30 million unique patients</h1>
                                <p>visit us every month</p>
                            </div>
                        </div>
                        <div className="plateform-items-secondpart">
                            <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/visits.png" alt="" />
                                <h1>1 million appointments</h1>
                                <p>booked last month</p>
                            </div>
                            <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/doctors.png" alt="" />
                                <h1>2 million active doctors</h1>
                                <p>trust in our solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HealthPlat;