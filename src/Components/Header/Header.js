import React, { Fragment } from "react"
import logo from "../../Assets/Fanconvo-header-logo.png"
import Style from "./Header.module.css"

const Header = () => {
  return (
    <Fragment>
      <header className="pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 text-center text-lg-left">
              <img src={logo} alt="" className={Style.Logo} />
              <p className={`mt-2 mb-0 ${Style.logoSlogan}`}>
                A marketplace for conversations, mentorships and performances.
              </p>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-right align-self-center">
              <ul className={`list-unstyled mb-0 ${Style.HeaderLinks}`}>
                <li className="list-inline-item">
                  <a href="/sign-up">Sign Up</a>
                </li>
                <li className="list-inline-item">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="search-box">
        <div className="container">
          <div className="row">
            <div className="col-12 align-content-center">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <label className="h3 mt-2 mb-0" htmlFor="search">
                  Search New Talent
                </label>
                <span className="position-relative">
                  <input type="text" id="search" className={Style.Searchbar} />
                  <button type="submit" className={Style.formSearch}>
                    <i className="fas fa-search"></i>
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Header
