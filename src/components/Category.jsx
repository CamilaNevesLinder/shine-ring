function Category() {
  const categorys = [
    {
      value: "prata",
      img: "public/img/ChatGPT Image 30 de jan. de 2026, 09_57_57.png",
    },
    {
      value: "ouro branco",
      img: "public/img/ChatGPT Image 30 de jan. de 2026, 09_54_23.png",
    },
    {
      value: "ouro amarelo",
      img: "public/img/ChatGPT Image 30 de jan. de 2026, 09_58_42.png",
    },
    {
      value: "ouro rose",
      img: "public/img/ChatGPT Image 30 de jan. de 2026, 09_56_46.png",
    },
  ];

  return (
    <section>
      <h2 className="mt-20 text-center text-4xl font-light tracking-widest uppercase">
        Categorias
      </h2>
      <div className="flex mt-10 justify-center gap-8">
        {categorys.map((category, index) => (
          <div
            key={index}
            className="relative w-64 overflow-hidden rounded-2xl cursor-pointer group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <h4 className="absolute bottom-4 left-0 w-full text-center uppercase tracking-widest text-black z-10 font-light">
              {category.value}
            </h4>
            <img
              src={category.img}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
