import { useState } from "react"

export const FormValidationCheckV2 = () => {

  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [submittedData, setSubmittedData] = useState(null)

  //Error states for each field
  const [nameError, setNameError] = useState("")      
  const [mobileError, setMobileError] = useState("")  
  const [emailError, setEmailError] = useState("")    

  const handleName = (e) => setName(e.target.value)
  const handleMobile = (e) => setMobile(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)

  //  Validation functions

  const validateName = () => {
    if (name.trim() === "") return "Name is required"
    if (name.length < 3) return "Minimum 3 characters"
    if (!/^[A-Za-z ]+$/.test(name)) return "Only alphabets allowed"
    return ""
  }

  const validateMobile = () => {
    if (mobile.trim() === "") return "Mobile number is required"
    if (!/^\d+$/.test(mobile)) return "Only digits allowed"    // no letters or symbols
    if (mobile.length < 10) return "Minimum 10 digits"
    if (mobile.length > 15) return "Maximum 15 digits"
    return ""
  }

  const validateEmail = () => {
    if (email.trim() === "") return "Email is required"
    if (email.length < 6) return "Minimum 6 characters"        // e.g. "a@b.co"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address"
    return ""
  }

  //  onBlur handlers 

  const handleNameBlur = () => setNameError(validateName())
  const handleMobileBlur = () => setMobileError(validateMobile())  
  const handleEmailBlur = () => setEmailError(validateEmail())      

  //  Submit 

  const handleSubmit = (e) => {
    e.preventDefault()

    // Run all validations together so all errors show at once
    const nameErr = validateName()
    const mobileErr = validateMobile()
    const emailErr = validateEmail()

    setNameError(nameErr)
    setMobileError(mobileErr)
    setEmailError(emailErr)

    if (nameErr || mobileErr || emailErr) return   // stop if any field fails

    const data = { name, mobile, email }
    setSubmittedData(data)
  }


  return (
    <>
      <div className="card">
        <h1 className="font-bold text-lg">Form Validation Checks V2 - (Return-based function)</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mt-4">

            {/* Name */}
            <div className="flex flex-col items-start gap-3">
              <label htmlFor="name" className="text-xs truncate w-full">Name: {name}</label>
              <input
                type="text" id="name" name="name"
                value={name} onChange={handleName} onBlur={handleNameBlur}
                className="form-control"
              />
              {nameError && <span className="text-red-500">{nameError}</span>}
            </div>

            {/* Mobile */}
            <div className="flex flex-col items-start gap-3">
              <label htmlFor="mobile" className="text-xs truncate w-full">Mobile: {mobile}</label>
              <input
                type="text" id="mobile" name="mobile"
                value={mobile} onChange={handleMobile} onBlur={handleMobileBlur}  
                className="form-control"
              />
              {mobileError && <span className="text-red-500">{mobileError}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-3">
              <label htmlFor="email" className="text-xs truncate w-full">Email: {email}</label>
              <input
                type="email" id="email" name="email"
                value={email} onChange={handleEmail} onBlur={handleEmailBlur}   
                className="form-control"
              />
              {emailError && <span className="text-red-500">{emailError}</span>} 
            </div>

          </div>
          <button
            type="submit" className="addBtn"
            disabled={!name || !mobile || !email}
          >
            Submit
          </button>
        </form>

        <ul>
          {submittedData && (
            <li>
              <strong>Submitted Data:</strong>
              <ul>
                <li>Name: {submittedData.name}</li>
                <li>Mobile: {submittedData.mobile}</li>
                <li>Email: {submittedData.email}</li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}