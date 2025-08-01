// Hero Section Component
export const HeroSection = () => {
  return (
    <section
      className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://placehold.co/1920x500/003366/FFFFFF?text=MAN+Truck+%26+Bus+India')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Driving the Future of Transport
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Innovative solutions for your business needs.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Discover More
        </button>
      </div>
    </section>
  );
};
