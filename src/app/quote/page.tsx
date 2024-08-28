import FormQuote from "@/components/quote"

import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Cotizar',
};


const Quote = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">Cotiza tu envío</h1>
                    <p className="text-muted-foreground text-lg">
                        Completa el siguiente formulario y obtén una cotización rápida y precisa para tus envíos.
                    </p>
                </div>
                <FormQuote />
            </div>
        </div>
    )
}

export default Quote