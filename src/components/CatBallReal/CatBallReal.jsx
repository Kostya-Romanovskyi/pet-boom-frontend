import '../../App.css'
import CatImg from '../../assets/catBallPage/thirdCat.png'
import Foot from '../../assets/catBallPage/foot-print1.png'
import FootLeft from '../../assets/catBallPage/foot-print2.png'
import { Info, FlexWrapp, StyledAnchor, StyledImg, FootMob, FootTab } from './CatBallReal.styled'

const CatBallReal = () => {
    return (
        <section className="section">
            <div className="container">
                <FootMob src={Foot} alt="Лапки" />
                <FootTab src={FootLeft} alt="Лапки" />
                <Info>Реалістичні рухи іграшки імітують рухи справжньої здобичі,
                    покращуючи мисливські навички вашого улюбленця та надаючи
                    захоплюючий та корисний досвід.</Info>
                <FlexWrapp>
                    <StyledImg src={CatImg} alt="Кіт грає зм'ячем" />
                    <StyledAnchor href="">Замовити товар</StyledAnchor>
                </FlexWrapp>
            </div>
        </section>
    )
}
export default CatBallReal