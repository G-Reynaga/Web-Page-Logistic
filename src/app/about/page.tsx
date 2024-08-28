import CardTimeLine from "@/components/cardTimeLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Conócenos',
};

const About = () => {
  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="flex flex-col md:flex-row md:gap-x-24 gap-4 items-center">
          <div className="flex-1">
            <h1 className="text-xl text-blue-800 mb-8">CEO & FOUNDER</h1>
            <div>
              <span className="font-bold mb-4">¬ Redefiniendo la forma de hacer envíos</span>
              <p className="w-full md:w-[300px] text-start md:text-left text-lg my-8">
                Muchos canales de atención, muchas personas de contacto para tener muchos operadores,
                es la realidad de muchas empresas que deben de gestionar la mejor forma de hacer envíos con prioridades diferentes para cada uno de éstos.
              </p>
            </div>
            <p className="w-full md:w-[450px] text-start md:text-left">
              Trabajamos desde la aplicación de la tecnología para facilitar este proceso en una sola plataforma que permita ayudarte a realizar envíos,
              gestionar tus entregas y visualizar tus más importantes indicadores de gestión.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400"
              alt="CEO"
              width={'auto'}
              className="rounded animate-blurred-fade-in" />
          </div>
        </div>
      </div>
      <CardTimeLine />
    </div>
  )
}

export default About