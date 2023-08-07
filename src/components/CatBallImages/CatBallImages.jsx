import '../../App.css'
import firstImg from '../../assets/catBallPage/sectionImg1.png'
import secondImg from '../../assets/catBallPage/sectionImg2.png'
import { Section, ImgContainer, FirstImage, SecondImage } from './CatBallImages.styled'

const CatBallImages = () => {
    return (
        <Section className="section">
            <ImgContainer className="container">
                <FirstImage src={firstImg} alt="Інструкція, як працює м'ячик" />
                <SecondImage src={secondImg} alt="Інструкція, як працює м'ячик" />
            </ImgContainer>
        </Section>
    )
}
export default CatBallImages