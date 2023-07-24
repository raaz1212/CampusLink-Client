const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-3xl font-bold">CampusLink</h1>
            <p className="mt-4">
              CampusLink Ltd.
              <br />
              Providing top college seats since 2012
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Services</h2>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Branding
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Company</h2>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Press kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Legal</h2>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-400">
          Copyright © 2023 - All rights reserved by CampusLink Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
