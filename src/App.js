import React, {Component} from 'react'
import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      dropDownVisible: false
    }
  }

  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible
    })
  }

    render() {
        return (
       <body>
          <div className ="App">
                <header className ="main-header">
                    <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="Start Bootstrap"/>
                    <nav className="desktop-menu">
                        <span><a>Services</a></span>
                        <span><a>Portfolio</a></span>
                        <span><a>About</a></span>
                        <span><a>Team</a></span>
                        <span><a>Contact</a></span>
                    </nav>
                    <div className="dropdown" onClick={this.toggleDropDown}>Menu</div>
                    { this.state.dropDownVisible ? ( 
                      <nav className="mobile-menu">
                          <span><a>Services</a></span>
                          <span><a>Portfolio</a></span>
                          <span><a>About</a></span>
                          <span><a>Team</a></span>
                          <span><a>Contact</a></span>
                      </nav>
                      ) : null }
                </header>
            </div>
      </body>
        )
    }
}

export default App