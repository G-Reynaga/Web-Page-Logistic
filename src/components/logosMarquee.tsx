import Image from "next/image";
import LogoRappi from "/public/Logo-Rappi.webp";
import LogoKFC from "/public/Logo-KFC.png";
import LogoMossi from "/public/Logo-Mossi.webp";
import LogoBurgerKing from "/public/Logo-Burger-King.webp";
import LogoFalabella from "/public/Logo-Falabella.png";
import LogoFarmaciasP from "/public/Logo-Farmacias-Peruanas.webp";
import LogoUber from "/public/Logo-Uber.webp";
import LogoPizzaHut from "/public/Logo-Pizza-Hut.webp";
import Marquee from "@/components/magicui/marquee";

const Rowslogos = [
    { src: LogoRappi, alt: "Logo Rappi", width: "auto", heigth: "80px" },
    { src: LogoKFC, alt: "Logo KFC", width: "auto", heigth: "80px" },
    { src: LogoMossi, alt: "Logo Mossi", width: "auto", heigth: "80px" },
    { src: LogoUber, alt: "Logo Uber", width: "auto", heigth: "80px" },
    { src: LogoBurgerKing, alt: "Logo Burger King", width: "auto", heigth: "100px" },
    { src: LogoFalabella, alt: "Logo Falabella", width: "auto", heigth: "100px" },
    { src: LogoFarmaciasP, alt: "Logo Farmacias Peruanas", width: "auto", heigth: "100px" },
    { src: LogoPizzaHut, alt: "Logo Pizza Hut", width: "auto", heigth: "100px" },
];

const firstRow = Rowslogos.slice(0, Rowslogos.length / 2);
const secondRow = Rowslogos.slice(Rowslogos.length / 2);

const LogosMarquee = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-10 ">
            <Marquee className="[--duration:20s]" pauseOnHover>
                {firstRow.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        priority={false}
                        style={{
                            height: logo.heigth,
                            width: logo.width,
                        }}
                    />
                ))}
            </Marquee>
            <Marquee className="[--duration:20s]" reverse  pauseOnHover>
                {secondRow.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        priority={false}
                        style={{
                            height: logo.heigth,
                            width: logo.width,
                        }}
                    />
                ))}
            </Marquee>
        </div>
    );
}

export default LogosMarquee;
