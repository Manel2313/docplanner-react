import React, { Component } from 'react';
import Intro from './compIntro/intro.js'
import Forwho from './compForWho/forwho.js'
import GlobalCompany from './compGlobalCompany/globalcompany.js'
import HealthPlat from './compHealthcarePlateform/healthplat.js'
import Offices from './compOffices/offices.js'
class Main extends Component {
    state = {}
    render() {
        return (
            <div>
                <Intro />
                <Forwho />
                <GlobalCompany />
                <HealthPlat />
                <Offices />
            </div>
        );
    }
}

export default Main;