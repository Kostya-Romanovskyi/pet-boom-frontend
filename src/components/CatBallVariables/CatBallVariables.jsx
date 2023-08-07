import '../../App.css'
import FirstCat from '../../assets/catBallPage/firstCat.png'
import FootLeft from '../../assets/catBallPage/foot-print4.png'
import FootRightFirst from '../../assets/catBallPage/foot-print1.png'
import FootRightSecond from '../../assets/catBallPage/foot-transparent.png'
import { StyledSection, StyledFootLeft, FootRight1, FootRight2, Info, FlexWrapp, StyledImg, StyledAnchor } from './CatBallVariables.styled'
const CatBallVariables = () => {
    return (
        <StyledSection className="section">
            <div className="container">
                <StyledFootLeft src={FootLeft} alt="Лапки" />
                <FootRight2 src={FootRightSecond} alt="Лапки" />
                <FootRight1 src={FootRightFirst} alt="Лапки" />
                <Info>Завдяки налаштовуваним параметрам та інтерактивним режимам ви можете легко налаштувати іграшку для гри,
                    коли вас немає вдома, або активувати її для спільної гри,
                    щоб вашому пухнастому другу ніколи не було нудно.</Info>
                <FlexWrapp>
                    <StyledImg src={FirstCat} alt="Кіт грає з м'ячиком" />
                    <StyledAnchor href="">Замовити товар</StyledAnchor>
                </FlexWrapp>
            </div>
        </StyledSection>
    )
}
export default CatBallVariables