// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Footer Column 1 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            MAN Truck & Bus India
          </h3>
          <p className="text-sm leading-relaxed">
            Driving the future of transport with innovative and reliable
            commercial vehicles.
          </p>
        </div>
        {/* Footer Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        {/* Footer Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">
            123, Industrial Area, <br />
            Pune, Maharashtra, India <br />
            PIN: 411001 <br />
            Email: info@mantruckbus.in <br />
            Phone: +91 12345 67890
          </p>
        </div>
        {/* Footer Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              {/* Facebook Icon Placeholder */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              {/* Twitter Icon Placeholder */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c1.803 0 3.533-.64 4.908-1.802 1.375-1.162 2.37-2.735 2.883-4.516.513-1.782.434-3.663-.223-5.387-.657-1.724-1.84-3.178-3.376-4.148-1.536-.97-3.295-1.482-5.098-1.482-1.803 0-3.533.64-4.908 1.802-1.375 1.162-2.37 2.735-2.883 4.516-.513 1.782-.434 3.663.223 5.387.657 1.724 1.84 3.178 3.376 4.148 1.536.97 3.295 1.482 5.098 1.482zM18.84 6.25c.82 0 1.58.33 2.14.93.56.6.89 1.37.89 2.21 0 .84-.33 1.61-.89 2.21-.56.6-1.32.93-2.14.93-.82 0-1.58-.33-2.14-.93-.56-.6-.89-1.37-.89-2.21 0-.84.33-1.61.89-2.21.56-.6 1.32-.93 2.14-.93zM5.16 6.25c.82 0 1.58.33 2.14.93.56.6.89 1.37.89 2.21 0 .84-.33 1.61-.89 2.21-.56.6-1.32.93-2.14.93-.82 0-1.58-.33-2.14-.93-.56-.6-.89-1.37-.89-2.21 0-.84.33-1.61.89-2.21.56-.6 1.32-.93 2.14-.93zM12 21.25c-5.17 0-9.37-4.2-9.37-9.37S6.83 2.5 12 2.5s9.37 4.2 9.37 9.37-4.2 9.38-9.37 9.38z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              {/* LinkedIn Icon Placeholder */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MAN Truck & Bus India. All rights
        reserved.
      </div>
    </footer>
  );
};
