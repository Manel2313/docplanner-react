import React, { Component } from 'react'
import './footer.css'
class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="footer">
                <p>We are leaders in 10 countries:
                    <a href="//www.znanylekarz.pl" >Poland</a>,
                    <a href="//www.doktortakvimi.com">Turkey</a>,
                    <a href="//www.doctoralia.es">Spain</a>,
                    <a href="//www.miodottore.it">Italy</a>,
                    <a href="//www.znamylekar.cz">Czech Republic</a>,
                    <a href="//www.doctoralia.com.mx">Mexico</a>,
                    <a href="//www.doctoralia.co" >Colombia</a>,
                    <a href="http://www.doctoralia.com.br" >Brazil</a>,
                    <a href="http://www.doctoraliar.com" >Argentina</a>
                            and
                    <a href="http://www.doctoralia.cl" >Chile</a>
                </p>
                <p className="cookies-description">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
                <p className="copyright-docplanner">www.docplanner.com © 2019</p>
            </footer>
        );
    }
}

export default Footer;