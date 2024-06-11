import './Delivery.css';
import image_delivery from "../img/img88.png";
import React, { useState } from 'react';

const Delivery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="Delivery">
    <div className="delivers-container container">
    <div className="delivery-option1">
    <h4 className='delivery-header1'> Welcome to our Delivery Flower Shop!</h4>
    </div>
    <div className="delivery-img">
    <img src={image_delivery} alt="" />
  </div>
    <div className="delivery-option">
  <h4 className='delivery-header'>Fresh and Handpicked:</h4>
  <p className='delivery-info'> Our skilled florists handpick each flower to ensure freshness and quality in every bouquet. We take pride in delivering only the finest blooms to our customers.</p>
  <h4 className='delivery-header'>Convenient Ordering: </h4>
  <p className='delivery-info'> Ordering flowers for delivery is quick and easy. Simply browse our online catalog, choose your favorite arrangement, and let us take care of the rest. You can also place orders over the phone for personalized assistance.</p>
 </div>
     <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(0)} className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}>
              Which way to achieve the most sought after?
              </button>
              {activeIndex === 0 && (
                <div className="accordion-content">
                  <p>
                  Courier delivery is the most popular and convenient delivery method. +\- since it is quite difficult and expensive for an online store to organize its own courier service, this function can be performed by third-party courier services. - the cost is higher than that of the Post Office, delivery to a pick-up point or post office. Urgent courier delivery.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(1)} className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`}>
              Until what time can I order next day delivery?
              </button>
              {activeIndex === 1 && (
                <div className="accordion-content">
                  <p>
                  Answer: Until 19.00 - if the application is early in the morning. Until the night of the previous day - if the application is made within the next day, excluding the “Rent for the whole day” service. In the latter option – strictly until 19.00.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(2)} className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`}>
              Question: What is your form of payment for deliveries?
              </button>
              {activeIndex === 2 && (
                <div className="accordion-content">
                  <p>
                  Answer: For completed deliveries, you can pay by bank transfer, as well as in cash to the courier who carries out your deliveries.
                  It is also possible to transfer funds for completed trips to a cell phone and, by agreement, in any way convenient for you (Yandex money, qiwi, etc.)
 
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
    </section>
  );
};
    
   

export default Delivery;