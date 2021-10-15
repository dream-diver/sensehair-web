import { useRef } from "react"

const ApplicationForm = () => {
  const applicationFormRef = useRef(null)

  const executeScroll = () => {
    setTimeout(() => {
      const collapseApplicationForm = applicationFormRef.current.getBoundingClientRect();
      document.body.scrollTop = document.body.scrollTop + collapseApplicationForm.y - 100; // For Safari
      document.documentElement.scrollTop = document.documentElement.scrollTop + collapseApplicationForm.y - 100; // For Chrome, Firefox, IE and Opera
    }, 150);
  }

  return (
    <section id="application_form">
      <div className="container pb-5">
        <button className="apply-btn btn btn-primary btn-lg" onClick={ executeScroll } id="apply_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApplicationForm" aria-expanded="false" aria-controls="collapseApplicationForm">Apply Now</button>
      </div>
      <div className="application-wrapper collapse" id="collapseApplicationForm" ref={ applicationFormRef }>
        <div className="container">
          <div className="row">
            <div className="col pt-5">
              <h1 className="text-center">Application Form</h1>
            </div>
          </div>
        </div>
        <div className="application-form-bg-cultured w-100 py-5 bg-cultured">
          <div className="container">
            <div className="row">
              <div className="col">
                <form>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">Job Description</legend>
                    <div className="mb-3">
                      <label htmlFor="vacancy" className="form-label">For which vacancy are you applying?</label>
                      <select className="form-select" name="vacancy" id="vacancy">
                        <option selected disabled>DROPDOWN</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Employment</label>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="d-flex align-items-center">
                              <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="employment" value="full" id="full_time" />
                                <label className="form-check-label" htmlFor="full_time">Full time</label>
                              </div>
                              <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="employment" value="part" id="part_time" />
                                <label className="form-check-label" htmlFor="part_time">Part time</label>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="mb-3">
                                <input className="form-control" type="number" min="0" max="99" name="employment" id="hours_per_week" placeholder="Hours per week" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Availability</label>
                      <div className="d-block">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="1" id="mon" />
                          <label className="form-check-label" htmlFor="mon">Mon</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="2" id="tue" />
                          <label className="form-check-label" htmlFor="tue">Tue</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="3" id="wed" />
                          <label className="form-check-label" htmlFor="wed">Wed</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="4" id="thu" />
                          <label className="form-check-label" htmlFor="thu">Thu</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="5" id="fri" />
                          <label className="form-check-label" htmlFor="fri">Fri</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="6" id="sat" />
                          <label className="form-check-label" htmlFor="sat">Sat</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="7" id="sun" />
                          <label className="form-check-label" htmlFor="sun">Sun</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">Personal Information</legend>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <div className="row">
                        <div className="col">
                          <input className="form-control" type="text" name="first_name" placeholder="First Name" />
                        </div>
                        <div className="col">
                          <input className="form-control" type="text" name="last_name" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                        <input className="form-control" type="date" name="date_of_birth" id="date_of_birth" />
                      </div>
                      <div className="col">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <div className="d-block">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="gender" value="1" id="men" />
                            <label className="form-check-label" htmlFor="men">Men</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="gender" value="2" id="women" />
                            <label className="form-check-label" htmlFor="women">Women</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="form-control" type="email" name="email" id="email" placeholder="Email" />
                      </div>
                      <div className="col">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input className="form-control" type="text" name="phone" id="phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input className="form-control mb-3" type="text" name="address" id="street_address" placeholder="Street Address" />
                      <div className="row">
                        <div className="col">
                          <input className="form-control" type="text" name="postal_zip_code" id="postal_zip_code" placeholder="Postal/zip code" />
                        </div>
                        <div className="col">
                          <input className="form-control" type="text" name="city" id="city" placeholder="City" />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">Education</legend>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="school" className="form-label">School</label>
                      </div>
                      <div className="col">
                        <label htmlFor="when" className="form-label">When</label>
                      </div>
                      <div className="col">
                        <label htmlFor="finished" className="form-label">Finished?</label>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="school[]" id="school_1" placeholder="School" />
                      </div>
                      <div className="col d-md-flex">
                        <input className="form-control mb-3 me-md-2" type="text" name="whenfrom[]" id="when_form_1" placeholder="Form" />
                        <input className="form-control mb-3" type="text" name="whento[]" id="when_to_1" placeholder="To" />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="finished[]" value="1" id="finished_1" />
                          <label className="form-check-label" htmlFor="finished_1">Yes</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="school[]" id="school_2" placeholder="School" />
                      </div>
                      <div className="col d-md-flex">
                        <input className="form-control mb-3 me-md-2" type="text" name="whenfrom[]" id="when_form_2" placeholder="Form" />
                        <input className="form-control mb-3" type="text" name="whento[]" id="when_to_2" placeholder="To" />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="finished[]" value="2" id="finished_2" />
                          <label className="form-check-label" htmlFor="finished_2">Yes</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="school[]" id="school_3" placeholder="School" />
                      </div>
                      <div className="col d-md-flex">
                        <input className="form-control mb-3 me-md-2" type="text" name="whenfrom[]" id="when_form_3" placeholder="Form" />
                        <input className="form-control mb-3" type="text" name="whento[]" id="when_to_3" placeholder="To" />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="finished[]" value="3" id="finished_3" />
                          <label className="form-check-label" htmlFor="finished_3">Yes</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">Experience</legend>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input className="form-control mb-3" type="text" name="company[]" id="company" placeholder="Company" />
                      </div>
                      <div className="col">
                        <label htmlFor="company_when" className="form-label">When</label>
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_from[]" id="company_when_from_1" placeholder="From" />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_to[]" id="company_when_to_1" placeholder="To" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="company[]" id="company" placeholder="Company" />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_from[]" id="company_when_from_2" placeholder="From" />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_to[]" id="company_when_to_2" placeholder="To" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="company[]" id="company" placeholder="Company" />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_from[]" id="company_when_from_3" placeholder="From" />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_to[]" id="company_when_to_3" placeholder="To" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">Motivation</legend>
                    <div className="mb-3">
                      <textarea className="form-control mb-3" name="motivation" id="motivation" rows="3"></textarea>
                      <p><i className="fas fa-paperclip me-2"></i> Optional: add attachments like your CV, letter of motivation, portfolio here.</p>
                    </div>
                  </fieldset>
                  <div className="d-flex justify-content-center w-100">
                    <button type="submit" className="btn btn-black rounded-0 text-white font-weight-700 px-5">APPLY</button>
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
