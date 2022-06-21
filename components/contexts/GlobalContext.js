import { createContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import en from '../../locales/en'
import nl from '../../locales/nl'
import optionsDb from "../../db/options.json"

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  const router = useRouter()
  const { locale } = router
  const text = locale === 'en' ? en : nl

  const initialState = {
    loading: true,
    text,
    locale,
    showBooking: false,
    auth: {
      isLogin: false,
      user: null,
      token: ""
    },
    options: [],
    stylists: [],
    services: [],
    messages: []
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    let messageArray = []

    // read a json file from local
    const fetchOptions = () => {
      return optionsDb
    }

    // Fetch Stylists
    const fetchStylists = async (userType) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users?role=${userType}&limit=all`)
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error.message)
        return null
      }
    }

    const changeLanguage = (locale) => {
      const text = locale === 'en' ? en : nl
      localStorage.setItem('locale', locale)
      setState(prevState => {
        return { ...prevState, locale, text }
      })
      const { pathname, asPath, query } = router
      router.push({ pathname, query }, asPath, { locale })
    }

    const getData = async () => {
      const artDirector = await fetchStylists("art_director ")
      const stylist = await fetchStylists("stylist")
      const optionsFromServer = await fetchOptions()
      if (optionsFromServer && stylist) {
        const stylistsFromServer = {
          artDirector: artDirector.data.map(user => user.data),
          stylist: stylist.data.map(user => user.data)
        }
        setState(prevState => {
          return {
            ...prevState, changeLanguage, options: optionsFromServer, stylists: stylistsFromServer, loading: false, auth: {
              isLogin: localStorage.getItem("login") === "true" ? true : false,
              user: JSON.parse(localStorage.getItem("user")),
              token: localStorage.getItem("token")
            }
          }
        })
      } else {
        setState(prevState => {
          return { ...prevState, changeLanguage, messages: [...messageArray] }
        })
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  )
}
