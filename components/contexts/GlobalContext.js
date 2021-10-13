import { createContext, useEffect, useState } from "react"
import { useRouter } from 'next/router';
import en from '../../locales/en';
import nl from '../../locales/nl';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const router = useRouter();
  const { locale } = router;
  const text = locale === 'en' ? en : nl;

  let initialState = {
    loading: true,
    text,
    locale
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const changeLanguage = (locale) => {
      const text = locale === 'en' ? en : nl;
      setState(prevState => {
        return { ...prevState, locale, text };
      })
      router.push(router.pathname, router.asPath, { locale });
    };


    const getData = () => {
      setState(prevState => {
        return { ...prevState, loading: false, changeLanguage };
      })
    }
    getData()
  }, [])
  return (
    <GlobalContext.Provider value={ [state, setState] }>
      { props.children }
    </GlobalContext.Provider>
  )
}
