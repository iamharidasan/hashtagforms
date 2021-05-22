import React from "react"
import logo from "../../Assets/Fanconvo-header-logo.png"

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <img src={logo} className="w-100" />
          </div>
          <div
            className="col-12 col-lg-9 text-center align-self-center"
            style={{ color: "#475050" }}
          >
            <div className="row">
              <div className="col">How Fanconvo Works?</div>
              <div className="col">Terms of Use</div>
              <div className="col">Contact Us</div>
            </div>
          </div>
          <div className="col-12 mt-3 text-center">
            <p style={{ color: "#475050" }}>&copy; 2021 Fanconvo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
