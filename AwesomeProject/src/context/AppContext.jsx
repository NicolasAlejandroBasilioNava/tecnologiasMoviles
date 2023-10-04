import { Children, createContext, useState } from "react"

const person = {
    id: 1,
    name: 'Juan',
    lastname: 'Rivera',
    age: 15,
    city: 'Morelia',
    country: 'Mexico',
    school: 'ITM',
    isActive: false,
  }

export const AppContext = createContext()

export const AppContextProvider = ({children}) =>{
    const [personState, setPersonState] = useState(person)

    const handleIsActive = () =>{
        setPersonState({
            ...personState,
            isActive: !person.isActive
        })
    }

    const values = {
        person, handleIsActive,
    }
    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

