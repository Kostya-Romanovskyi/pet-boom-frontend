import { useEffect, createContext, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import CatBallPage from "./pages/CatBallPage/CatBallPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import AdminPage from "./pages/AdminPage/AdminPage"
import { getUsersData, fetchCurrentUser, logIn } from "./API/AdminsData"
import { changeStatus } from "./API/SubmitUserData"
import './App.css'

export const AuthContext = createContext()

function App() {
    const [admin, setAdmin] = useState(null)
    const [usersData, setUsersData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const location = useLocation()

    console.log(admin)

    useEffect(() => {
        if (location.pathname === '/') {
            return
        }

        const checkData = async () => {
            const adminData = await fetchCurrentUser()
            const usersInfo = await getUsersData()
            setAdmin(adminData)
            setUsersData(usersInfo)
        }

        checkData()
    }, [location.pathname])

    return (
        <AuthContext.Provider value={{ usersData, logIn, changeStatus, isLoggedIn }}>
            <Routes>

                <Route path="/" element={<CatBallPage />} />

                <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} adminData={admin} />} />

                <Route path="/admin" element={<AdminPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} adminData={admin} />} />

            </Routes>
        </AuthContext.Provider>
    )
}

export default App
