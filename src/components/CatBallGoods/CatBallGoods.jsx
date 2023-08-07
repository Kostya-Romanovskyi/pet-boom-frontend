import '../../App.css'
import GoodsImg from '../../assets/catBallPage/goodsList.png'
import FootLeft from '../../assets/catBallPage/foot-print3.png'
import FootRight from '../../assets/catBallPage/foot-print1.png'
import { FlexWrapp, StyledImg, Info, FlexPrice, Price, FootLeftStyled, FootRightStyled, StyledLink } from './CatBallGoods.styled'

const CatBallGoods = () => {
    return (
        <section id='firstSection' className="section">
            <div className="container">
                <FootLeftStyled src={FootLeft} alt="Лапки" />
                <FootRightStyled src={FootRight} alt="Лапки" />
                <FlexWrapp>
                    <StyledImg src={GoodsImg} alt="Способи використання м'ячика" />
                    <div>
                        <Info>PetGravity - це м&apos;ячик, що обертається, який автоматично рухається по непередбачуваній траєкторії.
                            Це змушує вашого вихованця активно рухатися, щоб упіймати його.
                            Іграшка підходить для котів та собак усіх порід.</Info>
                        <FlexPrice>
                            <StyledLink href='#form'>Замовити товар</StyledLink>
                            <Price>599 грн</Price>
                        </FlexPrice>
                    </div>
                </FlexWrapp>
            </div>
        </section>
    )
}
export default CatBallGoods