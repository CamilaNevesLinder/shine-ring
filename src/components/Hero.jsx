function Hero() {
  return (
    <div
      className="relative h-screen  bg-cover bg-center"
      style={{ backgroundImage: "url(/public/img/ShineRingIMG2.jpg)" }}
    >
      {/* overlay escuro */}
      <div className="absolute inset-0 bg-black/60"> </div>

      <div className="relative z-10 flex h-full flex-col ">
        <div className=" mt-50 ml-5 flex flex-col gap-3">
          <p className="text-2xl font-extralight text-white">
            O brilho que acompanha a sua história.
          </p>
          <h3 className="font-bold text-3xl text-white">
            Anéis de noivado criados para eternizar o amor
          </h3>
          <button className=" mt-20   px-10 py-4 border border-white  text-white  uppercase tracking-widest text-sm  transition  hover:bg-white hover:text-black  ">
            Ver coleção
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
