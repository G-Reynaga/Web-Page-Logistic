import { Separator } from "@/components/ui/separator";
import { FaXTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
import Subscribe from "./subscribe";

interface SocialNetwork {
    name: string
    href: string;
    icon: React.ElementType;
    hoverClass: string
}

const redSocial: SocialNetwork[] = [
    {
        name: 'Twitter',
        href: "#",
        icon: FaXTwitter,
        hoverClass: "hover:text-black dark:hover:text-white hover:scale-110",
    },
    {
        name: 'Facebook',
        href: "#",
        icon: FaFacebook,
        hoverClass: "hover:text-blue-600 hover:scale-110",
    },
    {
        name: 'Linkedin',
        href: "#",
        icon: FaLinkedin,
        hoverClass: "hover:text-sky-400 hover:scale-110",
    },
    {
        name: 'Instagram',
        href: "#",
        icon: FaInstagram,
        hoverClass: "hover:text-pink-500 hover:scale-110",
    },
];

function Footer() {
    return (
        <div className="p-6">
            <Separator className="my-4" />
            <div className="flex md:flex-row flex-col gap-2 items-center sm:items-start space-y-4 justify-between  px-8 pb-8">
                <div className="mb-8 md:mb-0">
                    <img src="https://placehold.co/600x400"
                        alt="Logo"
                        height={'auto'}
                        width={'60px'}
                    />
                </div>
                <div className="text-center md:text-left">
                    <p className="md:w-[400px] w-full">
                        Recibe noticias de Empresa. Siempre tenemos novedades para nuestros clientes y Partners Logísticos.
                    </p>
                    <Subscribe />
                    <div>
                        <div className="flex justify-center md:justify-end gap-4 pt-14">
                            {redSocial.map((network, index) => (
                                <a
                                    key={index}
                                    href={network.href}
                                    target="_blank"
                                    aria-label={network.name}
                                    rel="noopener noreferrer"
                                    className={`text-2xl text-gray-600 transition-colors duration-300 ${network.hoverClass}`}
                                >
                                    <network.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="my-2" />
            <div className="flex flex-col md:flex-row justify-between items-center xl:px-8 pt-8 text-center md:text-left">
                <span className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Creado por <a href="" className="hover:underline">Empresa</a>. Todos los derechos reservados.
                </span>
                <span className="font-bold">
                    <a href="#" className="hover:underline">
                        Términos y Condiciones
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
