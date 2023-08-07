import '../../App.css'
import { FaArrowDown } from 'react-icons/fa';
import Logo from '../../assets/catBallPage/logo.png'

import { StyledSection, StyledLogo, BottomArr, FlexText, StyledTitle, Text } from './CatBallHero.styled'
const CatBallHero = () => {
    return (
        <StyledSection className='section'>
            <div className='container'>

                <StyledLogo src={Logo} alt="Логотип" />

                <StyledTitle>Зроби пухнастого друга щасливим</StyledTitle>
                <FlexText>
                    <Text>Веселим</Text>
                    <Text style={{ marginRight: 150 }}>Енергійним</Text>
                    <Text>Допитливий</Text>
                    <Text style={{ marginRight: 150 }}>Грайливий</Text>
                </FlexText>

                <BottomArr href="#firstSection"> Переглянути товар <br /> <FaArrowDown style={{ width: 30, height: 30 }} />  </BottomArr>

            </div>
        </StyledSection>
    )
}
export default CatBallHero