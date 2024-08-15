import {useState} from "react";

const CVForm = () => {
    const [formData, setFormData] = useState({
            name: "",
            email: "",
            phoneNumber: "",
            schoolName: "",
            titleOfStudy: "",
            dateOfStudy: "",
            companyName: "",
            positionTitle: "",
            mainJobResponsibilities: "",
            employmentStartDate: "",
            employmentEndDate: ""
    });
    let [formDataEdit, setFormDataEdit] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        companyName: "",
        positionTitle: "",
        mainJobResponsibilities: "",
        employmentStartDate: "",
        employmentEndDate: ""
    })    



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
          })
    }

    const onSubmitClick = (event) => {
        event.preventDefault()
        setFormDataEdit({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phone-number").value,
            schoolName: document.getElementById("school-name").value,
            titleOfStudy: document.getElementById("title-of-study").value,
            dateOfStudy: document.getElementById("date-of-study").value,
            companyName: document.getElementById("company-name").value,
            positionTitle: document.getElementById("position-title").value,
            mainJobResponsibilities: document.getElementById("main-job-responsibilities").value,
            employmentStartDate: document.getElementById("date-started-at-company").value,
            employmentEndDate: document.getElementById("date-stopped-at-company").value
     })
     console.log("form data entered:", formDataEdit)
     document.getElementById("name-display").innerHTML = formData.name;
     document.getElementById("email-display").innerHTML = formData.email;
     document.getElementById("phone-number-display").innerHTML = formData.phoneNumber;
     document.getElementById("school-name-display").innerHTML = formData.schoolName;
     document.getElementById("title-of-study-display").innerHTML = formData.titleOfStudy;
     document.getElementById("date-of-study-display").innerHTML = formData.dateOfStudy;
     document.getElementById("company-name-display").innerHTML = formData.companyName;
     document.getElementById("position-title-display").innerHTML = formData.positionTitle;
     document.getElementById("main-job-responsibilities-display").innerHTML = formData.mainJobResponsibilities;
     document.getElementById("date-started-at-company-display").innerHTML = formData.employmentStartDate;
     document.getElementById("date-stopped-at-company-display").innerHTML = formData.employmentEndDate;
     console.log("form data entered:", formData)
     const empty = {
        name: "",
        email: "",
        phoneNumber: "",
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        companyName: "",
        positionTitle: "",
        mainJobResponsibilities: "",
        employmentStartDate: "",
        employmentEndDate: ""
    }
     setFormData(empty)
     console.log(formData)
    }
    
    const onEditClick = (event) => {
        event.preventDefault()

        setFormData({
            name: formDataEdit.name,
            email: formDataEdit.email,
            phoneNumber: formDataEdit.phoneNumber,
            schoolName: formDataEdit.schoolName,
            titleOfStudy: formDataEdit.titleOfStudy,
            dateOfStudy: formDataEdit.dateOfStudy,
            companyName: formDataEdit.companyName,
            positionTitle: formDataEdit.positionTitle,
            mainJobResponsibilities: formDataEdit.mainJobResponsibilities,
            employmentStartDate: formDataEdit.employmentStartDate,
            employmentEndDate: formDataEdit.employmentEndDate
        });
    }

 return (
   <>
    <form id="CV-Form">
        <br></br>
        <h1>CV Form</h1>
        <br></br>
        <label htmlFor="name">Name: </label>
        <input value={formData.name} name="name" onChange={handleChange} id="name" type="text" className="form-control" required></input>
        <br></br>
        <label htmlFor="email">Email: </label>
        <input value={formData.email} name="email" onChange={handleChange} id="email" type="email" className="form-control" required></input>
        <br></br>
        <label htmlFor="phone-number">Phone Number: </label>
        <input value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} id="phone-number" type="tel" className="form-control" required></input>
        <br></br>
        <label htmlFor="school-name">School Name:</label>
        <input value={formData.schoolName} name="schoolName" onChange={handleChange} id="school-name" className="form-control" type="text" required></input>
        <br></br>
        <label htmlFor="title-of-study">Title Of Study: </label>
        <input value={formData.titleOfStudy} name="titleOfStudy" onChange={handleChange} id="title-of-study" className="form-control" type="text" required></input>
        <br></br>
        <label htmlFor="date-of-study">Date Of Study: </label>
        <input value={formData.dateOfStudy} name="dateOfStudy" onChange={handleChange} id="date-of-study" className="form-control" type="date" required></input>
        <br></br>
        <label htmlFor="company-name">Company Name:</label>
        <input value={formData.companyName} name="companyName" onChange={handleChange} id="company-name" type="text" className="form-control" required></input>
        <br></br>
        <label htmlFor="position-title">Position Title: </label>
        <input value={formData.positionTitle} name="positionTitle" onChange={handleChange} id="position-title" type="text" className="form-control" required></input>
        <br></br>
        <label htmlFor="main-job-responsibilities">Job Responsibilities: </label>
        <input  value={formData.mainJobResponsibilities} name="mainJobResponsibilities" onChange={handleChange} id="main-job-responsibilities" className="form-control" type="text" required></input>
        <br></br>
        <label htmlFor="date-started-at-company">Employment Start Date: </label>
        <input value={formData.employmentStartDate} name="employmentStartDate" onChange={handleChange} id="date-started-at-company"  className="form-control" type="date" required></input>
        <br></br>
        <label htmlFor="date-stopped-at-company">Employment End Date:  </label>
        <input value={formData.employmentEndDate} name="employmentEndDate" onChange={handleChange} id="date-stopped-at-company" className="form-control" type="date" required></input>
        <br></br>
        <button id="submit" onClick={onSubmitClick} className="btn btn-primary" type="submit">Submit Form</button>
        <br></br>
  </form>
  <div id="CV-form-display">
    <br></br>
    <h1>Display CV Form</h1>
    <br></br>
    <div><strong>Name: </strong><div id="name-display"></div></div>
    <br></br>
    <div><strong>Email: </strong><div id="email-display"></div></div>
    <br></br>
    <div><strong>Phone Number: </strong><div id="phone-number-display"></div></div>
    <br></br>
    <div><strong> School Name: </strong><div id="school-name-display"></div></div>
    <br></br>
    <div><strong>Title Of Study: </strong><div id="title-of-study-display"></div></div>
    <br></br>
    <div><strong>Date Of Study:</strong><div id="date-of-study-display"></div></div>
    <br></br>
    <div><strong>Company Name:</strong><div id="company-name-display"></div></div>
    <br></br>
    <div><strong>Position Title: </strong><div id="position-title-display"></div></div>
    <br></br>
    <div><strong>Job Responsibilities: </strong><div id="main-job-responsibilities-display"></div></div>
    <br></br>
    <div><strong>Employment Start Date: </strong><div id="date-started-at-company-display"></div></div>
    <br></br>
    <div><strong>Employment End Date: </strong><div id="date-stopped-at-company-display"></div></div>
    <br></br>
    <button id="Edit" onClick={onEditClick} className="btn btn-warning" type="submit">Edit Form</button>
    <br></br>
  </div>
  </>
 )
}

export default CVForm;