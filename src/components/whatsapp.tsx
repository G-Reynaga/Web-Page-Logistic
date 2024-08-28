"use client"

import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {

    const handleClickWhatsapp = () => {
        const phoneNumber = "51977177849";
        const message = encodeURIComponent("Hola Empresa, tengo una consulta.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, "_blank");
    }

    return (
        <div className="fixed bottom-20 right-8 md:right-20 z-10">
            <div className="relative flex items-center justify-center">
                <div
                    className="absolute inset-0 rounded-full animate-pulse scale-125 after:content-[''] after:absolute after:inset-0 after:bg-green-500 after:rounded-full after:opacity-30"
                />
                <div
                    className="absolute inset-0 rounded-full animate-pulse scale-150 after:content-[''] after:absolute after:inset-0 after:bg-green-500 after:rounded-full after:opacity-20"
                />
                <button
                    aria-label="Whatsapp"
                    className="relative size-12 overflow-hidden rounded-full bg-green-500 flex items-center justify-center"
                    onClick={handleClickWhatsapp}
                >
                    <FaWhatsapp className="text-white size-8" />
                </button>
            </div>
        </div>
    )
}

export default Whatsapp
