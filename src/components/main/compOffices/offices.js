import React, { Component } from 'react';
import './offices.css'
class Offices extends Component {
    state = {}
    render() {
        return (
            <div className="docplanner-offices">
                <div className="team-mate">
                    <h1>Improve the lives of millions. Change yours forever</h1>
                    <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona,
                        Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never
                stops.</p>
                </div>
                <div>
                    <div className="offices-list">
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/warsaw.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Warsaw</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/barcelona.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Barcelona</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/istanbul.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Istanbul</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                    </div>
                    <div className="offices-list">
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/rome.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Rome</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/mexico-city.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Mexico City</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/curitiba.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Curitiba</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offices;