import FormConctact from '@/components/contact';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contáctanos',
};

const Conctact = () => {

    return (
        <FormConctact />
    )
}

export default Conctact