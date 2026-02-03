function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/img/ShineRingIMG2.jpg)" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/20"></div>

      <div className="relative z-10 flex h-full items-center">
        <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-24 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-300">
            Shine Rings
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Anéis de noivado criados para eternizar o amor
          </h1>

          <p className="text-lg md:text-xl text-gray-200 font-light">
            O brilho que acompanha a sua história.
          </p>

          <button className="mt-8 w-fit px-12 py-4 border border-white text-white uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 rounded-2xl">
            Ver coleção
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
