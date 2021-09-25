import { BiLockAlt, BiUser } from "react-icons/bi"

const Login = () => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label small">
          <BiUser className="me-1" />
          Username
        </label>
        <input type="text" className="form-control" id="loginEmail" placeholder="Username" />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label small">
          <BiLockAlt className="me-1" />
          Password
        </label>
        <input type="" className="form-control" id="loginPassword" placeholder="Password" />
      </div>
    </>
  )
}

export default Login
