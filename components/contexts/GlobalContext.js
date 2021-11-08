import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
// import options.json
import optionsDb from "../../db/options.json";

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {
  let initialState = {
    "loading": true,
    "auth": {
      "isLogin": false,
      "user": null,
      "token": ""
    },
    "users": [],
    "options": [],
    "messages": []
  };

  const [state, setState] = useState(initialState);
  useEffect(() => {
    let messageArray = []
    // Fetch Users
    // const fetchUsers = async () => {
    //   try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    //     const data = await res.json()
    //     return data
    //   } catch (error) {
    //     toast.error(error.message)
    //     messageArray = [...messageArray, { "type": "error", "body": "Users Data Fetching Error", "desc": error.message }]
    //     return null
    //   }
    // }

    // read a json file from local
    const fetchOptions = () => {
      return optionsDb
    }


    // const fetchOptions = async () => {
    //   try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/options`)
    //     const data = await res.json()
    //     return data
    //   } catch (error) {
    //     toast.error(error.message)
    //     messageArray = [...messageArray, { "type": "error", "body": "Options Data Fetching Error", "desc": error.message }]
    //     return null
    //   }
    // }


    const getData = async () => {
      // const usersFromServer = await fetchUsers()
      const optionsFromServer = await fetchOptions()
      if (optionsFromServer) {
        setState(prevState => {
          return { ...prevState, "options": optionsFromServer, "loading": false };
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
