import Feautured from '../../components/feautured/Feautured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertiList from '../../components/propertiList/PropertiList'
import './home.css'
import PropertiType from '../../components/propertiType/PropertiType'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feautured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertiList />
        <h1 className="homeTitle">Homes guests love</h1>
        <PropertiType />
        <MailList />
        <Footer />
      </div>
    </>
  )
}

export default Home