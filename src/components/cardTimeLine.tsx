import Marquee from "@/components/magicui/marquee";

const Cards = [
  {
    age: "2020",
    title: "ANALIZANDO EL MERCADO DE ENTREGAS",
    description: `Tras varios años brindando un servicio como operador logístico,
            nuestra meta fue entender las verdaderas necesidades de ambas caras del proceso de entregas y envíos, tanto clientes y comercios,
            como por parte de las courier y operadores logísticos del mercado.`
  },
  {
    age: "2022",
    title: "SE LANZA UNA PLATAFORMA DE LOGÍSTICA INTEGRAL DE ÚLTIMA MILLA",
    description: `Conocedores del mercado, empezamos a conectar operadores logísticos con diferentes clientes 
            naturales y empresas con diferentes necesidades,
            para poder gestionar la mejor forma de llevar sus encargos con nuestra red de socios logísticos.`
  }
]

const CardTimeLine = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee className="[--duration:20s]" pauseOnHover>
        {Cards.map((card, index) => (
          <div key={index} className="border p-4 rounded-xl w-[400px]">
            <h1 className="text-4xl text-blue-800 dark:text-white border-b pb-2" style={{ inlineSize: 'min-content' }}>{card.age}</h1>
            <h1 className="text-blue-800 py-4">{card.title}</h1>
            <p className="text-start md:text-left">
              {card.description}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CardTimeLine;
