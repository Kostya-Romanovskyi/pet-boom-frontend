import '../../App.css'
import Area from '../../assets/catBallPage/area.png'
import { Section, Container, StyledImg, List, Item, Info, StyledFootLeft, StyledFootRight } from './CatBallArea.styled'
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'
import FootLeft from '../../assets/catBallPage/foot-print2.png'
import FootRight from '../../assets/catBallPage/foot-print4.png'

const CatBallArea = () => {
    return (
        <Section className="section">
            <Container className="container">
                <StyledFootLeft src={FootLeft} alt="Лапки" />
                <StyledFootRight src={FootRight} alt="Лапки" />
                <StyledImg src={Area} alt="На яких поверхнях можна застосовувати м'ячик" />
                <List>
                    <Item><VscDebugBreakpointDataUnverified /><Info>Килим</Info></Item>
                    <Item><VscDebugBreakpointDataUnverified /><Info>Підлога</Info></Item>
                    <Item><VscDebugBreakpointDataUnverified /><Info>Керамічне покриття</Info></Item>
                </List>
            </Container>
        </Section>
    )
}
export default CatBallArea