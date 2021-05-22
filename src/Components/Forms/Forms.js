import React from "react"
import TimezoneSelect from "react-timezone-select"
import Style from "./Forms.module.css"

const Forms = ({
  fields,
  timeZoneChangeHandler,
  submit,
  fieldChange,
  formName,
}) => {
  const { first_name, last_name, username, email, password, timezone } = fields
  return (
    <form action="" onSubmit={(e) => submit(e)}>
      <div className="form-group">
        <label htmlFor={`${formName}firstName`}>First Name</label>
        <input
          type="text"
          name="first_name"
          id={`${formName}firstName`}
          className={`form-control ${Style.Input}`}
          placeholder="Please enter your first name"
          onChange={(e) => fieldChange(e)}
          value={first_name}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${formName}lastName`}>Last Name</label>
        <input
          type="text"
          name="last_name"
          id={`${formName}lastName`}
          className={`form-control ${Style.Input}`}
          placeholder="Please enter your last name"
          onChange={(e) => fieldChange(e)}
          value={last_name}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${formName}userName`}>User Name</label>
        <input
          type="text"
          name="username"
          id={`${formName}userName`}
          className={`form-control ${Style.Input}`}
          placeholder="Please enter a user name"
          onChange={(e) => fieldChange(e)}
          value={username}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${formName}email`}>Email Address</label>
        <input
          type="email"
          name="email"
          id={`${formName} email`}
          className={`form-control ${Style.Input}`}
          placeholder="Please enter your email address"
          onChange={(e) => fieldChange(e)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${formName}password`}>Password</label>
        <input
          type="password"
          name="password"
          id={`${formName}password`}
          className={`form-control ${Style.Input}`}
          placeholder="Please enter a password"
          onChange={(e) => fieldChange(e)}
          value={password}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${formName}timezone`}>Timezone</label>
        <TimezoneSelect
          id={`${formName}timezone`}
          name="timezone"
          className={`form-control ${Style.Input}`}
          value={timezone}
          onChange={timeZoneChangeHandler}
        />
      </div>
      <div className="text-center">
        <p className={`mt-4 mb-3 ${Style.checkBoxHolder}`}>
          <label>
            <input type="checkbox" className={Style.checkBox} />
            <span class={Style.Mark}></span> I agree to the{" "}
            <a href="/terms" style={{ color: "#72f58d" }}>
              Terms &amp; Conditions
            </a>
          </label>
        </p>
        <button type="submit" className={`btn btn-primary ${Style.Btn}`}>
          Sign Up as {formName}
        </button>
        <p className="mt-1 mb-0">
          Already have an account?{" "}
          <a href="/login" style={{ color: "#72f58d" }}>
            Login
          </a>
        </p>
      </div>
    </form>
  )
}

export default Forms
