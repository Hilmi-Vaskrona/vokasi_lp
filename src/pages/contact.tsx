// import { motion } from "framer-motion";

import { Mails, MapPinHouse, PhoneCall } from "lucide-react";
import { useEffect } from "react";
import * as Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      mirror: false,
    });

    setTimeout(() => {
      Aos.refreshHard();
    }, 300);
  }, []);

  return (
    <section className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative w-full h-[45vh] bg-[url('/background/bg-contact.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center gap-4 px-6">
          <span
            className="px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide"
            data-aos="fade-up"
          >
            Hubungi Kami
          </span>

          <h1
            className="md:text-7xl text-5xl text-center font-bold text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Kontak Kami
          </h1>

          <p
            className="max-w-2xl text-center text-white/80 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Kami siap membantu dan menjawab semua pertanyaan Anda dengan cepat
            dan profesional.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="w-full relative mt-20 z-20">
        <div className="w-full max-w-7xl mx-auto md:px-16 px-6">
          <div className="w-full h-full flex flex-col-reverse lg:flex-row gap-8">
            {/* FORM */}
            <div
              className="lg:w-2/3 w-full bg-white border border-gray-100 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-10 flex flex-col gap-6"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-slate-700">
                  Kirim Pesan
                </h2>

                <p className="text-gray-500 text-sm">
                  Isi form berikut dan tim kami akan segera menghubungi Anda.
                </p>
              </div>

              {/* NAME */}
              <div className="w-full flex flex-col md:flex-row gap-5">
                <div
                  className="md:w-1/2 w-full h-[70px] rounded-2xl border border-gray-200 bg-gray-50/70 px-6 flex items-center transition-all focus-within:border-blue-500 focus-within:bg-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <input
                    type="text"
                    placeholder="Nama Depan"
                    className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                </div>

                <div
                  className="md:w-1/2 w-full h-[70px] rounded-2xl border border-gray-200 bg-gray-50/70 px-6 flex items-center transition-all focus-within:border-blue-500 focus-within:bg-white"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <input
                    type="text"
                    placeholder="Nama Belakang"
                    className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="w-full h-[70px] rounded-2xl border border-gray-200 bg-gray-50/70 px-6 flex items-center transition-all focus-within:border-blue-500 focus-within:bg-white"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <input
                  type="email"
                  placeholder="Alamat Email"
                  className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                />
              </div>

              {/* MESSAGE */}
              <div
                className="w-full h-[220px] rounded-3xl border border-gray-200 bg-gray-50/70 px-6 py-5 transition-all focus-within:border-blue-500 focus-within:bg-white"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <textarea
                  placeholder="Tulis pesan Anda..."
                  className="w-full h-full bg-transparent outline-none resize-none text-slate-700 placeholder:text-slate-400"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                className="md:w-[220px] w-full h-[58px] rounded-2xl bg-blue-600 text-white font-semibold tracking-wide hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-200"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Kirim Pesan
              </button>
            </div>

            {/* SIDE CARD */}
            <div
              className="lg:w-1/3 w-full bg-gradient-to-b from-white to-blue-50 border border-gray-100 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden"
              data-aos="fade-up"
            >
              <div className="w-full h-full flex flex-col justify-between gap-10 p-8 md:p-10">
                <div className="flex flex-col gap-6">
                  <div className="w-[70px] h-[70px] rounded-2xl bg-blue-100 flex items-center justify-center">
                    <PhoneCall className="text-blue-600" size={30} />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-4xl font-bold text-slate-700 leading-tight">
                      Ayo Bergabung Bersama Kami
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      Kami membuka peluang untuk Anda yang ingin berkembang dan
                      menjadi bagian dari komunitas yang inovatif serta
                      profesional.
                    </p>
                  </div>
                </div>

                <button
                  className="w-full h-[58px] rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Gabung Sekarang
                </button>
              </div>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* PHONE */}
            <div
              className="group bg-white border border-gray-100 rounded-[28px] p-8 shadow-[0_6px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <PhoneCall size={28} className="text-blue-600" />
              </div>

              <h4 className="text-2xl font-bold text-slate-700 mb-3">
                Telepon
              </h4>

              <p className="text-blue-600 font-semibold mb-4">
                +62 812-9342-3248
              </p>

              <p className="text-gray-500 leading-relaxed">
                Hubungi kami kapan saja untuk mendapatkan informasi lebih lanjut
                mengenai layanan kami.
              </p>
            </div>

            {/* EMAIL */}
            <div
              className="group bg-white border border-gray-100 rounded-[28px] p-8 shadow-[0_6px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Mails size={28} className="text-blue-600" />
              </div>

              <h4 className="text-2xl font-bold text-slate-700 mb-3">
                Email
              </h4>

              <p className="text-blue-600 font-semibold mb-4">
                DeltaKv@delta-kv.com
              </p>

              <p className="text-gray-500 leading-relaxed">
                Kirim pesan melalui email dan tim kami akan merespons dengan
                cepat dan ramah.
              </p>
            </div>

            {/* ADDRESS */}
            <div
              className="group bg-white border border-gray-100 rounded-[28px] p-8 shadow-[0_6px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <MapPinHouse size={28} className="text-blue-600" />
              </div>

              <h4 className="text-2xl font-bold text-slate-700 mb-3">
                Lokasi
              </h4>

              <p className="text-blue-600 font-semibold mb-4">
                Jonggol, Bogor
              </p>

              <p className="text-gray-500 leading-relaxed">
                Datang langsung ke lokasi kami untuk konsultasi dan kerja sama
                lebih lanjut.
              </p>
            </div>
          </div>

          {/* MAP */}
          <div
            className="w-full h-[65vh] rounded-[36px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] mt-12 mb-16"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63429.320564851696!2d107.00274204916234!3d-6.47950050421234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bc0d7468736b%3A0x401576d14fed560!2sJonggol%2C%20Kec.%20Jonggol%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1764084071528!5m2!1sid!2sid"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;