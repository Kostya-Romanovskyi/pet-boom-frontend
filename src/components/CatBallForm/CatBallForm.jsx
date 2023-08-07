import '../../App.css'
import UserForm from '../UserForm/UserForm'
import { StyledSection, Title } from './CatBallForm.styled'

const CatBallForm = () => {
    return (
        <StyledSection id='form' className='section'>
            <div className='container'>
                <Title>Зробити замовлення прямо зараз</Title>
                <UserForm />
            </div>
        </StyledSection>
    )
}
export default CatBallForm