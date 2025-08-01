import { ProductCard } from "./ProductCard";

// Products & Services Section Component
export const ProductsServices = () => {
  const products = [
    {
      image: "https://placehold.co/600x400/D1D5DB/4B5563?text=Trucks",
      alt: "Trucks",
      title: "Trucks",
      description:
        "Robust and efficient trucks designed for various applications, ensuring reliability and performance.",
    },
    {
      image: "https://placehold.co/600x400/D1D5DB/4B5563?text=Buses",
      alt: "Buses",
      title: "Buses",
      description:
        "Comfortable and safe buses for public transport and tourism, built for durability and passenger satisfaction.",
    },
    {
      image: "https://placehold.co/600x400/D1D5DB/4B5563?text=Services",
      alt: "Services",
      title: "Services & Parts",
      description:
        "Comprehensive after-sales services and genuine spare parts to keep your fleet running smoothly.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
        Our Products & Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.image}
            altText={product.alt}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};
