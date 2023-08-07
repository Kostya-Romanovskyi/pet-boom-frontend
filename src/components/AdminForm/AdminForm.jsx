import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { MainContainer, FormContainer, StyledInput, StyledLabel } from './AdminForm.styled';

const AdminForm = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const adminData = await logIn(values);
                localStorage.setItem('token', adminData.token)
                resetForm();
                navigate('/admin');
            } catch (error) {
                console.error('Login error:', error);
            }
        },
    });
    return (
        <MainContainer>
            <FormContainer onSubmit={formik.handleSubmit}>
                <StyledLabel htmlFor="email">Email Address</StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Submit</button>
            </FormContainer>
        </MainContainer>
    );
};

export default AdminForm