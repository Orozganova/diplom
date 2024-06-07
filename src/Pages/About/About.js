import Title from '../../Components/Title/Title';
import './About.css';
import aboutImg from '../img/about.jpg'
import image_about from "../img/about2.jpg";


function About() {
  return (
    <section className="About">
      <div className="container">
        <Title>About Us</Title>
        <div className="About_in flex">
          <div className="About_img img_wrap">
            <img src={aboutImg} alt="" />
          </div>
          <div className="About_txt">
            <h3 className='About_tit'>Welcome to Pink flowers</h3>
            <p>
              
              Pink flowers-is a place where flowers become not just a gift, but a source of joy, inspiration and beauty. We are passionate flower lovers and believe that each bouquet is a unique creation capable of conveying the warmest feelings and emotions.
            </p>
            <b>Our History</b>
            <p>
     [Your Store Name] was founded by the [Founding Name] family in [founding year]. Our story began with a small shop on the street corner, where each bouquet was created with love and attention to detail. Over the years, we have grown into a respected community of flower enthusiasts striving for perfection in every bouquet.</p>
    <b>Our vision</b>
            <p>

    At [Your Store Name] we believe in the power of flowers and their ability to bring joy and comfort. We strive to be not just a store, but a place where every client feels special, where every bouquet is part of a special story.</p>
<b>Our services</b>
            <p>

            In our store you will find a wide selection of flowers and plants for every taste and for any occasion. We offer services for creating custom bouquets, arranging flower arrangements for special events, and interior decor using live plants.</p>
<b>Environmental responsibility</b>
            <p>
            We care about our planet and strive to make the world a better place, one bouquet at a time. We use sustainable materials to package our bouquets, support local flower suppliers and actively participate in environmental initiatives.
</p>
          </div>
        </div>
        <section className="Section_3">
        <div className="Cartt">
          <div className="Cart_4_content">
            <p>
              In our assortment there are clothes not only for adults, but also
              for children.
            </p>
            <p className="Indentation_for_p">
              Emphasize the individuality of your child with the help of
              sportswear.
            </p>
          </div>
          <div className="Cart_4_img">
            <img src={image_about} alt="" />
          </div>
        </div>
      </section>
        </div>
    </section>
  );
}

export default About;