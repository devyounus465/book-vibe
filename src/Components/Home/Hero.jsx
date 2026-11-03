import heroimg from "../../assets/hero-book.png";

const Hero = () => {
  return (
    <div className="container mx-auto p-5 sm:p-8 md:p-12 lg:p-20 flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center rounded-2xl bg-[#13131380]">
      {/* Content */}
      <div className="w-full md:w-8/12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Books to freshen up your bookshelf
        </h1>

        <button className="bg-[#23BE0A] text-white px-6 py-3 mt-6 md:mt-8 rounded-lg">
          View The List
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-4/12 flex justify-center">
        <img
          src={heroimg}
          alt="Books"
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
