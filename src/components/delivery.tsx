"use client"

import useFormValidation from "@/hooks/useFormValidation"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ValidateDelivery } from "@/lib/actions"
import ErrorMessage from "./errorMessage"
import { Select } from "./ui/select"

const options = [
    { value: "express", label: "Express" },
    { value: "sameday", label: "Same Day" },
    { value: "programado", label: "Programado" },
];

const Delivery = () => {

    const { formRef, error, handleSubmit } = useFormValidation(ValidateDelivery)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link">Click Aquí</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pedido</DialogTitle>
                    <DialogDescription>Completa el siguiente formulario cons sus datos</DialogDescription>
                </DialogHeader>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4 [&>div>div]:col-span-3">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nombre
                            </Label>
                            <div>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Ingrese su nombre"
                                />
                                <ErrorMessage field="name" error={error} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Telefono
                            </Label>
                            <div>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="Ingrese su telefono"
                                />
                                <ErrorMessage field="phone" error={error} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Correo
                            </Label>
                            <div>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Ingrese su correo"
                                />
                                <ErrorMessage field="email" error={error} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="document" className="text-right">
                                DNI / RUC
                            </Label>
                            <div>
                                <Input
                                    id="document"
                                    name="document"
                                    placeholder="Ingrese su correo"
                                />
                                <ErrorMessage field="document" error={error} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="shipping" className="text-right">
                                Método de envío
                            </Label>
                            <div>
                                <Select
                                    id="shipping"
                                    name="shipping"
                                    options={options}
                                />
                                <ErrorMessage field="shipping" error={error} />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant={"outline"}
                            className="bg-blue-900 text-gray-200 hover:text-blue-500 "
                            type="submit">
                            Enviar Solicitud
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Delivery