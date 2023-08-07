import CatBallHero from '../../components/CatBallHero/CatBallHero'
import CatBallGoods from '../../components/CatBallGoods/CatBallGoods'
import CatBallInfoList from '../../components/CatBallInfoList/CatBallInfoList'
import CatBallImages from '../../components/CatBallImages/CatBallImages'
import CatBallArea from '../../components/CatBallArea/CatBallArea'
import CatBallPros from '../../components/CatBallPros/CatBallPros'
import CatBallVariables from '../../components/CatBallVariables/CatBallVariables'
import CatBallTech from '../../components/CatBallTech/CatBallTech'
import CatBallReal from '../../components/CatBallReal/CatBallReal'
import CatBallToy from '../../components/CatBallToy/CatBallToy'
import CatBallForm from '../../components/CatBallForm/CatBallForm'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import '../../App.css'

const CatBallPage = () => {
    return (
        <>
            <CatBallHero />
            <CatBallGoods />
            <CatBallInfoList />
            <CatBallImages />
            <CatBallArea />
            <CatBallPros />
            {/* <CatBallVariables /> */}
            {/* <CatBallTech /> */}
            {/* <CatBallReal /> */}
            {/* <CatBallToy /> */}
            <CatBallForm />
            <Footer />
            <ScrollToTop smooth className='toTop' />
        </>
    )
}
export default CatBallPage