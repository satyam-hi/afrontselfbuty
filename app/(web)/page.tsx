
import Link from "next/link";
import Footer from "@/app/component/web/footer";

export default function HomePage() {
  const features = [
    {
      icon: "💇",
      title: "Self Booking Kiosk",
      desc: "Clients can book beauty and salon services directly from kiosk or mobile screens.",
    },
    {
      icon: "📱",
      title: "QR Appointment Booking",
      desc: "Scan QR and book salon services instantly.",
    },
    {
      icon: "💳",
      title: "Online & Offline Payments",
      desc: "Accept UPI, cards, wallets and cash payments easily.",
    },
    {
      icon: "💄",
      title: "Salon & Spa Services",
      desc: "Manage beauty, spa, haircut, makeup and grooming services.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      desc: "Track appointments, earnings and top-selling services.",
    },
    {
      icon: "🏬",
      title: "Multi Salon Support",
      desc: "Beauty salons and spa centers can register and manage branches.",
    },
  ];

  const pricing = [
    {
      name: "Free Trial",
      price: "Free",
    },
    {
      name: "Online with Offline",
      price: "₹444/month",
    },
  ];

  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-yellow-500/20 blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div className="animate-fadeIn">

            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 mb-6 mt-4">
              Smart Beauty & Salon SaaS Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Smart Beauty & Salon
              <span className="text-orange-500"> Management System </span>
              For Salons & Spas
            </h1>

            <p className="mt-8 text-gray-300 text-xl leading-relaxed max-w-xl">
              Manage appointments, beauty services, staff, payments and salon earnings
              from one modern platform. Perfect for beauty salons, spas,
              makeup studios and grooming centers.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link href="/register-provider"> <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/30">
                Start
              </button></Link>

              <Link href="/"> <button className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-semibold text-lg">
                Live Demo
              </button></Link>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-orange-400">500+</h2>
                <p className="text-gray-400">Salons</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-400">10K+</h2>
                <p className="text-gray-400">Appointments</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-400">99.9%</h2>
                <p className="text-gray-400">Uptime</p>
              </div>

            </div>

          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative animate-float">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

              <div className="flex justify-between items-center mb-8">

                <div>
                  <p className="text-gray-400">Salon Dashboard</p>

                  <h3 className="text-2xl font-bold mt-2">
                    Royal Beauty Lounge
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  💇
                </div>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-black/30 rounded-2xl p-5">
                  <p className="text-gray-400">Appointments</p>
                  <h2 className="text-4xl font-bold mt-3">148</h2>
                </div>

                <div className="bg-black/30 rounded-2xl p-5">
                  <p className="text-gray-400">Revenue</p>
                  <h2 className="text-4xl font-bold mt-3">₹5420</h2>
                </div>

                <div className="bg-black/30 rounded-2xl p-5 col-span-2">

                  <div className="flex justify-between mb-3">
                    <span>Beauty Services</span>
                    <span>72%</span>
                  </div>

                  <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-4 w-[72%] rounded-full"></div>
                  </div>

                </div>

              </div>

              <div className="mt-6 bg-orange-500 rounded-2xl p-5 flex items-center gap-4">

                <div className="text-3xl">⚡</div>

                <div>
                  <h4 className="font-bold text-lg">
                    Live Appointment Updates
                  </h4>

                  <p className="text-sm opacity-90">
                    Staff and reception synced instantly
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold">
              Powerful Features
            </h2>

            <p className="text-gray-400 mt-6 text-xl">
              Everything needed to run modern salons & spas
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all duration-300 rounded-3xl p-8 hover:-translate-y-2"
              >

                <div className="text-5xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 px-6 bg-white/5">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold">
              How It Works
            </h2>

          </div>

          <div className="space-y-8">

            {[
              "Salon registers on the platform",
              "Add services, staff and pricing",
              "Clients book appointments from kiosk, QR or mobile",
              "Staff receives bookings instantly",
              "Payments processed online/offline",
              "Track earnings and analytics",
              "Clients can instantly view booking details and appointment status",
            ].map((step, i) => (

              <div
                key={i}
                className="flex items-center gap-6 bg-black/40 border border-white/10 rounded-3xl p-6"
              >

                <div className="min-w-[60px] h-[60px] rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold">
                  {i + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold">
              Pricing Plans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {pricing.map((plan, i) => (

              <div
                key={i}
                className={`rounded-3xl p-10 border ${
                  i === 1
                    ? "bg-orange-500 border-orange-400 scale-105"
                    : "bg-white/5 border-white/10"
                }`}
              >

                <h3 className="text-3xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-8 text-6xl font-black">
                  {plan.price}
                </div>

                <ul className="space-y-4 mt-10 text-lg">
                  <li>✔ Unlimited Appointments</li>
                  <li>✔ QR Booking</li>
                  <li>✔ Analytics Dashboard</li>
                  <li>✔ Payments</li>
                </ul>

                <Link href="/register-provider">
                  <button className="mt-10 w-full bg-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transition">
                    Choose Plan
                  </button>
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 px-6">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-[40px] p-16">

          <h2 className="text-5xl font-black leading-tight">
            Ready To Transform Your Salon Business?
          </h2>

          <p className="mt-6 text-xl text-white/90">
            Launch your smart salon management platform today.
          </p>

          <Link href="/register-provider">
            <button className="mt-10 bg-black hover:bg-gray-900 transition px-10 py-5 rounded-2xl text-xl font-bold">
              Get Started Now
            </button>
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
