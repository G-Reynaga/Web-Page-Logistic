'use client'

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { validateSubscription } from "@/lib/actions"
import useFormValidation from "@/hooks/useFormValidation"
import ErrorMessage from "./errorMessage"

const Subscribe = () => {

    const { formRef, error, handleSubmit } = useFormValidation(validateSubscription)

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-2 pt-8"
        >
            <div className="w-full md:w-auto">
                <Input
                    className="w-full"
                    id="email"
                    name='email'
                    placeholder="Email"
                />
                <ErrorMessage field="email" error={error} />
            </div>
            <Button
                type="submit"
                variant={"outline"}
                className="bg-blue-900 text-gray-200 hover:text-blue-500 w-full md:w-auto"
            >
                Subscribir
            </Button>
        </form>
    )
}

export default Subscribe
