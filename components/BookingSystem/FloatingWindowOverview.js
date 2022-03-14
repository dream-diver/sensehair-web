import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { BiDollarCircle, BiRightArrowAlt } from "react-icons/bi"
import { makePrice } from '../Helpers'

const FloatingWindow = ({ steps, setSteps, step, show, setShow, nextStep }) => {
  const [state] = useContext(GlobalContext)
  const [couponCode, setCouponCode] = useState('')
  const [discountPrice, setDiscountPrice] = useState(0)

  // Options
  const options = state.options
  const optionHairSize = options.find(option => option.name === "Hair Size").option
  const optionHairType = options.find(option => option.name === "Hair Type").option

  const selectedServicesId = steps.step3.value
  const selectedServices = state.services.filter(({ id }) => selectedServicesId.includes(id))
  const stylistType = steps.step3.serviceType
  const selectedServicesPrice = selectedServices.map(service => stylistType ? service.art_director_price : service.stylist_price).reduce((a, b) => a + b, 0).toFixed(2)

  const stylistId = steps.step4.value
  const stylist = stylistType ? state.stylists.artDirector.find(stylist => stylist.id === stylistId) : state.stylists.stylist.find(stylist => stylist.id === stylistId)

  const coupon = async (code) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPromocodeFromCode/${code}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  const applyCouponCode = async (e) => {
    e.preventDefault()
    const codeFromServer = await coupon(couponCode)
    if (codeFromServer.data !== undefined) {
      const discount = codeFromServer.data.discount
      setDiscountPrice(((selectedServicesPrice * discount) / 100).toFixed(2))
      setSteps({
        ...steps,
        "step7": {
          ...steps.step7,
          couponCode
        },
      })
      setCouponCode('')
    }
  }

  useEffect(() => {
    setSteps({
      ...steps,
      "step7": {
        ...steps.step7,
        value: parseFloat(selectedServicesPrice),
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="floating-window">
      <div className="floating-window-header">
        <h4 className="floating-window-heading">{ step.title }</h4>
        <button type="button" className="btn-close" aria-label="Close" onClick={ () => setShow(!show) }></button>
      </div>
      <div className="floating-window-body">
        <p className="mb-2">
          <strong>{ state.text.bookingHairSize }: </strong>{ optionHairSize[steps.step1.value].name }
        </p>
        { steps.step2.value !== -1 &&
          <p className="mb-2">
            <strong>{ state.text.bookingHairType }: </strong>{ optionHairType[steps.step2.value].name }
          </p>
        }
        <p className="mb-2">
          <strong>Stylist: </strong>
          { stylist.name }
        </p>
        <p className="mb-2">
          <strong>{ state.text.bookingDateTime }: </strong>
          { steps.step5.value.toDateString() } { steps.step5.value.toLocaleTimeString() }
        </p>
        <p className="mb-1">
          <strong>{ state.text.bookingServices }: </strong>
        </p>
        <table className="table table-striped table-light text-center mb-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{ state.text.bookingName }</th>
              <th scope="col">{ state.text.bookingDuration }</th>
              <th scope="col">{ state.text.bookingPrice }</th>
            </tr>
          </thead>
          <tbody>
            { selectedServices.map((service, index) => (
              <tr key={ index }>
                <th scope="row">
                  { index + 1 }
                </th>
                <td>
                  { service.name }
                </td>
                <td>
                  { service.duration } { state.text.bookingMinutes }
                </td>
                <td>
                  { makePrice(stylistType ? service.art_director_price : service.stylist_price) }
                </td>
              </tr>
            )) }
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan="3">{ state.text.bookingTotalPrice }</th>
              <th scope="row">{ makePrice(selectedServicesPrice) }</th>
            </tr>
            { discountPrice !== 0 &&
              <tr>
                <th scope="row" colSpan="3">{ state.text.bookingDiscountPrice }</th>
                <th scope="row">s{ makePrice(discountPrice) }</th>
              </tr>
            }
          </tfoot>
        </table>
        { discountPrice === 0 &&
          <form onSubmit={ applyCouponCode }>
            <div className="mb-3">
              <label htmlFor="coupon" className="form-label fw-bold">{ state.text.bookingCouponText }</label>
              <div className="input-group">
                <input type="text" className="form-control" id="coupon" placeholder={ state.text.bookingCouponCode } value={ couponCode } onChange={ (e) => setCouponCode(e.target.value) } />
                <button className="btn btn-dark" type="submit">{ state.text.bookingApply }</button>
              </div>
            </div>
          </form>
        }

      </div>
      <div className="floating-window-footer">
        <Link href={ { pathname: "/checkout", query: { payment: 'paylater' } } }>
          <a className={ `btn-next btn btn-dark` } href="#"><BiDollarCircle className="me-1" />{ state.text.bookingPayLater }</a>
        </Link>
        <a className="btn-next btn btn-dark" onClick={ nextStep }>{ state.text.bookingNext }<BiRightArrowAlt className="ms-1" /></a>
      </div>
    </div>
  )
}

export default FloatingWindow
