import '../../App.css'
import GoodsImg from '../../assets/catBallPage/goodsList.png'
import FootLeft from '../../assets/catBallPage/foot-print3.png'
import FootRight from '../../assets/catBallPage/foot-print1.png'
import { FlexWrapp, StyledImg, InfoContainer, Info, FlexPrice, Price, Sale, FootLeftStyled, FootRightStyled, StyledLink } from './CatBallGoods.styled'

const CatBallGoods = () => {
    return (
        <section id='firstSection' className="section">
            <div className="container">
                <FootLeftStyled src={FootLeft} alt="Лапки" />
                <FootRightStyled src={FootRight} alt="Лапки" />
                <FlexWrapp>
                    <StyledImg src={GoodsImg} alt="Способи використання м'ячика" />
                    <InfoContainer>
                        <Info>PetGravity - це м&apos;ячик, що обертається, який автоматично рухається по непередбачуваній траєкторії.
                            Це змушує вашого вихованця активно рухатися, щоб упіймати його.
                            Іграшка підходить для котів та собак усіх порід.</Info>
                        <FlexPrice>
                            <StyledLink href='#form'>Замовити товар</StyledLink>
                            <Price>499 грн.</Price>
                            <Sale>799 грн.</Sale>
                        </FlexPrice>
                    </InfoContainer>
                </FlexWrapp>
            </div>
        </section>
    )
}
export default CatBallGoods