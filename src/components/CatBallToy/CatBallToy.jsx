import '../../App.css'
import Balls from '../../assets/catBallPage/threeBalls.png'
import CatImg from '../../assets/catBallPage/fourthCat.png'
import FootLeft from '../../assets/catBallPage/foot-print3.png'
import FootRight from '../../assets/catBallPage/foot-print4.png'
import { Section, Info, StyledLeft, StyledRight, StyledAnchor, FlexContainer, BallsStyled, CatStyled } from './CatBallToy.styled'

const CatBallToy = () => {
    return (
        <Section className="section">
            <div className="container">
                <StyledLeft src={FootLeft} alt="" />
                <StyledRight src={FootRight} alt="" />
                <Info>Ця інтерактивна іграшка стимулює природні інстинкти вашої кішки,
                    поощряючи фізичні вправи та допомагаючи зберігати здорову вагу та спосіб життя.</Info>
                <FlexContainer>
                    <div>
                        <BallsStyled src={Balls} alt="М'ячики" />
                        <StyledAnchor href="">Замовити товар</StyledAnchor>
                    </div>
                    <CatStyled src={CatImg} alt="Кіт" />
                </FlexContainer>
            </div>
        </Section>
    )
}
export default CatBallToy