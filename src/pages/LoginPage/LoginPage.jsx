import { useEffect } from "react"
import AdminForm from "../../components/AdminForm/AdminForm"
import { useNavigate } from "react-router-dom"

const LoginPage = ({ isLoggedIn, setIsLoggedIn, adminData }) => {
    const navigate = useNavigate()

    useEffect(() => {
        // const storageToken = localStorage.getItem('token')

        const jwtTokenRegExp = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
        const isValidJwtToken = jwtTokenRegExp.test(adminData);

        if (adminData) {
            setIsLoggedIn(true)
        }

        if (isLoggedIn) {
            navigate("/admin");
        }

    }, [adminData, isLoggedIn, navigate, setIsLoggedIn])


    return (

        <>
            <AdminForm isLoggedIn={isLoggedIn} />
        </>

    )

}
export default LoginPage
