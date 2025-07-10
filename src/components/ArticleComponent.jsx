import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../components/css/articleComponent.css';
import { Navigation,Autoplay } from 'swiper/modules';

const ArticleComponent = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
    
        <section className='flex p-4 gap-3'>

            <div className='article-text flex flex-col justify-around flex-[70%]'>
                <h2>Робота з дітьми</h2>
                <p>
                    Ми - Громадська організація "Український центр психологічної допомоги та 
підтримки "Незламний Харків".  Головним напрямом нашої діяльності 
з початку повномасштабноговторгнення російської федераціїї в Україну 
стало надання психологічної допомоги постраждалому населенню міста 
Харкова та області, проведення  спеціалізованих психологічних тренінгів 
"Перша психологічна допомога» та «Запобігання професійному 
вигорянню» з військовими, медиками, рятувальниками, вчителями, волонтерами, 
ВПО та іншими вразливими категоріями населення.
                </p>
                <a href="#">читати</a>
            </div>
           
            <div className=' flex flex-[25%] justify-center items-center p-4'>
              
                <div className='article-image-container'>
                    <div ref={nextRef}
                    className='swiper-button-next '> </div>
                       <div ref={prevRef}
                        className='swiper-button-prev '> </div>
                   <Swiper
                    className='article-image'
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                   modules={[Navigation, Autoplay]}
                   navigation={true}
                   autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,

                   }}
                    onBeforeInit={(swiper) => {
                     swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
          }}
                    pagination={{ clickable: true }}
                >
                 <SwiperSlide>
                    <img  src="https://www.ukrainer.net/wp-content/uploads/2023/09/0-2-768x768.jpeg" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  src="https://vechirniy.kyiv.ua/uploads/2022/03/18/275763593_335091225325440_1501350487614524727_n.jpg" alt="Slide 2" />
                </SwiperSlide>
  
                </Swiper>
                </div>
           
                {/**/}

            </div>

        </section>

    </>
  )
}

export default ArticleComponent