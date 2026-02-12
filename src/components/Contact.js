export default function Contact() {
  const config = {
    email: "sabarinathan14052003@gmail.com",
    phone: "+91 822029461",
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#08080f] text-white overflow-hidden"
    >
      {/* Transform Shape – Neon Circle + Orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[450px] h-[450px] rounded-full border border-cyan-400/20 blur-xl
        animate-contactSpin"></div>

      {/* Orbiting dot */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full 
        animate-contactOrbit"></div>

      {/* Soft gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,200,255,0.15),transparent_70%)]"></div>

      <div className="relative max-w-3xl mx-auto z-10 animate-contactFade">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-10">
          Contact
        </h1>

        {/* Contact Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 
          p-10 rounded-3xl shadow-2xl text-center 
          hover:-translate-y-3 hover:scale-[1.02] transition duration-500
          hover:shadow-[0_0_35px_rgba(0,255,255,0.4)]"
        >
          <p className="text-gray-300 mb-6">
            Feel free to reach out anytime. I would love to discuss projects,
            collaborations, or ideas.
          </p>

          <p className="text-xl font-semibold mb-4">
            <span className="text-cyan-300">Email:</span> {config.email}
          </p>

          <p className="text-xl font-semibold">
            <span className="text-cyan-300">Phone:</span> {config.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
