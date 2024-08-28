"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';
import { validateContact } from '@/lib/actions';
import useFormValidation from '@/hooks/useFormValidation';
import ErrorMessage from './errorMessage';

export default function FormConctact() {

    const { formRef, error, handleSubmit } = useFormValidation(validateContact)

    return (
        <div className="container max-w-4xl px-4 md:px-6">
            <div className="space-y-6">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Contáctanos</h2>
                    <p className="text-muted-foreground">
                        Llena el formulario a continuación y nos pondremos en contacto contigo a la brevedad.
                    </p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" name='name' placeholder="Ingresa tu nombre" />
                            <ErrorMessage field="name" error={error} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input id="email" name='email' placeholder="Ingresa tu correo" />
                            <ErrorMessage field="email" error={error} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input id="subject" name='subject' placeholder="Ingresa el asunto" />
                        <ErrorMessage field="subject" error={error} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea id="message" name='message' placeholder="Escribe tu mensaje" className="min-h-[150px]" />
                        <ErrorMessage field="message" error={error} />
                    </div>
                    <Button type="submit" variant={'outline'} className="w-full bg-blue-900 text-gray-200 hover:text-blue-500">
                        Enviar mensaje
                    </Button>
                </form>
            </div>
            <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Información de contacto</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Dirección</h3>
                            <p>123 Calle Principal, Ciudad, País</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Horario de atención</h3>
                            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Teléfono</h3>
                            <p>+51 955 555 555</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Correo</h3>
                            <p>inbox@empresalogistic.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Ubicación</h2>
                    <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                            src="https://placehold.co/600x400"
                            alt="Mapa de ubicación"
                            className="w-full h-full object-cover"
                            width="600"
                            height="400"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}