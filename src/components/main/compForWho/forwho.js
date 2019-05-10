import React, { Component } from 'react';
import './forwho.css'
class Forwho extends Component {
    state = {}
    render() {
        return (
            <div id="for-patients-doctors">
                <div className="for-patients">
                    <h4 className="for-who-title">For patients</h4>
                    <h1 className="for-who-description">Find a doctor, book a visit and solve any health-related doubt</h1>
                    <div className="countries-select">
                        <select name="select-country" id="select-country">
                            <option>Choose country</option>
                            <option value="http://www.doctoraliar.com">Argentina</option>
                            <option value="http://www.doctoralia.com.au">Australia</option>
                            <option value="http://www.doctoralia.com.br">Brazil</option>
                            <option value="http://www.doctoralia.cl">Chile</option>
                            <option value="http://www.doctoralia.co">Colombia</option>
                            <option value="http://www.znamylekar.cz">Czech</option>
                            <option value="http://www.doctoralia-fr.com">France</option>
                            <option value="http://www.miodottore.it">Italy</option>
                            <option value="http://www.doctoralia.com.mx">Mexico</option>
                            <option value="http://www.doctoralia.pe">Peru</option>
                            <option value="http://www.znanylekarz.pl">Poland</option>
                            <option value="http://www.doctoralia.com.pt">Portugal</option>
                            <option value="http://www.doctoralia.es">Spain</option>
                            <option value="http://www.doktortakvimi.com">Turkey</option>
                            <option value="http://www.doctoralia.co.uk">UK</option>
                        </select>
                        <figure className="for-who-figure">
                            <img className="image-computer" src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="for-doctors">
                    <h4 className="for-who-title">For doctors</h4>
                    <h1 className="for-who-description">Save time managing visits and cut no-shows by half</h1>
                    <figure className="for-who-figure">
                        <img className="image-computer sizing" src="https://www.docplanner.com/img/screen-saas@2x.png" alt="" />
                    </figure>
                </div>
            </div>
        );
    }
}

export default Forwho;