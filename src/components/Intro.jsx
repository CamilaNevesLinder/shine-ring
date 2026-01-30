function Intro() {
  const models = [
    {
      value: "Eterno",
      label: "Anel de noivado em ouro amarelo com design clássico e elegante",
      image: "public/img/ShineRing-img-intro-2.webp",
    },
    {
      value: "Essência",
      label:
        "Anel de noivado em ouro amarelo com design delicado e sofisticado",
      image: "public/img/ShineRing-img-intro-1.avif",
    },

    {
      value: "Aurora",
      label: "Anel de noivado em ouro amarelo com desing simples e minimalista",
      image: "public/img/ShineRing-img-intro-3.webp",
    },
  ];

  return (
    <section>
      <h2 className="mt-10 text-center font-light uppercase text-4xl tracking-widest ">
        Best seller
      </h2>
      <div className="grid grid-cols-3 w-200 gap-6 mx-auto max-w-5xl mt-10 ">
        {models.map((model, index) => (
          <div
            key={index}
            className="shadow-[0_25px_60px_rgba(0,0,0,0.20)] rounded-2xl p-6 "
          >
            <img src={model.image} className="h-50 w-400" />
            <h4 className="font-bold text-black mt-3 mb-3">{model.value}</h4>
            <p className="font-extralight text-black">{model.label}</p>
            <button className="mt-20  cursor-pointer transition-all  duration-300 hover:scale-105  hover:bg-black  px-10 py-4 hover:text-white  text-black  uppercase tracking-widest text-sm">
              Saber mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;
