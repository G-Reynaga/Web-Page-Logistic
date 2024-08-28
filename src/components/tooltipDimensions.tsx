import { FaQuestionCircle } from "react-icons/fa"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { useState } from "react"

const TooltipDimensions = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <TooltipProvider>
            <Tooltip open={isOpen} onOpenChange={setIsOpen}>
                <TooltipTrigger asChild>
                    <Button
                        variant="link"
                        className="size-4 ml-1"
                        type="button"
                        size={"icon"}
                        onClick={() => setIsOpen(!isOpen)} >
                        <FaQuestionCircle />
                    </Button>
                </TooltipTrigger>
                <TooltipContent align="start" className="space-y-4">
                    <p>XS: Hasta 2 kg. Menos de 20x15x5 cm.</p>
                    <p>S: Hasta 5 kg. 20-40x15-30x5-15 cm.</p>
                    <p>M: Hasta 10 kg. 40-60x30-45x15-30 cm.</p>
                    <p>L: Hasta 20 kg. 60-80x45-60x30-45 cm.</p>
                    <p>XL: Hasta 50 kg. Más de 80x60x45 cm.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipDimensions