import LogosMarquee from "@/components/logosMarquee";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TbClockBolt, TbStar, TbMoneybag } from "react-icons/tb";
import NumberTicker from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {

  return (
    <div className="flex flex-col gap-16">
      <div className="relative">
        <img
          className="rounded brightness-50 w-full object-cover h-[200px] md:h-[400px] hidden md:block"
          src="/Banner-Cobox.webp"
          alt="imagen"
          width={'auto'}
        />
        <div className="md:absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 md:px-0">
          <h2 className="text-gray-600 md:text-white text-xl md:text-4xl font-bold text-center animate-blurred-fade-in">
            Buscamos la <span className="text-blue-300 italic">mejor opción</span> para tus envíos
          </h2>
          <Card className="w-full md:w-3/4 rounded-3xl px-4 py-6 animate-slide-in-bottom">
            <CardHeader>
              <CardTitle className="text-blue-800 text-2xl md:text-3xl text-center md:text-left">
                ¿Cuál es tu prioridad de envío?
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row justify-between items-center gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><TbMoneybag className="text-blue-300 size-6" /> Precio</li>
                <li className="flex items-center gap-2"><TbClockBolt className="text-blue-300 size-6" /> Tiempo</li>
                <li className="flex items-center gap-2"><TbStar className="text-blue-300 size-6" /> Calidad</li>
              </ul>
              <p className="w-full md:w-[450px] text-start md:text-left">
                Todas las mejores opciones de reparto en un solo lugar, gestiona tus entregas con nosotros, cotiza ya.
              </p>
              <Button asChild variant={"outline"} className="bg-blue-900 text-gray-200 hover:text-blue-500 w-full md:w-[250px] md:text-base text-lg py-6">
                <Link href="/quote">
                  Cotiza Ahora!
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-12 justify-center items-center">
        <h1 className="text-2xl text-center md:text-left">
          ¿Cómo funciona <span className="text-blue-800">nuestro servicio</span>?
        </h1>
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-24 justify-center xl:items-center">
          <div className="flex md:flex-col gap-4 items-center md:items-start animate-fade-in delay-100">
            <img
              className="dark:bg-slate-300 p-4 rounded-lg size-28"
              src="/Imagen-Registro.webp"
              alt="Imagen registro"
              height="auto"
              width="auto"
            />
            <div className="flex items-center">
              <span className="text-6xl text-blue-800 mr-4">1</span>
              <p className="flex-1 text-center md:text-left">
                <span className="block">Realiza tu</span>
                <span className="block">registro completo.</span>
              </p>
            </div>
          </div>
          <div className="flex md:flex-col gap-4 items-center md:items-start animate-fade-in delay-200">
            <img
              className="dark:bg-slate-300 p-4 rounded-lg size-28"
              src="Imagen-Escoger.webp"
              alt="Imagen escoger"
            />
            <div className="flex items-center">
              <span className="text-6xl text-blue-800 mr-4">2</span>
              <p className="flex-1 text-center md:text-left">
                <span className="block">Selecciona el</span>
                <span className="block">mejor servicio.</span>
              </p>
            </div>
          </div>
          <div className="flex md:flex-col gap-4 items-center md:items-start animate-fade-in delay-300">
            <img
              className="dark:bg-slate-300 p-4 rounded-lg size-28"
              src="Imagen-Entrega.webp"
              alt="Imagen entrega"
            />
            <div className="flex items-center">
              <span className="text-6xl text-blue-800 mr-4">3</span>
              <p className="flex-1 text-center md:text-left">
                <span className="block">Nosotros</span>
                <span className="block">gestionamos tu envío.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center py-8" data-aos="fade-up" >
        <div className="flex-1">
          <h1 className="text-2xl text-gray-800 dark:text-blue-800 font-bold md:text-4xl mb-8 text-center md:text-left">SOMOS UNA PLATAFORMA DE LOGÍSTICA INTEGRAL</h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="animate-slide-in-left reveal space-y-4">
              <span className="font-bold">¬ Empresa</span>
              <p className="w-full md:w-[300px] text-start md:text-left text-lg md:text-2xl mb-8">
                Somos el soporte ideal para la gestión de tus entregas. Cotiza en tiempo real y obtén las mejores opciones.
              </p>
            </div>
            <div className="animate-slide-in-right reveal space-y-4">
              <span className="font-bold">¬ Servicio</span>
              <p className="w-full md:w-[300px] text-start md:text-left text-lg md:text-2xl mb-8">
                Desde pedidos individuales hasta carga masiva, tenemos el mejor proveedor para todos tus envíos.
              </p>
            </div>
          </div>
          <p className="w-full md:w-[450px] text-start md:text-left mt-6">
            Queremos simplificar la experiencia de las entregas tanto para las personas como para las empresas. Gestionamos tus preferencias y te ofrecemos la mejor opción de forma única para cada pedido.
          </p>
        </div>
        <div>
          <img src="/Imagen-Bolsas.webp" alt="Bolsas" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-16">
        <div className="">
          <h1 className="text-3xl font-bold pb-6 text-gray-800 dark:text-blue-800">Empresas históricas que confiaron en nosotros</h1>
          <p className="w-full text-lg md:w-[450px] border-b-4 pb-2 xs:mx-auto">
            Cada operador logístico en el mercado posee sus propias ventajas o beneficios,
            y poder gestionar a todos los operadores para una empresa o negocio supone un reto. Desde Empresa,
            podemos gestionar las entregas de muchas empresas a través del operador correcto según tipos de entrega.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold pb-6 text-gray-800 dark:text-blue-800">Nuestros Números</h1>
          <div className="grid md:grid-cols-2 gap-4 items-center animate-zoom-in reveal">
            <div className="text-6xl text-blue-600 dark:text-white ">
              +<NumberTicker value={12} />K
              <p className="text-sm pt-4 italic">
                <span className="block">
                  ENVÍOS
                </span>
                <span className="block">
                  REALIZADOS
                </span>
              </p>
            </div>
            <div className="text-6xl text-blue-600 dark:text-white">
              +<NumberTicker value={10} />
              <p className="text-sm pt-4 italic">
                <span className="block">
                  OPERADORES
                </span>
                <span className="block">
                  LOGÍSTICOS
                </span>  </p>
            </div >
            <div className="text-6xl text-blue-600 dark:text-white">
              +<span className="text-xl">S/</span><NumberTicker value={120} />K
              <p className="text-sm pt-4 italic">AHORRADOS</p>
            </div>
            <div className="text-6xl text-blue-600 dark:text-white">
              +<NumberTicker value={1200} />
              <p className="text-sm pt-4 italic">
                <span className="block">
                  USUARIOS
                </span>
                <span className="block">
                  DIARIOS
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <LogosMarquee />
    </div>
  );
}

export default Home;
