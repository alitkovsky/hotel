import React from 'react'

const Facilities = () => {
  return (
    <>
      <section className="container mb-32 text-center lg:text-left">
        <div className="py-12">
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
            <div className="mb-12 lg:mb-0">
              <h2 className="my-12 text-5xl font-bold leading-tight tracking-tight">
                Are you ready <br />
                <span className="text-success dark:text-success-400">for an adventure?</span>
              </h2>
            </div>
            <div className="mb-12 lg:mb-0 flex">
              <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/051.jpg" className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facilities;