export default function Home() {
  return (
    <div className="py-10 flex h-screen bg-no-repeat bg-cover bg-center absolute inset-0  opacity-95 bg-bannerImg ">
      <div className=" flex flex-col items-center justify-center  w-full">
        <h1 className="text-white   font-gruppo  text-5xl sm:text-8xl justify-center items-center  flex tracking-wider text-foreground animate-fade animate-once animate-ease-linear animate-normal delay-1000 ">
          CLIMATHER
        </h1>
        <div className="hidden md:block w-[50%]   text-center mx-auto text-white">
          <p>
            To envelop you in unparalleled comfort, timeless elegance, and the
            sophistication you deserve. At "climather", we believe
            luxury is a way of life—a world where every detail is thoughtfully
            curated to inspire, indulge, and captivate.
          </p>
        </div>
        <div className="mt-4 sm:mt-4">
          <a
            href="mailto:info@climather.com?subject=Meeting Request"
            target="_blank"
            rel="noopener noreferrer"
            className="text-start"
          >
            <div>
              <button
                type="button"
                className="text-white   bg-[#24292F]  font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 bg-gradient-to-r from-black-500 via-black-600 to-black-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800  shadow-md focus:shadow-black"
              >
                info@climather.com
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
