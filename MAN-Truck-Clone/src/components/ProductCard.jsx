// Product Card Component (reusable for Products & Services section)
export const ProductCard = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageSrc} alt={altText} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <a
          href="#"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};
