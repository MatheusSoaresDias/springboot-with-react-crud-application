import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://www.linkedin.com/in/matheussoaresjava/"> LinkedIn <i className="fab fa-linkedin"></i> </a>
                            <a href="https://github.com/MatheusSoaresDias"> GitHub <i className="fab fa-github"></i> </a>
                            <a href="https://api.whatsapp.com/send/?phone=5543999552193&text&app_absent=0"> Whatsapp <i className="fab fa-whatsapp"></i> </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;