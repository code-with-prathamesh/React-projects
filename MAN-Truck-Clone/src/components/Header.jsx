// Header Component

export const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50">
      <div className="flex items-center mb-4 md:mb-0">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-800 tracking-wide">
          MAN <span className="text-gray-600">Truck & Bus India</span>
        </a>
      </div>
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm font-medium uppercase">
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          About Man
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Products
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Zero Emission
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Digitalization
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Automation
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Sustainability
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Careers
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          NewsRoom
        </a>
        {/* Placeholder for search/language */}
        <div className="flex items-center ml-4">
          <svg
            className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="ml-2 text-gray-500 hover:text-blue-600 cursor-pointer">
            EN
          </span>
        </div>
      </nav>
    </header>
  );
};
