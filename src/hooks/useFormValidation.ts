import { useRef, useState } from 'react';
import { toast } from 'sonner';

// Define el tipo de estado de tu formulario
type FormState = {
  message?: string | null;
  errors?: { [key: string]: string[] };
};

function useFormValidation<T>(
  validate: (prevState: T, formData: FormData) => Promise<FormState>
) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ message: '', errors: {} });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result: FormState = await validate(state as unknown as T, formData);
    setState(result);

    if (result.message) {
      toast[result.errors ? 'error' : 'success'](result.message);
      setTimeout(() => setState({ message: '', errors: {} }), 3000);
      if (!result.errors) {
        formRef.current?.reset();
      }
    }
    return result
  };

  // Devuelve una función para obtener el error de un campo específico
  const error = (field: string) => {
    return state.errors?.[field]?.[0] || '';
  };

  return { formRef, error, handleSubmit };
}

export default useFormValidation;