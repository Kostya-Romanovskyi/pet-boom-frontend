import '../../App.css'
import Floore1 from '../../assets/catBallPage/floore1.png'
import Floore2 from '../../assets/catBallPage/floore2.png'
import Floore3 from '../../assets/catBallPage/floore3.png'
import Block1 from '../../assets/catBallPage/block1.png'
import Block2 from '../../assets/catBallPage/block2.png'
import Block3 from '../../assets/catBallPage/block3.png'
import Foot from '../../assets/catBallPage/foot-print1.png'
import { Section, Container, StyledImg, List, Item, Info, StyledFootLeft, StyledFootRight } from './CatBallArea.styled'


const CatBallArea = () => {
    return (
        <Section className="section">
            <Container className="container">
                <StyledFootRight src={Foot} alt="Лапки" />
                <List>
                    <Item>
                        <StyledImg src={Floore1} alt="Керамічне покриття" />
                        <Info>Керамічне покриття</Info>
                        <StyledImg style={{ marginLeft: 10 }} src={Block1} alt="Керамічне покриття" />
                    </Item>
                    <Item>
                        <StyledImg src={Floore2} alt="Килим" />
                        <Info>Килим</Info>
                        <StyledImg style={{ marginLeft: 10 }} src={Block2} alt="Керамічне покриття" />
                    </Item>
                    <Item>
                        <StyledImg src={Floore3} alt="Дерев'яна підлога" />
                        <Info>Дерев’яна підлога</Info>
                        <StyledImg style={{ marginLeft: 10 }} src={Block3} alt="Керамічне покриття" />
                    </Item>
                </List>
            </Container>
        </Section>
    )
}
export default CatBallArea