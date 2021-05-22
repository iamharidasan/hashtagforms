import React, { Fragment, useState } from "react"
import axios from "axios"
import Forms from "../../Components/Forms"

const Home = () => {
  const [tab, setTab] = useState("Talent")
  const [selectedTimezone, setSelectedTimezone] = useState("")
  const [selectedFunTimezone, setSelectedFunTimezone] = useState("")
  const [talentErrors, setTalentErrors] = useState()
  const [funErrors, setFunErrors] = useState()
  const [talentFormFields, setTalentFormFields] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    timezone: "America/New_York",
    captcha: true,
  })
  const [funFormFields, setFunFormFields] = useState({
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
  const changeFunFormHandler = (e) => {
    setFunFormFields({
      ...funFormFields,
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
  const timeZoneFunChangeHandler = (val) => {
    setSelectedFunTimezone(val)
    setFunFormFields({
      ...funFormFields,
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
  const funFormHandler = async (e) => {
    e.preventDefault()
    const { first_name, last_name, username, email, password } = funFormFields
    const errors = validate(first_name, last_name, username, email, password)
    if (errors.length > 0) {
      setFunErrors(errors)
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      await axios
        .post(
          "https://apidev.fanconvo.com/api/v3/sign-up/fun",
          funFormFields,
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
            setFunErrors(errors)
          }
        })
    }
  }
  return (
    <Fragment>
      <h1 className="text-center mt-0 mb-3">Sign Up</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={tab === "Talent" ? "nav-link active" : "nav-link"}
            onClick={(e) => switchTabHandler("Talent", e)}
          >
            Talent
          </button>
        </li>
        <li className="nav-item">
          <button
            className={tab === "Fun" ? "nav-link active" : "nav-link"}
            onClick={(e) => switchTabHandler("Fun", e)}
          >
            Fun
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={
            tab === "Talent" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          {talentErrors && talentErrors.length !== 0 && (
            <h4 className="mt-4 mb-2 text-danger text-center">
              {talentErrors.map((error, index) => {
                return <span key={index}>{error + ", "}</span>
              })}
            </h4>
          )}
          <Forms
            fields={talentFormFields}
            submit={talentFormHandler}
            fieldChange={changeTalentFormHandler}
            timezone={timeZoneChangeHandler}
            formName={"Talent"}
          />
        </div>
        <div
          className={
            tab === "Fun" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          {funErrors && funErrors.length !== 0 && (
            <h4 className="mt-4 mb-2 text-danger text-center">
              {funErrors.map((error, index) => {
                return <span key={index}>{error + ", "}</span>
              })}
            </h4>
          )}
          <Forms
            fields={funFormFields}
            submit={funFormHandler}
            fieldChange={changeFunFormHandler}
            timezone={timeZoneFunChangeHandler}
            formName={"Fun"}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
