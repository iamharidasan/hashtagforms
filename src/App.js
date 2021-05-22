import { Fragment } from "react"
import "./App.css"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Home from "./Screens/Home/Home"

function App() {
  return (
    <Fragment>
      <Header />
      <section className="App">
        <div className="container pt-5 pb-5 app-container">
          <div className="row">
            <div className="col-12">
              <Home />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default App
