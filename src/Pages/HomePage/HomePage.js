
import { Col, Container, Row } from 'react-bootstrap'
import AboutSection from '../../Components/HomePageComponents/AboutSection/AboutSection'
import ChefSection from '../../Components/HomePageComponents/ChefSection/ChefSection'
import ContactUsSection from '../../Components/HomePageComponents/ContactUsSection/ContactUsSection'
import EventSection from '../../Components/HomePageComponents/EventSection/EventSection'
import GalleySection from '../../Components/HomePageComponents/GallerySection/GalleySection'
import HeroSection from '../../Components/HomePageComponents/HeroSection/HeroSection'
import MenuSection from '../../Components/HomePageComponents/MenuSection/MenuSection'
import MyFooter from '../../Components/HomePageComponents/MyFooter/MyFooter'
import MyNavBar from '../../Components/HomePageComponents/MyNavBar/MyNavBar'
import SpecialSection from '../../Components/HomePageComponents/SpecialSection/SpecialSection'
import WhyUs from '../../Components/HomePageComponents/WhyUsSection/WhyUs'
import './HomePage.css'
function HomePage(){
    return(
        <>
        <div className="section1" id='action1'>
            <MyNavBar />
            <div className="bodySection1 w-100 h-100 d-flex align-items-center justify-content-center">
            <HeroSection />
            </div>
        </div>

        <div className="section2" id="action2">
            <AboutSection />
        </div>

        <div className="section3  py-5" >
            <Container>
            <span className='text-light  opacity-50'>WHY US</span>
            <h1 className='mainColor pb-5'>Why Choose Our Restaurant</h1>
            <Row className='row-cols-1 row-cols-md-3'>
                <Col>
                <WhyUs title='Lorem Ipsum' number='01' description='Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat' />
                </Col>
                <Col>
                <WhyUs title='Repellat Nihil' number='02' description='Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest' />
                </Col>
                <Col>
                <WhyUs title='Ad ad velit qui' number='03' description='Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis' />
                </Col>
            </Row>
            </Container>
        </div>

        <div className="section4 py-5" id="action3">
            <Container>
            <span className='text-light  opacity-50'>MENU</span>
            <h1 className='mainColor pb-5'>Check Our Tasty Menu</h1>
            <MenuSection />
            </Container>
        </div>

        <div className="section5 py-5" id="action4">
            <Container>
            <span className='text-light opacity-50'>SPECIALS</span>
            <h1 className='mainColor '>Check Our Specials</h1>
            <SpecialSection />
            </Container>
        </div>

        <div className="section6 py-5" id="action5">
            <Container>
            <span className='text-light opacity-50'>EVENTS</span>
            <h1 className='mainColor '>Organize Your Events in our Restaurant</h1>
            <EventSection />
            </Container>
        </div>

        <div className="section7 py-5" id="action6">
            <Container>
            <span className='text-light opacity-50'>CHEFS</span>
            <h1 className='mainColor '>Our Proffesional Chefs</h1>
            <ChefSection />
            </Container>
        </div>

        <div className="section8 py-5" id="action7">
            <Container>
            <span className='text-light opacity-50'>GALLERY</span>
            <h1 className='mainColor '>Some photos from Our Restaurant</h1>
             <GalleySection />
            </Container>
        </div>

        <div className="section9 py-5" id="action8">
            <Container>
            <span className='text-light opacity-50'>CONTACT</span>
            <h1 className='mainColor '>Contact Us</h1>
             <ContactUsSection />
            </Container>
        </div>

        <MyFooter />
        
        </>
    )
}
export default HomePage