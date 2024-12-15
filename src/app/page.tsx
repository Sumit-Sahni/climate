export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className=" flex flex-col items-center justify-center  w-full">
        <h1 className="text-5xl sm:text-8xl justify-center  items-center flex tracking-wider text-foreground font-cormorant animate-fade animate-once animate-ease-linear animate-normal duration-700">
          CLIMATHER
        </h1>
        <div className="mt-8 sm:mt-16">
          <a
            href="mailto:info@climather.com?subject=schedule meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-start"
          >
            <div>
              <button
                type="button"
                className="text-white bg-[#24292F]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 bg-gradient-to-r from-black-500 via-black-600 to-black-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800  shadow-md focus:shadow-black"
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
