import { createContext } from "react"

export const AdminContext = createContext()

const Context = () => {
    return <AdminContext.Provider></AdminContext.Provider>
}
export default Context