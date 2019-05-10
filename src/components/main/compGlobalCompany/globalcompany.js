import React, { Component } from 'react';
import './globalcompany.css'
class GlobalCompany extends Component {
    state = {}
    render() {
        return (
            <div id="local-culture-links">
                <div className="local-culture">
                    <h1>We are a global company <br /> with local culture</h1>
                    <ul className="local-culture-list">
                        <li className="local-culture-items">
                            <i className="fas fa-star-of-life"></i>
                            ZnanyLekarz
                    </li>
                        <li className="local-culture-items">
                            <i className="fas fa-star-of-life"></i>
                            Doctoralia
                    </li>
                        <li className="local-culture-items">
                            <i className="fas fa-star-of-life"></i>
                            MioDottore
                    </li>
                        <li className="local-culture-items">
                            <i className="fas fa-star-of-life"></i>
                            DoktorTakvimi
                    </li>
                        <li className="local-culture-items">
                            <i className="fas fa-star-of-life"></i>
                            ZnamyLekar
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GlobalCompany;