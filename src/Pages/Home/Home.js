
import "./Home.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay'
import video1 from '../../Video/Video/video-3.mp4';
import video2 from '../../Video/Video/video.mp4';
import florist1 from "../img/man-florist.jpg"
import florist2 from "../img/women-florist.jpg"
import florist3 from "../img/collectiv.jpg"
import React from 'react';



function Home() {
  return (
  
    <section className="Home">
      <div className="container">
        <div className="video">
          <video height="auto" autoPlay muted>
            <source src={video1} type="video/mp4" />
          </video>

          <div className="header-text">
            <h1 className="header-title">Welcome to our store</h1>
            <p className="header-subtitle">let your lady be as tender as our flowers</p>
          </div>
        </div>
        <div className="sec2">
        <h2 className="cards-txtt">Our Team</h2>
        <div className="cards-container">
        <div className="card_1 flex">
          <div className="card">
            <img src={florist1} alt="florist" />
            <h3> Federico Bieber</h3>
            <p>Talent and passion for colors meet masculine style and creativity! Our founder and chief florist Alexey Ivanov creates real masterpieces that evoke joy and inspiration. In our assortment you will find fresh flowers, exclusive bouquets and amazing floral arrangements for any occasion.</p>
          </div>
          <div className="card">
            <img src={florist2} alt="florist" />
            <h3>Jessica Haris</h3>
            <p>Flowers are often used to express emotions and feelings. Florists can help clients choose bouquets that will convey the right mood or express support and love.</p>
          </div>
          <div className="card">
            <img src={florist3} alt=" florist" />
            <h3>Emily Walker</h3>
            <p>Women florists are able to turn ordinary bouquets into real works of art, filling them with meaning and emotions.</p>
          </div>

        </div>
        </div>
        <div className=" h-work">
          <h1 className="work2">Work progress</h1>
        </div>
        </div>
        <div className=" h-work1">
          <video height="auto" autoPlay muted>
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <section className="Section_2">
        <p>
        Our store offers you a wide selection of fresh and beautiful flowers that will be the perfect gift for any occasion or simply to create an atmosphere of warmth and comfort in your home.
        </p>
       
      </section>
      
        {/* <div className="Home_slider">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            autoplay={1000}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }} 
          >
            <SwiperSlide>
              <Link className="Home_slide" to="#">

                <img
                  src="https://i.pinimg.com/736x/e6/5f/c5/e65fc54add0a8ec858001df9734d7c12.jpg"
                  alt=""
                />
                <p className="Home_slide-txt">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ab assumenda distinctio. Ex ipsa beatae a totam
                  blanditiis repudiandae voluptas!
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="Home_slide" to="#">
                <img
                  src="https://i.pinimg.com/736x/74/5f/86/745f86fb7f98943835e0cc68ab0efc32.jpg"
                  alt=""
                />
                <p className="Home_slide-txt">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ab assumenda distinctio. Ex ipsa beatae a totam
                  blanditiis repudiandae voluptas!
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="Home_slide" to="#">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/cqoFqhjwxlqbB99b2xiGSg/689x387.jpg"
                  alt=""
                />
                <p className="Home_slide-txt">Lorem ipsum dolor sit amet.</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="Home_slide" to="#">
                <img
                  src="https://i.pinimg.com/564x/00/12/e0/0012e0902cffa50714aef73c76492937.jpg"
                  alt=""
                />
                <p className="Home_slide-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos quo fugit, placeat quaerat quod magnam.
                </p>
              </Link>
            </SwiperSlide>
          </Swiper> */}
        {/* </div> */}
      </div>
    </section>
  );
}





export default Home;
