import { useState } from "react";
import "../public/dist/css/adminlte.min.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    graduationYear: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    phonePart1: "",
    phonePart2: "",
    phonePart3: "",
    schoolId: "",
    isAgree: false, // checkbox field for agreement
    gender: "",// radio button for gender
  });

  // Handling input changes for all types of inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
// This function is used to handle changes in input fields, such as text inputs, checkboxes, and radio buttons. It updates the form data state.
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") { // In a checkbox we use if satememnt because if click on the checkbox it either be checked or unchecked 
      //so then checked property of the checkbox determines so we use to update it or not .
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      // The else if statement is used in conditional logic to check multiple conditions in sequence.
    } else if (type === "radio") { // radio button are typicaaly grouped togather by the same name and allow only one section to select
      // we use the value of property to select the value 
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value, // for text input we use the value property in to the text field.
      }));
    }
  };

  // Handling form submission with if-else
  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); // this prevent the default form submission behaviour which would normally reload the page
// In React, we want to handle the form submission asynchronously
  if (
    !formData.phonePart1 ||
    !formData.phonePart2 ||
    !formData.phonePart3 ||
    formData.phonePart1.length !== 3 ||
    formData.phonePart2.length !== 4 ||
    formData.phonePart3.length !== 4
    )  {
   alert("Please enter a valid phone number in the format ###-####-####");
  return;
   }


    if (!formData.firstName || !formData.lastName || !formData.email) {            // || OR operator 
      alert("Please fill in all the required fields!");   // add validation using if satement if codition is true the form submission scuccesfully
      // otherwise show alert to the system
    } else if (!formData.isAgree) {
      alert("You must agree to the terms and conditions.");    // The else if statement is used in conditional logic to 
      //check multiple conditions in sequence.
    }    // otherwise show alert to the system
   else if (!formData.gender) {
    alert("You must choose the gender.");    // The else if statement is used in conditional logic to 
    //check multiple conditions in sequence.
    console.log(formData.gender);
  } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };
  

  return (
      <div className="d-flex justify-content-center align-items-center min-vh-50 bg-dark">
        <div className="card shadow-lg p-4 bg-dark">
        <div className="container bg-white p-5 shadow-lg rounded-lg">
        <h1 className="text-center mb-4 text-primary">School Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}     
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                 id="firstName"
                name="firstName"
                value={formData.firstName}
                className="form-control"
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                className="form-control"
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Graduation Year */}
          <div className="row mb-4">
            <div className="col-md-6">
            <label className="form-label">Expected Year of Graduation</label>
            <input
              type="Number"
              name="graduationYear"
              value={formData.graduationYear}
              className="form-control"
              onChange={handleChange}
              placeholder="Enter Year"
               min="1900"
               max="2099"
              required
              
            />
            </div>
          </div>

          {/* Address Fields */}
          <div className="mb-4">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              className="form-control"
              onChange={handleChange}
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              className="form-control"
              onChange={handleChange}
              placeholder="Address Line 2"
            />
          </div>

          {/* City, State, Postal Code */}
          <div className="row mb-4">
            <div className="col-md-4">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                className="form-control"
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                className="form-control"
                onChange={handleChange}
                placeholder="State"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                className="form-control"
                onChange={handleChange}
                placeholder="Postal Code"
                required
              />
            </div>
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              className="form-control"
              onChange={handleChange}
              placeholder="Country"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="form-control"
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Phone Number Fields */}
          <div className="mb-4">
            <label className="form-label">Phone Number</label>
            <div className="d-flex">
              <input
                type="text"
                name="phonePart1"
                value={formData.phonePart1}
                className="form-control me-2"
                onChange={handleChange}
                placeholder="###"
                required
              />
              <input
                type="text"
                name="phonePart2"
                value={formData.phonePart2}
                className="form-control me-2"
                onChange={handleChange}
                placeholder="####"
                required
              />
              <input
                type="text"
                name="phonePart3"
                value={formData.phonePart3}
                className="form-control"
                onChange={handleChange}
                placeholder="####"
                required
              />
            </div>
          </div>

          {/* School ID Field */}
          <div className="mb-4">
            <label className="form-label">School ID</label>
            <input
              type="text"
              name="schoolId"
              value={formData.schoolId}
              className="form-control"
              onChange={handleChange}
              placeholder="Enter ID"
              required
            />
          </div>

          {/* Checkbox for Agreement */}
          <div className="mb-4">
            <input
              type="checkbox"
              name="isAgree"
              checked={formData.isAgree}
              onChange={handleChange}
              
            />
            <label className="ms-2" style={{paddingLeft:"10px" }}>I agree to the terms and conditions</label>
          </div>

          {/* Radio Buttons for Gender */}
          <div className="mb-4">
            <label className="form-label">Gender</label>     
              <div className="form-check me-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="male">Male</label>
               </div>
               <div className="form-check">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{
                width: "200px",
                fontSize: "1.2rem",
                borderRadius: "30px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default RegistrationForm;



