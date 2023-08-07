import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrdersList from "../../components/OrdersList/OrdersList";


const AdminPage = ({ isLoggedIn, setIsLoggedIn, adminData }) => {
    const navigate = useNavigate()

    useEffect(() => {

        if (adminData === false) {
            setIsLoggedIn(false);
        }

        if (isLoggedIn === false) {
            navigate("/login");
        }


    }, [adminData, isLoggedIn, navigate, setIsLoggedIn]);


    return (
        <>
            <h1>Welcome to the Admin Page!</h1>
            <OrdersList />
        </>

    );
};

export default AdminPage;