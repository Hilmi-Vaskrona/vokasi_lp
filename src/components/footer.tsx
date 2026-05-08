export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-blue-600/10 relative overflow-hidden">

      {/* Blur Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* LOGO & DESC */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                <img
                  src="/logos/logo_delta.png"
                  alt="logo"
                  className="w-9 h-9 object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#0F172A]">
                  DeltaKv
                </h2>

                <p className="text-sm text-blue-600 font-medium">
                  Smart Digital Platform
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Streamline your business’s financial management with our
              intuitive, scalable SaaS platform designed to help your business
              grow faster and smarter.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="group w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src="/icons/fb.png"
                  alt="facebook"
                  className="w-5 h-5 object-contain"
                />
              </a>

              <a
                href="#"
                className="group w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src="/icons/ig.png"
                  alt="instagram"
                  className="w-5 h-5 object-contain"
                />
              </a>

              <a
                href="#"
                className="group w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src="/icons/x.png"
                  alt="twitter"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-5">
              Menu Utama
            </h3>

            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Profile", "/profile"],
                ["Blog", "/blog"],
                ["Berita", "/berita"],
              ].map(([name, link], i) => (
                <li key={i}>
                  <a
                    href={link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MENU 2 */}
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-5">
              Informasi
            </h3>

            <ul className="space-y-3">
              {[
                ["Unduhan", "/unduhan"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([name, link], i) => (
                <li key={i}>
                  <a
                    href={link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LINE */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright © 2025 DeltaKv. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Privacy Policy
            </span>

            <div className="w-1 h-1 rounded-full bg-gray-300" />

            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}