import { useFormik } from 'formik';
import { submitUserData } from '../../API/SubmitUserData';
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledInput, StyledSelect, FlexContainer, StyledRadioLabel, StyledRadio, StyledTextArea, Error, Success, ButtonContainer, StyledButton, MarginBottom, LoaderText } from './UserForm.styled';
import { useState } from 'react';
import MoonLoader from "react-spinners/MoonLoader";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const OrderSchema = Yup.object().shape({
    name: Yup.string()
        .matches("^[А-ЯЁёа-яҐЄІЇґєії /]+$", "Поля заповнюються тільки кирилицею")
        .min(2, "Ім'я може бути від двох символів")
        .max(40, "Ім'я може бути до 30-ти символів")
        .required("Поле обов`язкове для заповнювання"),
    phone: Yup.string().length(10, "Номер телефону має бути 10 цифр")
        .matches(phoneRegExp, 'Невалідний номер телефону, має бути 10 цифр')
        .required("Поле обов`язкове для заповнювання"),
    city: Yup.string()
        .min(2, "Місто може бути від двох символів")
        .max(30, "Місто може бути до 30-ти символів")
        .matches("^[А-ЯЁёа-яҐЄІЇґєії -]+$", "Невалідна назва")
        .required("Поле обов`язкове для заповнювання"),
    department: Yup.string()
        .matches("^[А-ЯЁёа-яҐЄІЇґєії0-9 /]+$", "Поля заповнюються тільки кирилицею")
        .min(1, "Відділення може бути від двох символів")
        .max(30, "Відділення може бути до 30-ти символів")
        .required("Поле обов`язкове для заповнювання"),
    paymentMethod: Yup.string().required("Поле обов`язкове для заповнювання"),
    ballColor: Yup.string().required("Поле обов`язкове для заповнювання"),
    moreInfo: Yup.string()
        .matches("^[А-ЯЁёа-яҐЄІЇґєії ]+$", "Поля заповнюються тільки кирилицею")
        .max(500, "Максимально 500 символів")
});

const UserForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            city: '',
            department: '',
            paymentMethod: '',
            ballColor: '',
            moreInfo: ''
        },
        validate: values => {
            const errors = {};

            if (!values.paymentMethod) {
                errors.paymentMethod = 'Виберіть варіант оплати';
            }

            if (!values.ballColor) {
                errors.ballColor = 'Оберіть колір зі списку';
            }

            return errors;
        },

        validationSchema: OrderSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            if (values.moreInfo === '') {
                values.moreInfo = '-'
            }

            setIsLoading(true)
            submitUserData(values).then(() => setIsLoading(false))

            resetForm()
        },
    });

    return (

        <StyledForm onSubmit={formik.handleSubmit} autoComplete='off'>
            <div>
                <StyledLabel htmlFor="name">ПІБ</StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                    <Error>{formik.errors.name}</Error>
                ) : !formik.errors.name && formik.touched.name ? <Success>Поле заповнене вірно</Success> : null}


            </div>
            <div>
                <StyledLabel htmlFor="phone">Телефон</StyledLabel>
                <StyledInput
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="0ХХХХХХХХХ"
                />
                {formik.errors.phone && formik.touched.phone ? (
                    <Error>{formik.errors.phone}</Error>
                ) : !formik.errors.phone && formik.touched.phone ? <Success>Поле заповнене вірно</Success> : null}
            </div>

            <MarginBottom>
                <StyledLabel htmlFor="city">Місто</StyledLabel>
                <StyledInput
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                />
                {formik.errors.city && formik.touched.city ? (
                    <Error>{formik.errors.city}</Error>
                ) : !formik.errors.city && formik.touched.city ? <Success>Поле заповнене вірно</Success> : null}

            </MarginBottom>
            {/* <MarginBottom>
                <StyledLabel htmlFor="address">Місто</StyledLabel>
                <StyledInput
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.errors.address && formik.touched.address ? (
                    <Error>{formik.errors.address}</Error>
                ) : !formik.errors.address && formik.touched.address ? <Success>Поле заповнене вірно</Success> : null}

            </MarginBottom> */}

            <div role="group" aria-labelledby="my-radio-group">
                <FlexContainer>
                    <StyledRadio
                        type='radio'
                        id='prepayment'
                        name="paymentMethod"
                        value='Післяоплата'
                        onChange={formik.handleChange}
                        checked={formik.values.paymentMethod === 'Післяоплата'}
                    />
                    <StyledRadioLabel htmlFor="prepayment">Нова Пошта (Післяоплата)</StyledRadioLabel>
                </FlexContainer>
                <FlexContainer>
                    <StyledRadio
                        type='radio'
                        id='postpayment'
                        name="paymentMethod"
                        value='Передоплата'
                        onChange={formik.handleChange}
                        checked={formik.values.paymentMethod === 'Передоплата'}
                    />
                    <StyledRadioLabel htmlFor="postpayment">Нова Пошта (Передоплата)</StyledRadioLabel>
                </FlexContainer>
                {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                    <Error>{formik.errors.paymentMethod}</Error>
                ) : null}
            </div>

            <MarginBottom>
                <StyledLabel htmlFor="department">Відділення №</StyledLabel>
                <StyledInput
                    id="department"
                    name="department"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.department}
                />
                {formik.errors.department && formik.touched.department ? (
                    <Error>{formik.errors.department}</Error>
                ) : !formik.errors.department && formik.touched.department ? <Success>Поле заповнене вірно</Success> : null}
            </MarginBottom>


            <MarginBottom>
                <StyledSelect
                    name="ballColor"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ballColor}
                >
                    <option value="" disabled>
                        Оберіть колір
                    </option>
                    <option value="Рожевий">Рожевий</option>
                    <option value="Зелений">Бірюзовий</option>
                </StyledSelect>

                {formik.touched.ballColor && formik.errors.ballColor ? (
                    <Error>{formik.errors.ballColor}</Error>
                ) : null}
            </MarginBottom>

            <div>
                <StyledLabel htmlFor='moreInfo'>Додаткові побажання</StyledLabel>
                <StyledTextArea id="moreInfo"
                    name="moreInfo"
                    onChange={formik.handleChange}
                    value={formik.values.moreInfo}></StyledTextArea>
                {formik.errors.moreInfo && formik.touched.moreInfo ? (
                    <div>{formik.errors.moreInfo}</div>
                ) : null}
            </div>
            {!isLoading ? <ButtonContainer>
                <StyledButton type="submit">Замовити</StyledButton>
            </ButtonContainer> :
                <ButtonContainer>
                    <MoonLoader />
                    <LoaderText>Будь-ласка, зачекайте</LoaderText>
                </ButtonContainer>}
        </StyledForm>
    );

}
export default UserForm