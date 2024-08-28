"use server"

import { z } from "zod";

// Definición de tipos para el estado
export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[]
        document?: string[]
        origin?: string[]
        destiny?: string[]
        dimensions?: string[]
        shipping?: string[]
        subject?: string[];
        message?: string[];
    };
    message?: string | null;
};

// Validación para contacto
const ContactSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().min(1, "El correo es obligatorio").email("Debe ser un correo electrónico válido"),
    subject: z.string().min(1, "El asunto es obligatorio"),
    message: z.string().min(1, "El mensaje es obligatorio"),
});

export async function validateContact(prevState: State, formData: FormData) {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campos. No se pudo enviar el mensaje.',
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    console.log('Datos válidos:', { name, email, subject, message });

    return { message: 'Mensaje enviado con éxito.' };
}

// Validacion para el subscribir
const SubscriptionSchema = z.object({
    email: z.string().min(1, "El correo es obligatorio").email("Debe ser un correo electrónico válido")
});

export async function validateSubscription(prevState: State, formData: FormData) {
    const validatedFields = SubscriptionSchema.safeParse({
        email: formData.get('email'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'El correo es inválido o está vacío.',
        };
    }

    const { email } = validatedFields.data;

    console.log('Correo válido:', email);

    // Aquí puedes manejar el envío de la suscripción (por ejemplo, enviarlo a un servicio de suscripción)

    return { message: 'Suscripción exitosa.' };
}

// Validación para cotizar
const QuoteSchema = z.object({
    origin: z.string().min(1, "El origen es obligatorio"),
    destiny: z.string().min(1, "El destino es obligatorio"),
    dimensions: z.enum(['xs', 's', 'm', 'l', 'xl'], {
        invalid_type_error: "Por favor seleccione alguna de las opciones"
    })
});

export async function validateQuote(prevState: State, formData: FormData) {
    const validatedFields = QuoteSchema.safeParse({
        origin: formData.get('origin'),
        destiny: formData.get('destiny'),
        dimensions: formData.get('dimensions') || null
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campos. No se pudo realizar la cotización.',
        };
    }

    const { origin, destiny, dimensions } = validatedFields.data;

    console.log('Datos válidos:', { origin, destiny, dimensions });

    return { message: 'Cotización válida.' };
}

// Validación para el delivery
const DeliverySchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().min(1, "El email es obligatorio"),
    document: z.string().min(1, "El documento es obligatorio"),
    phone: z.string().min(1, "El telefono es obligatorio"),
    shipping: z.enum(['express', 'sameday', 'programdo'], {
        invalid_type_error: "Por favor selecione alguna de las opciones"
    })
})

export async function ValidateDelivery(prevState: State, formData: FormData) {
    const validatedFields = DeliverySchema.safeParse({
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        document: formData.get('document'),
        shipping: formData.get('shipping') || null
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campos. No se pudo realizar el envio.',
        }
    }

    const { name, phone, email, document, shipping } = validatedFields.data;

    console.log('Datos válidos:', { name, phone, email, document, shipping });

    return { message: 'Solicitud de envío aceptada.' };
}