import React, { Fragment, useState } from "react"
import axios from "axios"
import Forms from "../../Components/Forms/Forms"

const Home = () => {
  const [tab, setTab] = useState("Fan")
  const [selectedTimezone, setSelectedTimezone] = useState("")
  const [selectedFanTimezone, setSelectedFanTimezone] = useState("")
  const [talentErrors, setTalentErrors] = useState()
  const [fanErrors, setFanErrors] = useState()
  const [talentFormFields, setTalentFormFields] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    timezone: "America/New_York",
    captcha: true,
  })
  const [fanFormFields, setFanFormFields] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    timezone: "America/New_York",
    captcha: true,
  })
  const changeTalentFormHandler = (e) => {
    setTalentFormFields({
      ...talentFormFields,
      [e.target.name]: e.target.value,
    })
  }
  const changeFanFormHandler = (e) => {
    setFanFormFields({
      ...fanFormFields,
      [e.target.name]: e.target.value,
    })
  }
  const timeZoneChangeHandler = (val) => {
    setSelectedTimezone(val)
    setTalentFormFields({
      ...talentFormFields,
      timezone: val.value,
    })
  }
  const timeZoneFanChangeHandler = (val) => {
    setSelectedFanTimezone(val)
    setFanFormFields({
      ...fanFormFields,
      timezone: val.value,
    })
  }
  const switchTabHandler = (val, e) => {
    e.preventDefault()
    setTab(val)
  }
  const validate = (first_name, last_name, username, email, password) => {
    const errors = []

    if (first_name.length === 0) {
      errors.push("First Name can't be empty")
    }
    if (last_name.length === 0) {
      errors.push("Last Name can't be empty")
    }
    if (username.length === 0) {
      errors.push("Username can't be empty")
    }
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long")
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email should contain a @")
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot")
    }
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long")
    }
    return errors
  }
  const talentFormHandler = async (e) => {
    e.preventDefault()
    const { first_name, last_name, username, email, password } =
      talentFormFields
    const errors = validate(first_name, last_name, username, email, password)
    if (errors.length > 0) {
      setTalentErrors(errors)
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      await axios
        .post(
          "https://apidev.fanconvo.com/api/v3/sign-up/talent",
          talentFormFields,
          config
        )
        .then((response) => {
          alert("User Created")
        })
        .catch((reason) => {
          if (reason.response.status === 400) {
            let errors = []
            for (const key of Object.keys(reason.response.data.data)) {
              errors.push(reason.response.data.data[key][0])
            }
            setTalentErrors(errors)
          }
        })
    }
  }
  const fanFormHandler = async (e) => {
    e.preventDefault()
    const { first_name, last_name, username, email, password } = fanFormFields
    const errors = validate(first_name, last_name, username, email, password)
    if (errors.length > 0) {
      setFanErrors(errors)
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      await axios
        .post(
          "https://apidev.fanconvo.com/api/v3/sign-up/fan",
          fanFormFields,
          config
        )
        .then((response) => {
          alert("User Created")
        })
        .catch((reason) => {
          if (reason.response.status === 400) {
            let errors = []
            for (const key of Object.keys(reason.response.data.data)) {
              errors.push(reason.response.data.data[key][0])
            }
            setFanErrors(errors)
          }
        })
    }
  }
  return (
    <Fragment>
      <div className="text-center">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={tab === "Fan" ? "nav-link active" : "nav-link"}
              onClick={(e) => switchTabHandler("Fan", e)}
            >
              FAN SIGNUP
            </button>
          </li>
          <li className="nav-item">
            <button
              className={tab === "Talent" ? "nav-link active" : "nav-link"}
              onClick={(e) => switchTabHandler("Talent", e)}
            >
              TALENT SIGNUP
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className={
            tab === "Talent" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <h2 className="text-center mt-3 mb-4">Create your Talent Account</h2>
          {talentErrors && talentErrors.length !== 0 && (
            <h4 className="mt-4 mb-2 text-danger text-center">
              {talentErrors.map((error, index) => {
                return <span key={index}>{error + ", "}</span>
              })}
            </h4>
          )}
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <Forms
                fields={talentFormFields}
                submit={talentFormHandler}
                fieldChange={changeTalentFormHandler}
                timezone={timeZoneChangeHandler}
                formName={"Talent"}
              />
            </div>
          </div>
        </div>
        <div
          className={
            tab === "Fan" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <h2 className="text-center mt-3 mb-4">Create your Fan Account</h2>
          {fanErrors && fanErrors.length !== 0 && (
            <h4 className="mt-4 mb-2 text-danger text-center">
              {fanErrors.map((error, index) => {
                return <span key={index}>{error + ", "}</span>
              })}
            </h4>
          )}
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <Forms
                fields={fanFormFields}
                submit={fanFormHandler}
                fieldChange={changeFanFormHandler}
                timezone={timeZoneFanChangeHandler}
                formName={"Fan"}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
