import { useContext, useRef } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const ApplicationForm = () => {
  const [state] = useContext(GlobalContext)
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
        <button className="apply-btn btn btn-primary btn-lg" onClick={ executeScroll } id="apply_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApplicationForm" aria-expanded="false" aria-controls="collapseApplicationForm">{ state.text.applyNow }</button>
      </div>
      <div className="application-wrapper collapse" id="collapseApplicationForm" ref={ applicationFormRef }>
        <div className="container">
          <div className="row">
            <div className="col pt-5">
              <h1 className="text-center">{ state.text.careerFormTitle }</h1>
            </div>
          </div>
        </div>
        <div className="application-form-bg-cultured w-100 py-5 bg-cultured">
          <div className="container">
            <div className="row">
              <div className="col">
                <form>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{ state.text.careerFormJobDescription }</legend>
                    <div className="mb-3">
                      <label htmlFor="vacancy" className="form-label">{ state.text.careerFormJobDescriptionDesc }</label>
                      <select className="form-select" name="vacancy" id="vacancy">
                        <option selected disabled>Dropdown</option>
                        <option value="1">Haarstylist</option>
                        <option value="2">Zelfstandige</option>
                        <option value="3">Open Sollicitatie</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">{ state.text.careerFormEmployment }</label>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="d-flex align-items-center">
                              <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="employment" value="full" id="full_time" />
                                <label className="form-check-label" htmlFor="full_time">{ state.text.careerFormEmploymentOption1 }</label>
                              </div>
                              <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="checkbox" name="employment" value="part" id="part_time" />
                                <label className="form-check-label" htmlFor="part_time">{ state.text.careerFormEmploymentOption2 }</label>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="mb-3">
                                <input className="form-control" type="number" min="0" max="99" name="employment" id="hours_per_week" placeholder={ state.text.careerFormEmploymentOption3 } />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">{ state.text.careerFormAvailability }</label>
                      <div className="d-block">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="1" id="mon" />
                          <label className="form-check-label" htmlFor="mon">{ state.text.careerFormAvailabilityDay1 }</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="2" id="tue" />
                          <label className="form-check-label" htmlFor="tue">{ state.text.careerFormAvailabilityDay2 }</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="3" id="wed" />
                          <label className="form-check-label" htmlFor="wed">{ state.text.careerFormAvailabilityDay3 }</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="4" id="thu" />
                          <label className="form-check-label" htmlFor="thu">{ state.text.careerFormAvailabilityDay4 }</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="5" id="fri" />
                          <label className="form-check-label" htmlFor="fri">{ state.text.careerFormAvailabilityDay5 }</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="6" id="sat" />
                          <label className="form-check-label" htmlFor="sat">{ state.text.careerFormAvailabilityDay6 }</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" name="availability" value="7" id="sun" />
                          <label className="form-check-label" htmlFor="sun">{ state.text.careerFormAvailabilityDay7 }</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{ state.text.careerFormPersonalInformation }</legend>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">{ state.text.careerFormName }</label>
                      <div className="row">
                        <div className="col">
                          <input className="form-control" type="text" name="first_name" placeholder={ state.text.careerFormNamePlaceholder1 } />
                        </div>
                        <div className="col">
                          <input className="form-control" type="text" name="last_name" placeholder={ state.text.careerFormNamePlaceholder2 } />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="date_of_birth" className="form-label">{ state.text.careerFormDOB }</label>
                        <input className="form-control" type="date" name="date_of_birth" id="date_of_birth" />
                      </div>
                      <div className="col">
                        <label htmlFor="gender" className="form-label">{ state.text.careerFormGender }</label>
                        <div className="d-block">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="gender" value="1" id="men" />
                            <label className="form-check-label" htmlFor="men">{ state.text.careerFormGenderOption1 }</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="gender" value="2" id="women" />
                            <label className="form-check-label" htmlFor="women">{ state.text.careerFormGenderOption2 }</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="email" className="form-label">{ state.text.careerFormEmail }</label>
                        <input className="form-control" type="email" name="email" id="email" placeholder={ state.text.careerFormEmailPlaceholder } />
                      </div>
                      <div className="col">
                        <label htmlFor="phone" className="form-label">{ state.text.careerFormPhone }</label>
                        <input className="form-control" type="text" name="phone" id="phone" placeholder={ state.text.careerFormPhone } />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">{ state.text.careerFormAddress }</label>
                      <input className="form-control mb-3" type="text" name="address" id="street_address" placeholder={ state.text.careerFormAddressPlaceholder1 } />
                      <div className="row">
                        <div className="col">
                          <input className="form-control" type="text" name="postal_zip_code" id="postal_zip_code" placeholder={ state.text.careerFormAddressPlaceholder2 } />
                        </div>
                        <div className="col">
                          <input className="form-control" type="text" name="city" id="city" placeholder={ state.text.careerFormAddressPlaceholder3 } />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{ state.text.careerFormEducation }</legend>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="school" className="form-label">{ state.text.careerFormSchool }</label>
                      </div>
                      <div className="col">
                        <label htmlFor="when" className="form-label">{ state.text.careerFormWhen }</label>
                      </div>
                      <div className="col">
                        <label htmlFor="finished" className="form-label">{ state.text.careerFormFinished }</label>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="school[]" id="school_1" placeholder={ state.text.careerFormSchool } />
                      </div>
                      <div className="col d-md-flex">
                        <input className="form-control mb-3 me-md-2" type="text" name="whenfrom[]" id="when_form_1" placeholder={ state.text.careerFormWhenPlaceholder1 } />
                        <input className="form-control mb-3" type="text" name="whento[]" id="when_to_1" placeholder={ state.text.careerFormWhenPlaceholder2 } />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="finished[]" value="1" id="finished_1" />
                          <label className="form-check-label" htmlFor="finished_1">{ state.text.careerFormFinishedPlaceholder }</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="school[]" id="school_2" placeholder={ state.text.careerFormSchool } />
                      </div>
                      <div className="col d-md-flex">
                        <input className="form-control mb-3 me-md-2" type="text" name="whenfrom[]" id="when_form_2" placeholder={ state.text.careerFormWhenPlaceholder1 } />
                        <input className="form-control mb-3" type="text" name="whento[]" id="when_to_2" placeholder={ state.text.careerFormWhenPlaceholder2 } />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="finished[]" value="2" id="finished_2" />
                          <label className="form-check-label" htmlFor="finished_2">{ state.text.careerFormFinishedPlaceholder }</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="school[]" id="school_3" placeholder={ state.text.careerFormSchool } />
                      </div>
                      <div className="col d-md-flex">
                        <input className="form-control mb-3 me-md-2" type="text" name="whenfrom[]" id="when_form_3" placeholder={ state.text.careerFormWhenPlaceholder1 } />
                        <input className="form-control mb-3" type="text" name="whento[]" id="when_to_3" placeholder={ state.text.careerFormWhenPlaceholder2 } />
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="finished[]" value="3" id="finished_3" />
                          <label className="form-check-label" htmlFor="finished_3">{ state.text.careerFormFinishedPlaceholder }</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{ state.text.careerFormExperience }</legend>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="company" className="form-label">{ state.text.careerFormCompany }</label>
                        <input className="form-control mb-3" type="text" name="company[]" id="company" placeholder={ state.text.careerFormCompanyPlaceholder } />
                      </div>
                      <div className="col">
                        <label htmlFor="company_when" className="form-label">{ state.text.careerFormWhen }</label>
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_from[]" id="company_when_from_1" placeholder={ state.text.careerFormWhenPlaceholder1 } />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_to[]" id="company_when_to_1" placeholder={ state.text.careerFormWhenPlaceholder2 } />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="company[]" id="company" placeholder={ state.text.careerFormCompanyPlaceholder } />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_from[]" id="company_when_from_2" placeholder={ state.text.careerFormWhenPlaceholder1 } />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_to[]" id="company_when_to_2" placeholder={ state.text.careerFormWhenPlaceholder2 } />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input className="form-control mb-3" type="text" name="company[]" id="company" placeholder={ state.text.careerFormCompanyPlaceholder } />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_from[]" id="company_when_from_3" placeholder={ state.text.careerFormWhenPlaceholder1 } />
                          </div>
                          <div className="col-md-6">
                            <input className="form-control mb-3" type="text" name="company_when_to[]" id="company_when_to_3" placeholder={ state.text.careerFormWhenPlaceholder2 } />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="text-danger fw-bold">{ state.text.careerFormMotivation }</legend>
                    <div className="mb-3">
                      <textarea className="form-control mb-3" name="motivation" id="motivation" rows="3" placeholder={ state.text.careerFormMotivationPlaceholder }></textarea>
                    </div>
                  </fieldset>
                  <div className="mb-3">
                    <input className="form-control mb-3" type="file" name="attachments[]" multiple />
                    <p><i className="fas fa-paperclip me-2"></i> { state.text.careerFormAttachment }</p>
                  </div>
                  <div className="d-flex justify-content-center w-100">
                    <button type="submit" className="btn btn-black rounded-0 text-white font-weight-700 px-5">{ state.text.careerFormButton }</button>
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
