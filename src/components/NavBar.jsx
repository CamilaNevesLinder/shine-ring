function NavBar() {
  return (
    <div className="flex  justify-center  p-6 z-50  fixed top-0 w-full bg-white/10 backdrop-blur-sm  ">
      <div className="fixed left-5 top-5">
        <img src="public/img/icons8-cardápio-50.png" alt="" />
      </div>

      <h1 className="font-bold text-2xl  text-white ">Shine Rings</h1>

      <div className="w-13 fixed right-5 top-5">
        <img src="public/img/magnifying-glass.png" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
