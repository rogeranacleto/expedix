import { Link } from "react-router";
import logoBox from "../../assets/logo-box-expedix.png"
export function HeaderHome() {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="hidden max-w-6xl w-full lg:block md:block">
      <div className="bg-[#020817] mb-15 rounded-lg mt-8 min-h-17 flex justify-between items-center pl-7 pr-7">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logoBox} alt="Logo Expedix" className="w-8" />
          <h1 className="font-bold text-2xl text-white">Expedix</h1>
        </Link>
        <nav className="flex gap-7">
          <button
            className="text-sm hover:bg-[#6F5AF5] text-white pt-2 pb-2 pl-3 pr-3 duration-300 ease-in-out rounded-sm cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            Sobre
          </button>
          <button
            className="text-sm hover:bg-[#6F5AF5] text-white pt-2 pb-2 pl-3 pr-3 duration-300 ease-in-out rounded-sm cursor-pointer"
            onClick={() => scrollToSection("app")}
          >
            Plataforma
          </button>
          <button
            className="text-sm hover:bg-[#6F5AF5] text-white pt-2 pb-2 pl-3 pr-3 duration-300 ease-in-out rounded-sm cursor-pointer"
            onClick={() => scrollToSection("proposal")}
          >
            Proposta
          </button>
        </nav>
        <div className="flex gap-7">
          <Link to={"/login"}>
            <button className="text-sm cursor-pointer text-white hover:bg-[#c7c2c262] duration-300 ease-in-out rounded-sm pt-2 pb-2 pl-3 pr-3">
              Entrar
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="text-sm cursor-pointer bg-white hover:bg-[#6F5AF5] hover:text-white duration-300 ease-in-out rounded-sm text-black pt-2 pb-2 pl-3 pr-3">
              Acessar plataforma
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
