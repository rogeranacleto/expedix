import { Link } from "react-router";
import { HeaderHome } from "../../components/HeaderHome";
import bgExpedix from "../../assets/bg-expedix.png";
import { MdOutlineDashboard } from "react-icons/md";
import { FooterHome } from "../../components/FooterHome";
import { useEffect } from "react";
import { FaTools } from "react-icons/fa";
import { RiFolderCloseFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="max-w-screen w-full min-h-screen bg-[#020817]">
      <header
        className="flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <HeaderHome />
      </header>
      <section className="max-w-screen flex flex-col items-center justify-center mb-40">
        <div
          className="max-w-4xl flex flex-col items-center justify-center mt-15"
          data-aos="fade-up"
          data-aos-duration="2200"
        >
          <h2 className="text-white font-bold text-5xl mb-7 text-center">
            Controle sua expedição <br /> de forma rápida e eficiente
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Registre, acompanhe e gerencie retiradas de mercadorias em um único
            lugar. Tenha tudo <br/> organizado, visualize informações importantes e
            mantenha o histórico completo <br/> de cada operação logística.
          </p>
          <Link to={"signup"}>
            <button className="text-sm bg-[#6F5AF5] pt-4 pb-4 pl-6 pr-6 font-medium text-black cursor-pointer rounded-sm hover:scale-105 border hover:border-[#6F5AF5] hover:border-solid hover:text-[#6F5AF5 duration-300 ease-in-out">
              Começar a Utilizar
            </button>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-duration="2400" id="app">
          <img
            src={bgExpedix}
            alt="Background PrevSystem"
            className="mt-25 max-w-4xl w-full block rounded-2xl border border-solid border-[#171717] shadow-2xl"
          />
        </div>
      </section>
      <section
        className="max-w-screen flex items-center justify-center mb-40"
        id="proposal"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl">
          <div className="max-w-4xl flex items-center flex-col">
            <h2
              className="text-white text-4xl max-w-2xl text-center font-bold"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Problemas que alguns setores de expedição possuem.
            </h2>
            <p
              className="text-gray-500 mt-5 text-center leading-7"
              data-aos="fade-up"
              data-aos-duration="2800"
            >
              Sem um sistema de controle, as retiradas de mercadorias ficam
              desorganizadas e difíceis de acompanhar. O registro manual aumenta
              erros, duplicidades e dados incompletos. Consultar informações
              antigas se torna lento e trabalhoso. Além disso, é difícil
              identificar responsáveis por cada retirada, comprometendo a
              rastreabilidade e a segurança logística.
            </p>
          </div>
          <div className="flex flex-wrap mt-15 items-center justify-center gap-9">
            <div data-aos="zoom-in" data-aos-duration="2700">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#f80808] w-13 h-13 flex items-center justify-center rounded-full">
                  <MdOutlineDashboard className="text-2xl text-[#f80808]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Falta de Controle das Retiradas
                </p>
                <p className="mt-5 text-black">
                  Sem um sistema centralizado, o controle das retiradas fica
                  desorganizado, dificultando saber quem retirou mercadorias e
                  em qual momento.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2500">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#f80808] w-13 h-13 flex items-center justify-center rounded-full">
                  <FaTools className="text-2xl text-[#f80808]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Informações Inconsistentes
                </p>
                <p className="mt-5 text-black">
                  O preenchimento manual aumenta a chance de informações
                  incorretas, incompletas ou duplicadas, comprometendo a
                  confiabilidade dos dados.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2300">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#f80808] w-13 h-13 flex items-center justify-center rounded-full">
                  <FaRegCalendarCheck className="text-2xl text-[#f80808]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Dificuldade de Consulta
                </p>
                <p className="mt-5 text-black">
                  Buscar registros antigos torna-se demorado e ineficiente,
                  atrasando processos e decisões no dia a dia.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2100">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#f80808] w-13 h-13 flex items-center justify-center rounded-full">
                  <RiFolderCloseFill className="text-2xl text-[#f80808]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Falta de Rastreabilidade
                </p>
                <p className="mt-5 text-black">
                  Sem histórico organizado, é difícil identificar responsáveis
                  pelas retiradas, o que pode gerar falhas no controle e perdas
                  logísticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-screen flex items-center justify-center"
        id="proposal"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl">
          <div className="max-w-4xl flex items-center flex-col" id="about">
            <h2
              className="text-white text-4xl text-center font-bold"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Qual a solução da plataforma?
            </h2>
            <p
              className="text-gray-500 mt-5 text-center leading-7"
              data-aos="fade-up"
              data-aos-duration="2800"
            >
              O sistema centraliza todas as retiradas em um só lugar, garantindo
              organização. Os registros são padronizados, reduzindo erros e
              dados inconsistentes. A consulta é rápida e prática, agilizando
              processos. Além disso, o histórico completo permite identificar
              responsáveis e aumentar a rastreabilidade.
            </p>
          </div>
          <div className="flex flex-wrap mt-15 items-center justify-center gap-9">
            <div data-aos="zoom-in" data-aos-duration="2700">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#6F5AF5] w-13 h-13 flex items-center justify-center rounded-full">
                  <MdOutlineDashboard className="text-2xl text-[#6F5AF5]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Controle Centralizado
                </p>
                <p className="mt-5 text-black">
                  O sistema reúne todas as informações de expedição em uma única
                  plataforma, garantindo organização e fácil acompanhamento das
                  retiradas.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2500">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#6F5AF5] w-13 h-13 flex items-center justify-center rounded-full">
                  <FaTools className="text-2xl text-[#6F5AF5]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Dados Confiáveis
                </p>
                <p className="mt-5 text-black">
                  Com formulários estruturados, o sistema reduz erros de
                  preenchimento e mantém dados consistentes e precisos.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2300">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#6F5AF5] w-13 h-13 flex items-center justify-center rounded-full">
                  <FaRegCalendarCheck className="text-2xl text-[#6F5AF5]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Consulta Rápida
                </p>
                <p className="mt-5 text-black">
                  A tabela organizada permite localizar registros de forma
                  rápida, agilizando processos e tomadas de decisão.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2100">
              <div className="max-w-sm bg-white rounded-lg p-10 h-80 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                <div className="bg-white border border-solid border-[#6F5AF5] w-13 h-13 flex items-center justify-center rounded-full">
                  <RiFolderCloseFill className="text-2xl text-[#6F5AF5]" />
                </div>
                <p className="font-bold text-lg mt-5 text-black">
                  Rastreabilidade
                </p>
                <p className="mt-5 text-black">
                  O sistema mantém o histórico completo das retiradas,
                  facilitando a identificação dos responsáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHome />
    </div>
  );
}
