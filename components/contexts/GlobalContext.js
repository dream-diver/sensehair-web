import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let initialState = {
    "loading": true,
    // "auth": {
    //   "isLogin": localStorage.getItem("login") === "true" ? true : false,
    //   "user": JSON.parse(localStorage.getItem("user")),
    //   "token": ""
    // },
    "users": [],
    "options": [],
    "messages": []
  };

  const [state, setState] = useState(initialState);
  useEffect(() => {
    let messageArray = []
    // Fetch Users
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        const data = await res.json()
        return data
      } catch (error) {
        toast.error(error.message)
        messageArray = [...messageArray, { "type": "error", "body": "Users Data Fetching Error", "desc": error.message }]
        return null
      }
    }

    const fetchOptions = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/options`)
        const data = await res.json()
        return data
      } catch (error) {
        toast.error(error.message)
        messageArray = [...messageArray, { "type": "error", "body": "Options Data Fetching Error", "desc": error.message }]
        return null
      }
    }

    const fetchServices = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`)
        const data = await res.json()
        return data
      } catch (error) {
        toast.error(error.message)
        messageArray = [...messageArray, { "type": "error", "body": "Services Data Fetching Error", "desc": error.message }]
        return null
      }
    }

    const getData = async () => {
      const usersFromServer = await fetchUsers()
      const optionsFromServer = await fetchOptions()
      const servicesFromServer = await fetchServices()
      if (usersFromServer && optionsFromServer && servicesFromServer) {
        setState(prevState => {
          return { ...prevState, "users": usersFromServer, "options": optionsFromServer, "services": servicesFromServer, "loading": false };
        })
      } else {
        setState(prevState => {
          return { ...prevState, "messages": [...messageArray] };
        })
      }
    }
    getData()
  }, [])
  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
