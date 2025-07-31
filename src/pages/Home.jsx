import { FaArrowRight } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="m-0">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <BookOpen className="h-8 w-8 text-blue-600" /> */}
            <span className="text-2xl font-bold text-gray-900">StudyPlan</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="btn btn-sm h-[40px] btn-ghost text-lg font-medium">
                Kirish
              </button>
            </Link>
            <Link to="/pricing">
              <button className="btn btn-sm h-[40px] font-medium bg-blue-600 hover:bg-blue-500 text-white">
                Ro'yxatdan o'tish
              </button>
            </Link>
          </div>
        </div>
      </header>

      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                       radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Talabalar uchun #1 rejalashtiruvchi
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            O'qishni
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Boshqaring
            </span>
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fanlaringiz, topshiriqlaringiz va deadline'laringizni professional
            tarzda boshqaring. Muvaffaqiyatli talaba bo'lishning eng oson yo'li.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="text-lg px-10 btn  bg-white text-gray-900 hover:bg-gray-100 rounded-xl font-semibold btn-sm h-[45px] shadow-2xl"
            >
              Bepul Boshlash <FaArrowRight />
            </Link>
            <Link to="/demo">
              <button className="text-lg px-10 btn btn-sm h-[45px] border border-white/30 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm bg-transparent font-medium hover:text-black">
                Demo ko'rish
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-16 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm">Faol talabalar</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm">Bajarilgan topshiriq</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm">Mamnunlik darajasi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nima uchun minglab talaba
              <span className="text-indigo-600"> bizni tanlaydi?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zamonaviy texnologiyalar va foydalanuvchi-friendly dizayn orqali
              o'qish jarayoningizni osonlashtiring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group  ">
              <div className="card text-center p-3 hover:shadow-2xl transition-all duration-300 border-0 bg-white group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-16 h-16 bg-gradient-to-br z-50 from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <FiBookOpen className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl mb-3 z-50">Smart Fan Boshqaruvi</h2>
                <p className="text-gray-600 leading-relaxed z-50">
                  Barcha fanlaringizni ranglar bilan ajratib, oson navigatsiya
                  qiling. Har bir fan uchun alohida statistika va progress
                  tracking.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="card p-3 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-16 h-16 bg-gradient-to-br z-50 from-green-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <FiCalendar className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl mb-3 z-50">AI-Powered Eslatmalar</h2>
                <p className="text-gray-600 leading-relaxed z-50">
                  Deadline yaqinlashganda avtomatik eslatma. Email, push
                  notification va dashboard orqali hech qachon muhim topshiriqni
                  unutmang.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="card p-3 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-16 h-16 bg-gradient-to-br z-50 from-purple-500 to-violet-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <FiBell className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl mb-3 z-50">Analytics & Insights</h2>
                <p className="text-gray-600 leading-relaxed z-50">
                  O'qish statistikangizni kuzatib boring. Qaysi fanlarda yaxshi,
                  qayerda yaxshilash kerakligini bilib oling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Narxlar</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card relative border p-5 bg-base-100 flex flex-col gap-4">
              <div className="card-header flex flex-col gap-1">
                <h2 className="text-2xl">Bepul</h2>
                <p>Boshlash uchun</p>
                <div className="text-3xl font-bold">
                  $0<span className="text-lg font-normal">/oy</span>
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />3
                    tagacha fan
                  </li>
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />
                    Cheksiz topshiriqlar
                  </li>
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />
                    Asosiy bildirishnomalar
                  </li>
                </ul>
                <Link
                  to="/dashboard"
                  className="w-full mt-6 btn bg-blue-600 hover:bg-blue-500 font-medium text-white"
                >
                  Bepul Boshlash
                </Link>
              </div>
            </div>

            <div className="card relative border-blue-500 border-2 p-5 flex flex-col gap-4">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Mashhur
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl">Premium</h2>
                <p>To'liq imkoniyatlar</p>
                <div className="text-3xl font-bold">
                  $2<span className="text-lg font-normal">/oy</span>
                </div>
              </div>
              <p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />
                    Cheksiz fanlar
                  </li>
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />
                    AI Yordamchi
                  </li>
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />
                    Kengaytirilgan statistika
                  </li>
                  <li className="flex items-center">
                    <FaRegStar className="h-5 w-5 text-green-500 mr-2" />
                    Email eslatmalar
                  </li>
                </ul>
                <button className="w-full mt-6 btn bg-blue-600 hover:bg-blue-500 text-white font-medium">
                  Premium Sotib Olish
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FiBookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">StudyPlan</span>
          </div>
          <p className="text-gray-400 mb-4">
            Talabalar uchun eng yaxshi rejalashtiruvchi
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Maxfiylik
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Shartlar
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Aloqa
            </Link>
          </div>
        </div>
      </footer>

      {/* ================ Home content ==========================
       */}

      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center px-4 py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-purple-950">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          O'qishni osonlashtiring
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl dark:text-gray-300">
          Student Planner - bu sizning o'qish jarayoningizni tashkil qilish,
          topshiriqlarni kuzatish va maqsadlaringizga erishish uchun yordam
          beradigan eng yaxshi vosita.
        </p>
        <div className="space-x-4">
          <button className=" btn  bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8">
            <Link to="/register">Boshlash</Link>
          </button>
          <button className="btn border border-blue-600 text-blue-600 px-8 bg-transparent hover:border-blue-600 hover:text-gray-900 hover:bg-slate-100 ">
            <Link to="/learn">Darslarni ko'rish</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
