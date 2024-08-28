"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { validateQuote } from "@/lib/actions"
import useFormValidation from "@/hooks/useFormValidation"
import ErrorMessage from "./errorMessage"
import Delivrey from "./delivery"
import TooltipDimensions from "./tooltipDimensions"
import { Select } from "./ui/select"

const options = [
    { value: "xs", label: "XS (Tamaño muy pequeño)" },
    { value: "s", label: "S (Tamaño pequeño)" },
    { value: "m", label: "M (Tamaño mediano)" },
    { value: "l", label: "L (Tamaño grande)" },
    { value: "xl", label: "XL (Tamaño muy grande)" },
];

const FormQuote = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const { error, handleSubmit } = useFormValidation(validateQuote)

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await handleSubmit(e);

        if (Object.keys(result.errors || {}).length === 0) {
            setIsSubmitted(true);
        }
    };

    const handleCancel = () => {
        setIsAnimatingOut(true);

        if (formRef.current) {
            formRef.current.reset();
        }

        setTimeout(() => {
            setIsSubmitted(false);
            setIsAnimatingOut(false);
        }, 600);
    };

    return (
        <div>
            <form ref={formRef} onSubmit={handleFormSubmit} className="mt-8 grid gap-6">
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="origin">Origen</Label>
                        <Input id="origin" name="origin" placeholder="Ingresa tu ubicación de origen" />
                        <ErrorMessage field="origin" error={error} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="destiny">Destino</Label>
                        <Input id="destiny" name="destiny" placeholder="Ingresa tu ubicación de destino" />
                        <ErrorMessage field="destiny" error={error} />
                    </div>
                    <div className="grid gap-2">
                        <div>
                            <Label htmlFor="dimensions">Dimensiones</Label>
                            <TooltipDimensions />
                        </div>
                        <Select
                            id="dimensions"
                            name="dimensions"
                            options={options}
                        />
                        <ErrorMessage field="dimensions" error={error} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button type="submit" variant={"outline"} className="w-full bg-blue-900 text-gray-200 hover:text-blue-500">
                        Cotizar
                    </Button>
                    <Button type="button" variant={"outline"} className="w-full" onClick={handleCancel}>
                        Cancelar
                    </Button>
                </div>
            </form>
            {isSubmitted && Object.keys(error).length === 0 && (
                <div className={`animate-zoom-in ${isAnimatingOut ? 'animate-zoom-out' : ''}`}>
                    <div className="grid md:grid-cols-3 gap-4 my-4 [&>div]:border [&>div>img]:mx-auto">
                        <div className="bg-card rounded-md p-4 space-y-2">
                            <img src="/Logo-Rappi.webp" alt="Rappi" width="80" height="auto" />
                            <h3 className="text-lg font-bold">Envío Express</h3>
                            <p className="text-muted-foreground">Entrega 37 min. aprox</p>
                            <p className="text-2xl font-bold">S/40</p>
                        </div>
                        <div className="bg-card rounded-md p-4 space-y-2">
                            <img src="/Logo-Rappi.webp" alt="Rappi" width="80" height="auto" />
                            <h3 className="text-lg font-bold">Envío Same Day</h3>
                            <p className="text-muted-foreground">Entrega de 6 a 9pm</p>
                            <p className="text-2xl font-bold">S/50</p>
                        </div>
                        <div className="bg-card rounded-md p-4 space-y-2">
                            <img src="/Logo-Rappi.webp" alt="Rappi" width="80" height="auto" />
                            <h3 className="text-lg font-bold">Envío Programado</h3>
                            <p className="text-muted-foreground">Entrega dentro las 24h</p>
                            <p className="text-2xl font-bold">S/30</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground">Las opciones son referenciales si quiere solicitar un envio haz <span><Delivrey /></span></p>
                </div>
            )}
        </div>
    )
}

export default FormQuote