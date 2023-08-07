import Logo from '../../assets/catBallPage/logo.png'
import { StyledFooter, Container, StyledLogo, Text } from './Footer.styled'

const Footer = () => {
    return (
        <StyledFooter>
            <Container className="container">
                <StyledLogo src={Logo} alt="Логотип компанії" />
                <Text>© 2023 Всі права захищені</Text>
                {/* <Text>063-517-70-97</Text> */}
            </Container>
        </StyledFooter>
    )
}
export default Footer