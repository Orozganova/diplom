import './Delivery.css';
import image_delivery from "../img/delivery.jpg";


const Delivery = () => {
  return (
    <section className="Delivery">
    <div className="delivers-container container">
    <div className="delivery-option">
  <h4 className='delivery-header1'> Welcome to our Delivery Flower Shop!</h4>
  <p className='delivery-info'>At our shop, we bring the beauty of fresh flowers right to your doorstep. Whether you're celebrating a special occasion or simply want to brighten someone's day, our delivery service makes it easy to send a thoughtful gift anywhere in the city.</p>
  <h4 className='delivery-header'>Why Choose Us for Flower Delivery:</h4>
  <h4 className='delivery-header'>Fresh and Handpicked:</h4>
  <p className='delivery-info'> Our skilled florists handpick each flower to ensure freshness and quality in every bouquet. We take pride in delivering only the finest blooms to our customers.</p>
  <h4 className='delivery-header'>Convenient Ordering: </h4>
  <p className='delivery-info'> Ordering flowers for delivery is quick and easy. Simply browse our online catalog, choose your favorite arrangement, and let us take care of the rest. You can also place orders over the phone for personalized assistance.</p>
  <h4 className='delivery-header'>Same-Day Delivery</h4>
  <p className='delivery-info'>  Need flowers in a hurry? We offer same-day delivery for orders placed before our cutoff time. Surprise your loved ones with a beautiful bouquet delivered straight to their door on the same day.</p>
  <h4 className='delivery-header'>Wide Selection: </h4>
  <p className='delivery-info'>  From classic roses to exotic orchids, we offer a wide selection of floral arrangements to suit every taste and occasion. Whether you're looking for a romantic gesture or a cheerful bouquet to say "thank you," we have something for everyone. </p>
</div>
<div className="delivery-img">
<img src={image_delivery} alt="" />
    </div>
    </div>
    <div/>
    </section>
  );
};
    
   

export default Delivery;