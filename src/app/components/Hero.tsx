'use client';

const Hero = () => {
   const videoSrc = '../assets/video.mp4';

   return (
      <>
      <section className="hero relative overflow-hidden">
         <div className="absolute t-0 l-0 w-full h-full bg-slate-800/[.6] z-20"></div>
         <video src={videoSrc} loop autoPlay muted className="absolute top-0 left-0 w-full h-full object-cover z-10"></video>
         <div className="relative z-30 px-6 pt-14 lg:px-8 w-full h-screen">

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

               <div className="hidden sm:mb-8 sm:flex sm:justify-center">
               <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-50/10 hover:ring-gray-100/20">
                  Специальные условия на сезон 2024.{' '}
                  <a href="#" className="font-semibold text-white">
                     <span className="absolute inset-0" aria-hidden="true" />
                     Оставить заявку <span aria-hidden="true">&rarr;</span>
                  </a>
               </div>
               </div>
               <div className="text-center">
               <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                  Спортивные сборы по футболу и водным видам спорта, а так же индивидуальные фитнес туры и йога ретриты
               </h1>
               <p className="mt-6 text-lg leading-8 text-white">
               Специальные предложения для спортивных школ, фитнес студий и йога инструкторов.
               </p>
               <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                     href="#"
                     className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Оставить заявку
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white">
                     Подробности <span aria-hidden="true">→</span>
                  </a>
               </div>
               </div>
            </div>
         </div>
      </section>
      </>
    )
  }

export default Hero;