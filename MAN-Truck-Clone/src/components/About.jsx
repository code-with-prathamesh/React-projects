// About Company Section Component
export const AboutCompany = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <img
            src="https://placehold.co/800x500/A0AEC0/FFFFFF?text=Our+Company"
            alt="Company Overview"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
            About MAN Truck & Bus India
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            MAN Truck & Bus India is a leading manufacturer of commercial
            vehicles, offering a wide range of trucks and buses for various
            applications. With a strong commitment to quality, innovation, and
            customer satisfaction, we strive to provide reliable and efficient
            transport solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our state-of-the-art manufacturing facility and extensive service
            network ensure that our customers receive the best products and
            support. We are dedicated to contributing to the growth of India's
            transport sector.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
  );
};
