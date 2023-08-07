import '../../App.css'
import HeroImg from '../../assets/catBallPage/heroImg.png'
import FootLeftBG from '../../assets/catBallPage/foot-print3.png'
import FootRightBG from '../../assets/catBallPage/foot-print1.png'
import CatBallAnchor from '../CatBallAnchor/CatBallAnchor'
import { FaArrowDown } from 'react-icons/fa';
import Logo from '../../assets/catBallPage/logo.png'

import { StyledSection, MainContainer, StyledLogo, LeftFoot, RightFoot, BottomArr, TitleContainer, FlexContainer, StyledTitle, StyledSubTitle, StyledAnchor, StyledAnchorMob, ImgContainer, HeroStyledImg } from './CatBallHero.styled'
const CatBallHero = () => {
    return (
        <StyledSection className='section'>
            <div className='container'>
                {/* <LeftFoot src={FootLeftBG} alt="FootLeft" />
                <RightFoot src={FootRightBG} alt="FootRight" /> */}
                <StyledLogo src={Logo} alt="Логотип" />
                {/* <FlexContainer> */}
                {/* <TitleContainer> */}
                <StyledTitle>Зроби пухнастого друга щасливим</StyledTitle>
                {/* <StyledAnchor href="">Замовити товар</StyledAnchor> */}
                {/* <CatBallAnchor id='#form' /> */}
                {/* </TitleContainer> */}
                {/* <button>  sddfsdaf</button> */}
                <BottomArr href="#firstSection"> Переглянути товар <br /> <FaArrowDown />  </BottomArr>
                {/* <ImgContainer> */}
                {/* <HeroStyledImg src={HeroImg} alt="Looking cat" /> */}
                {/* <StyledAnchorMob href="">Замовити товар</StyledAnchorMob> */}

                {/* </ImgContainer> */}
                {/* </FlexContainer> */}
            </div>
        </StyledSection>
    )
}
export default CatBallHero