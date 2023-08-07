import '../../App.css'
import { StyledSection, Container, StyledFoot, StyledFootLeft, StyledAnchor, StyledImg, InfoContainer, Info, DesctopFoot } from './CatBallTech.styled'
import CatImg from '../../assets/catBallPage/secondCat.png'
import FootRight from '../../assets/catBallPage/foot-print1.png'
import FootLeft from '../../assets/catBallPage/foot-print2.png'
import FootDecstop from '../../assets/catBallPage/foot-print1.png'
const CatBallTech = () => {
    return (
        <StyledSection className="section">
            <Container className="container">
                <StyledFoot src={FootRight} alt="Лапки" />
                <StyledFootLeft src={FootLeft} alt="Лапки" />
                <DesctopFoot src={FootDecstop} alt="Лапки" />
                <StyledImg src={CatImg} alt="Кіт грає в м'яч" />
                <InfoContainer>
                    <Info>Використовує передові інтелектуальні технології та вбудований датчик,
                        який реагує на рухи вашого улюбленця, стимулюючи гратися, стрибати та полювати,
                        забезпечуючи безкінечні години розваг.</Info>
                    <StyledAnchor href="">Замовити товар</StyledAnchor>
                </InfoContainer>
            </Container>
        </StyledSection>
    )
}
export default CatBallTech