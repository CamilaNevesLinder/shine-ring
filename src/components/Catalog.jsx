function Catalog() {
  return (
    <div>
      <div className="mt-20 text-center font-light text-4xl uppercase tracking-widest ">
        <h2>Escolha o metal que representa a sua história</h2>
      </div>

      <div className="flex mt-20 justify-center gap-12">
        <div
          className="shadow-[0_25px_60px_rgba(0,0,0,0.20)] px-6 py-6 rounded-2xl  transition-all duration-300 
hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]"
        >
          <img
            src="public/img/ChatGPT Image 30 de jan. de 2026, 09_54_23.png"
            alt=""
            className="h-100 w-50  cursor-pointer rounded-2xl"
          />
          <p className="uppercase font-light mt-2 tracking-widest text-center">
            Prata
          </p>
        </div>
        <div
          className="shadow-[0_25px_60px_rgba(0,0,0,0.20)]  px-6 py-6  rounded-2xl  transition-all duration-300 
hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]"
        >
          <img
            src="public/img/ChatGPT Image 30 de jan. de 2026, 09_58_42.png"
            alt=""
            className="h-100 w-50  cursor-pointer rounded-2xl"
          />
          <p className="uppercase font-light mt-2 tracking-widest text-center">
            Ouro amarelo
          </p>
        </div>
        <div
          className="shadow-[0_25px_60px_rgba(0,0,0,0.20)]  px-6 py-6 rounded-2xl transition-all duration-300 
hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)] "
        >
          <img
            src="public/img/ChatGPT Image 30 de jan. de 2026, 09_56_46.png"
            alt=""
            className="h-100 w-50 cursor-pointer rounded-2xl"
          />
          <p className="uppercase font-light mt-2 tracking-widest text-center">
            Ouro rose
          </p>
        </div>
        <div
          className="shadow-[0_25px_60px_rgba(0,0,0,0.20)]  px-6 py-6  rounded-2xl transition-all duration-300 
hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)] "
        >
          <img
            src="public/img/ChatGPT Image 30 de jan. de 2026, 09_57_57.png"
            alt=""
            className="h-100 w-50  cursor-pointer rounded-2xl"
          />
          <p className="uppercase font-light mt-2 tracking-widest text-center">
            Ouro branco
          </p>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
