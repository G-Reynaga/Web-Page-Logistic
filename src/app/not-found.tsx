import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GiHandTruck } from "react-icons/gi";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <GiHandTruck size={100} className="text-blue-900 mb-4" />
            <h1 className="text-4xl text-blue-600 dark:text-white font-bold mb-2">Página no encontrada - 404</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Lo sentimos, la página que buscas no existe.
                Puede que haya sido movida o eliminada.
            </p>
            <Button variant="outline" className="bg-blue-900 text-white hover:bg-blue-700">
                <Link href="/" className="no-underline text-white">
                    Volver al inicio
                </Link>
            </Button>
        </div>
    )
}
