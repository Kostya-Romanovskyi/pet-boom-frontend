import '../../App.css'
import { BiTennisBall } from 'react-icons/bi'
import { GiHuntingHorn } from 'react-icons/gi'
import { VscSymbolVariable } from 'react-icons/vsc'
import { MdPets } from 'react-icons/md'
import { StyledSection, StyledFootLeft, StyledFootRight, Title, List, Item } from './CatBallPros.styled'
import FootLeft from '../../assets/catBallPage/foot-print4.png'
import FootRight from '../../assets/catBallPage/foot-print1.png'

const CatBallPros = () => {
    return (
        <StyledSection className="section">
            <StyledFootLeft src={FootLeft} alt="FootLeft" />
            <StyledFootRight src={FootRight} alt="FootRight" />
            <div className='container'>
                <Title>ЧОМУ ВЛАСНИКИ КОТІВ ТА СОБАК ОБИРАЮТЬ НАШ ПРОДУКТ?</Title>
                <List>
                    <Item> <BiTennisBall style={{ width: 50, height: 50 }} /> Розважає вашого улюбленця</Item>
                    <Item><VscSymbolVariable style={{ width: 50, height: 50 }} />Декілька варіантів використання</Item>
                    <Item><GiHuntingHorn style={{ width: 50, height: 50 }} />  Підтримує спортивні заняття</Item>
                    <Item><MdPets style={{ width: 50, height: 50 }} />Імітує реальне полювання             </Item>
                </List>
            </div>
        </StyledSection>
    )
}
export default CatBallPros