import axios from "axios";
import { useContext, useRef, useState, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const ApplicationForm = () => {
  const [state] = useContext(GlobalContext)
  const applicationFormRef = useRef(null);

  const [type, setType] = useState(null);
  const [employment, setEmployment] = useState(null);
  const [hrsWeek, setHours] = useState(0);
  const [weekDays, setWeekDays] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");

  const [education1, setEducation1] = useState({
    school: "",
    from: "",
    to: "",
    finished: false,
  });
  const [education2, setEducation2] = useState({
    school: "",
    from: "",
    to: "",
    finished: false,
  });
  const [education3, setEducation3] = useState({
    school: "",
    from: "",
    to: "",
    finished: false,
  });

  const [exp1, setExp1] = useState({
    company: "",
    from: "",
    to: "",
    current: false,
  });
  const [exp2, setExp2] = useState({
    company: "",
    from: "",
    to: "",
    current: false,
  });
  const [exp3, setExp3] = useState({
    company: "",
    from: "",
    to: "",
    current: false,
  });

  const [motivation, setMotivation] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const getWeekDays = () => {
    const allDays = document.getElementsByClassName('weekDays');
    const availableDays = [];
    for (let i = 0; i < allDays.length; i++) {
      const element = allDays[i];
      if (element.checked) {
        availableDays.push(element.value);
        setWeekDays(availableDays);
      }
    }
  }

  const compileData = () => {
    setWeekDays(weekDays.toString());
    applyNow();
  }

  const applyNow = async () => {
    if (true) {
      const body = new FormData();
      if (resumeFile) {
        body.append("resume", resumeFile);
      }
      body.append("type", type); body.append("employment", employment);
      body.append("hrsWeek", hrsWeek);
      body.append("weekDays", weekDays);
      body.append("firstName", firstName);
      body.append("lastName", lastName);
      body.append("dob", dob);
      body.append("email", email);
      body.append("phone", phone);
      body.append("address", address);
      body.append("zip", zip); body.append("city", city);
      body.append("education1", JSON.stringify(education1));
      body.append("education2", JSON.stringify(education2));
      body.append("education3", JSON.stringify(education3));
      body.append("exp1", JSON.stringify(exp1));
      body.append("exp2", JSON.stringify(exp2));
      body.append("exp3", JSON.stringify(exp3));
      body.append("motivation", motivation)

      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/career/apply`, body)
        .then(res => {
          alert("Application submitted successfully!")
          // window.location.reload();
        })
        .catch(err => { console.log(err) });
    }
  }

  const executeScroll = () => {
    setTimeout(() => {
      const collapseApplicationForm = applicationFormRef.current.getBoundingClientRect();
      document.body.scrollTop = document.body.scrollTop + collapseApplicationForm.y - 100; // For Safari
      document.documentElement.scrollTop = document.documentElement.scrollTop + collapseApplicationForm.y - 100; // For Chrome, Firefox, IE and Opera
    }, 150);
  }

  const filledRequired = () => {
    let flag = 0;
    const elements = document.getElementsByClassName('required');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("validate");
      if (!(element.value.length > 0)) {
        element.classList.add("validate");
        flag++;
      }
      else if (parseInt(element.value) === 0) {
        element.classList.add("validate");
        flag++;
      }
      else if (element.value === "none" || element.value == null) {
        element.classList.add("validate");
        flag++;
      }
    }
    if (flag > 0) {
      return false;
    }
    return true;
  }
  const selectFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setResumeFile(i);
    }
  }
  useEffect(() => {
    filledRequired();
  }, [
    type, employment, hrsWeek, weekDays, firstName, lastName, dob, email, phone, address, zip, city, education1, education2, education3,
    exp1, exp2, exp3, motivation
  ]);
  return (
    <section id="application_form">
      <div className="container pb-5">
        <button className="apply-btn btn btn-primary btn-lg" onClick={executeScroll} id="apply_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApplicationForm" aria-expanded="false" aria-controls="collapseApplicationForm">{state.text.applyNow}</button>
      </div>
      <div className="application-wrapper collapse" id="collapseApplicationForm" ref={applicationFormRef}>
        <div className="container">
          <div className="row">
            <div className="col pt-5">
              <h1 className="text-center">{state.text.careerFormTitle}</h1>
            </div>
          </div>
        </div>
        <div className="application-form-bg-cultured w-100 py-5 bg-cultured">
          <div className="container">
            <div className="row">
              <div className="col">
                <form>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{state.text.careerFormJobDescription}</legend>
                    <div className="mb-3">
                      <label htmlFor="vacancy" className="form-label">{state.text.careerFormJobDescriptionDesc}</label>
                      <select defaultValue={"none"} onChange={e => setType(e.target.value)} className="form-select required" name="vacancy" id="vacancy">
                        <option value="none" disabled>Please select</option>
                        <option value="stylist">{state.text.careerFormJobDescriptionOption1}</option>
                        <option value="entrepreneur">{state.text.careerFormJobDescriptionOption2}</option>
                        <option value="letter">{state.text.careerFormJobDescriptionOption3}</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">{state.text.careerFormEmployment}</label>
                      <div className="row">
                        <div className="col-md-6">

                          <div className="d-flex">
                            <div className="d-flex align-items-center">

                              <div className="form-check form-check-inline">
                                <input onChange={e => { e.target.checked && setEmployment(e.target.id) }} className="form-check-input" type="radio" name="employment" value="full_time" id="full_time" />
                                <label className="form-check-label" htmlFor="full_time">{state.text.careerFormEmploymentOption1}</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input onChange={e => { e.target.checked && setEmployment(e.target.id) }} className="form-check-input" type="radio" name="employment" value="part_time" id="part_time" />
                                <label className="form-check-label" htmlFor="part_time">{state.text.careerFormEmploymentOption2}</label>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="mb-3">
                                <input value={hrsWeek} onChange={e => setHours(e.target.value)} className="form-control" type="number" min="0" max="99" name="employment" id="hours_per_week" placeholder={state.text.careerFormEmploymentOption3} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">{state.text.careerFormAvailability}</label>
                      <div className="d-block">
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="mon" id="mon" />
                          <label className="form-check-label" htmlFor="mon">{state.text.careerFormAvailabilityDay1}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="tue" id="tue" />
                          <label className="form-check-label" htmlFor="tue">{state.text.careerFormAvailabilityDay2}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="wed" id="wed" />
                          <label className="form-check-label" htmlFor="wed">{state.text.careerFormAvailabilityDay3}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="thu" id="thu" />
                          <label className="form-check-label" htmlFor="thu">{state.text.careerFormAvailabilityDay4}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="fri" id="fri" />
                          <label className="form-check-label" htmlFor="fri">{state.text.careerFormAvailabilityDay5}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="sat" id="sat" />
                          <label className="form-check-label" htmlFor="sat">{state.text.careerFormAvailabilityDay6}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input onChange={getWeekDays} className="weekDays form-check-input" type="checkbox" name="availability" value="sun" id="sun" />
                          <label className="form-check-label" htmlFor="sun">{state.text.careerFormAvailabilityDay7}</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{state.text.careerFormPersonalInformation}</legend>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">{state.text.careerFormName}</label>
                      <div className="row">
                        <div className="col">
                          <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control required" type="text" name="first_name" placeholder={state.text.careerFormNamePlaceholder1} />
                        </div>
                        <div className="col">
                          <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control required" type="text" name="last_name" placeholder={state.text.careerFormNamePlaceholder2} />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="date_of_birth" className="form-label">{state.text.careerFormDOB}</label>
                        <input value={dob} onChange={e => setDob(e.target.value)} className="form-control required" type="date" name="date_of_birth" id="date_of_birth" />
                      </div>
                      <div className="col">
                        <label htmlFor="gender" className="form-label">{state.text.careerFormGender}</label>
                        <div className="d-block">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="gender" value="1" id="men" />
                            <label className="form-check-label" htmlFor="men">{state.text.careerFormGenderOption1}</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="gender" value="2" id="women" />
                            <label className="form-check-label" htmlFor="women">{state.text.careerFormGenderOption2}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="email" className="form-label">{state.text.careerFormEmail}</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control required" type="email" name="email" id="email" placeholder={state.text.careerFormEmailPlaceholder} />
                      </div>
                      <div className="col">
                        <label htmlFor="phone" className="form-label">{state.text.careerFormPhone}</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control required" type="text" name="phone" id="phone" placeholder={state.text.careerFormPhone} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">{state.text.careerFormAddress}</label>
                      <input value={address} onChange={e => setAddress(e.target.value)} className="form-control mb-3" type="text" name="address" id="street_address" placeholder={state.text.careerFormAddressPlaceholder1} />
                      <div className="row">
                        <div className="col">
                          <input value={zip} onChange={e => setZip(e.target.value)} className="form-control" type="text" name="postal_zip_code" id="postal_zip_code" placeholder={state.text.careerFormAddressPlaceholder2} />
                        </div>
                        <div className="col">
                          <input value={city} onChange={e => setCity(e.target.value)} className="form-control" type="text" name="city" id="city" placeholder={state.text.careerFormAddressPlaceholder3} />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{state.text.careerFormEducation}</legend>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="school" className="form-label">{state.text.careerFormSchool}</label>
                      </div>
                      <div className="col">
                        <label htmlFor="when" className="form-label">{state.text.careerFormWhen}</label>
                      </div>
                      <div className="col">
                        <label htmlFor="finished" className="form-label">{state.text.careerFormFinished}</label>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input value={education1.school} onChange={e => setEducation1({ ...education1, school: e.target.value })} className="form-control required mb-3" type="text" name="school[]" id="school_1" placeholder={state.text.careerFormSchool} />
                      </div>
                      <div className="col d-md-flex">
                        <input value={education1.from} onChange={e => setEducation1({ ...education1, from: e.target.value })} className="form-control required mb-3 me-md-2" type="date" name="whenfrom[]" id="when_form_1" placeholder={state.text.careerFormWhenPlaceholder1} />
                        <input value={education1.to} onChange={e => setEducation1({ ...education1, to: e.target.value })} className="form-control required mb-3" type="date" name="whento[]" id="when_to_1" placeholder={state.text.careerFormWhenPlaceholder2} />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input onChange={e => { e.target.checked && setEducation1({ ...education1, finished: true }) }} className="form-check-input" type="checkbox" name="finished[]" id="finished_1" />
                          <label className="form-check-label" htmlFor="finished_1">{state.text.careerFormFinishedPlaceholder}</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <input value={education2.school} onChange={e => setEducation2({ ...education2, school: e.target.value })} className="form-control mb-3" type="text" name="school[]" id="school_1" placeholder={state.text.careerFormSchool} />
                      </div>
                      <div className="col d-md-flex">
                        <input value={education2.from} onChange={e => setEducation2({ ...education2, from: e.target.value })} className="form-control mb-3 me-md-2" type="date" name="whenfrom[]" id="when_form_1" placeholder={state.text.careerFormWhenPlaceholder1} />
                        <input value={education2.to} onChange={e => setEducation2({ ...education2, to: e.target.value })} className="form-control mb-3" type="date" name="whento[]" id="when_to_1" placeholder={state.text.careerFormWhenPlaceholder2} />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input onChange={e => { e.target.checked && setEducation2({ ...education2, finished: true }) }} className="form-check-input" type="checkbox" name="finished[]" id="finished_1" />
                          <label className="form-check-label" htmlFor="finished_1">{state.text.careerFormFinishedPlaceholder}</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <input value={education3.school} onChange={e => setEducation3({ ...education3, school: e.target.value })} className="form-control mb-3" type="text" name="school[]" id="school_1" placeholder={state.text.careerFormSchool} />
                      </div>
                      <div className="col d-md-flex">
                        <input value={education3.from} onChange={e => setEducation3({ ...education3, from: e.target.value })} className="form-control mb-3 me-md-2" type="date" name="whenfrom[]" id="when_form_1" placeholder={state.text.careerFormWhenPlaceholder1} />
                        <input value={education3.to} onChange={e => setEducation3({ ...education3, to: e.target.value })} className="form-control mb-3" type="date" name="whento[]" id="when_to_1" placeholder={state.text.careerFormWhenPlaceholder2} />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input onChange={e => { e.target.checked && setEducation3({ ...education3, finished: true }) }} className="form-check-input" type="checkbox" name="finished[]" id="finished_1" />
                          <label className="form-check-label" htmlFor="finished_1">{state.text.careerFormFinishedPlaceholder}</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{state.text.careerFormExperience}</legend>

                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="company" className="form-label">{state.text.careerFormCompany}</label>
                        <input value={exp1.company} onChange={e => setExp1({ ...exp1, company: e.target.value })} className="form-control required mb-3" type="text" name="company[]" id="company" placeholder={state.text.careerFormCompanyPlaceholder} />
                      </div>
                      <div className="col">
                        <label htmlFor="company_when" className="form-label">{state.text.careerFormWhen}</label>
                        <div className="row">
                          <div className="col-md-6">
                            <input value={exp1.from} onChange={e => setExp1({ ...exp1, from: e.target.value })} className="form-control required mb-3" type="date" name="company_when_from[]" id="company_when_from_1" placeholder={state.text.careerFormWhenPlaceholder1} />
                          </div>
                          <div className="col-md-6">
                            <input value={exp1.to} onChange={e => setExp1({ ...exp1, to: e.target.value })} className="form-control required mb-3" type="date" name="company_when_to[]" id="company_when_to_1" placeholder={state.text.careerFormWhenPlaceholder2} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="company" className="form-label">{state.text.careerFormCompany}</label>
                        <input value={exp2.company} onChange={e => setExp2({ ...exp2, company: e.target.value })} className="form-control mb-3" type="text" name="company[]" id="company" placeholder={state.text.careerFormCompanyPlaceholder} />
                      </div>
                      <div className="col">
                        <label htmlFor="company_when" className="form-label">{state.text.careerFormWhen}</label>
                        <div className="row">
                          <div className="col-md-6">
                            <input value={exp2.from} onChange={e => setExp2({ ...exp2, from: e.target.value })} className="form-control mb-3" type="date" name="company_when_from[]" id="company_when_from_1" placeholder={state.text.careerFormWhenPlaceholder1} />
                          </div>
                          <div className="col-md-6">
                            <input value={exp2.to} onChange={e => setExp2({ ...exp2, to: e.target.value })} className="form-control mb-3" type="date" name="company_when_to[]" id="company_when_to_1" placeholder={state.text.careerFormWhenPlaceholder2} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="company" className="form-label">{state.text.careerFormCompany}</label>
                        <input value={exp3.company} onChange={e => setExp3({ ...exp3, company: e.target.value })} className="form-control mb-3" type="text" name="company[]" id="company" placeholder={state.text.careerFormCompanyPlaceholder} />
                      </div>
                      <div className="col">
                        <label htmlFor="company_when" className="form-label">{state.text.careerFormWhen}</label>
                        <div className="row">
                          <div className="col-md-6">
                            <input value={exp3.from} onChange={e => setExp3({ ...exp3, from: e.target.value })} className="form-control mb-3" type="date" name="company_when_from[]" id="company_when_from_1" placeholder={state.text.careerFormWhenPlaceholder1} />
                          </div>
                          <div className="col-md-6">
                            <input value={exp3.to} onChange={e => setExp3({ ...exp3, to: e.target.value })} className="form-control mb-3" type="date" name="company_when_to[]" id="company_when_to_1" placeholder={state.text.careerFormWhenPlaceholder2} />
                          </div>
                        </div>
                      </div>
                    </div>

                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{state.text.careerFormMotivation}</legend>
                    <div className="mb-3">
                      <textarea value={motivation} onChange={e => setMotivation(e.target.value)} className="form-control mb-3" name="motivation" id="motivation" rows="3" placeholder={state.text.careerFormMotivationPlaceholder}></textarea>
                    </div>
                  </fieldset>
                  <div className="mb-3">
                    <input onChange={selectFile} accept="image/png, image/jpeg, .pdf,.doc, .docx" className="form-control mb-3" type="file" name="attachments[]" />
                    <p><i className="fas fa-paperclip me-2"></i> {state.text.careerFormAttachment}</p>
                  </div>
                  <div className="d-flex justify-content-center w-100">
                    <button onClick={compileData} type="button" className="btn btn-black rounded-0 text-white font-weight-700 px-5">{state.text.careerFormButton}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationForm
