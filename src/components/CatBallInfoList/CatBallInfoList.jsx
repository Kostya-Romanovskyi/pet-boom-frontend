import '../../App.css'
import { StyledSection, Title, List, Item, Info, FlexImg, StyledBall, StyledCat, StyledFootLeft1, StyledFootLeft2, StyledFootRight1, StyledFootRight2 } from './CatBallInfoList.styled'
import Ball from '../../assets/catBallPage/pinkBall.png'
import Cat from '../../assets/catBallPage/gingerCat.png'
import FootLeft from '../../assets/catBallPage/foot-print2.png'
import FootRight from '../../assets/catBallPage/foot-print1.png'
import { BiDumbbell } from 'react-icons/bi'
import { LuBrainCircuit } from 'react-icons/lu'
import { PiPlugsConnectedDuotone } from 'react-icons/pi'
import { GiCat } from 'react-icons/gi'


const CatBallInfoList = () => {
    return (
        <StyledSection className="section">
            <div className="container">
                <StyledFootLeft1 src={FootLeft} alt="Лапки" />
                <StyledFootLeft2 src={FootLeft} alt="Лапки" />
                <StyledFootRight1 src={FootRight} alt="Лапки" />
                <StyledFootRight2 src={FootRight} alt="Лапки" />
                <Title>Чому варто купити цю іграшку?</Title>
                <List>
                    <Item> <BiDumbbell style={{ width: '100%', height: '100%', display: 'inline-block' }} /> <Info>це чудовий спосіб забезпечити вашого вихованця фізичною активністю.
                        Іграшка автоматично рухається по непередбачуваній траєкторії, що змушує вашого вихованця активно рухатися, щоб зловити її.
                        Це допомагає підтримувати вашого вихованця у хорошій формі і запобігає ожиренню</Info></Item>
                    <Item> <LuBrainCircuit style={{ width: '100%', height: '100%' }} /> <Info>допомагає вашому вихованцеві залишатися розумово активним. Іграшка PetGravity має кілька режимів роботи,
                        які дозволяють вашому вихованцеві вчитися та розвиватися.
                        Це допомагає запобігти нудьзі та тривозі у вашого вихованця.</Info> </Item>
                    <Item> <PiPlugsConnectedDuotone style={{ width: '100%', height: '100%' }} /> <Info>чудовий спосіб зміцнити зв'язок між вами та вашим вихованцем. Коли ви граєте зі своєю кішкою чи собакою з іграшкою PetGravity,
                        ви отримуєте можливість спілкуватися з нею та проводити час разом.
                        Це допомагає створити міцніший зв'язок між вами та вашим вихованцем.</Info> </Item>
                    <Item><GiCat style={{ width: '100%', height: '100%' }} /> <Info>виготовлена з матеріалів, безпечних для тварин. Іграшка PetGravity виготовлена з високоякісних матеріалів,
                        які не становлять небезпеки для вашого вихованця.
                        Іграшка також легко миється, що спрощує догляд за нею.</Info> </Item>
                </List>
                <FlexImg>
                    <StyledBall src={Ball} alt="Рожевий М'яч" />
                    <StyledCat src={Cat} alt="Рожевий кіт дивиться на м'ячик" />
                </FlexImg>
            </div>
        </StyledSection>
    )
}
export default CatBallInfoList