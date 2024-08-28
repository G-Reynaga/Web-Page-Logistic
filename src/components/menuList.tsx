"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible";
import { PiStarFour } from "react-icons/pi";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

interface CollapseMenuButtonProps {
    label: string;
    active: boolean;
    submenus: Submenu[];
}

export function CollapseMenuButton({
    label,
    active,
    submenus,
}: CollapseMenuButtonProps) {
    const isSubmenuActive = submenus.some((submenu) => submenu.active);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

    return (
        <Collapsible
            open={isCollapsed}
            onOpenChange={setIsCollapsed}
            className="w-full"
        >
            <CollapsibleTrigger asChild>
                <Button
                    variant={active ? "secondary" : "ghost"}
                    className="w-full justify-start h-10"
                >
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center">
                            <p className="max-w-[150px] truncate">{label}</p>
                        </div>
                        {submenus.length > 0 && (
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""
                                    }`}
                            />
                        )}
                    </div>
                </Button>
            </CollapsibleTrigger>
            {submenus.length > 0 && (
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    {submenus.map(({ href, label, active }, index) => (
                        <Button
                            key={index}
                            variant={active ? "secondary" : "ghost"}
                            className="w-full justify-start h-10 mb-1"
                            asChild
                        >
                            <Link href={href}>
                                <span className="mr-4 ml-2">
                                    <PiStarFour size={18} />
                                </span>
                                <p className="max-w-[170px] truncate">{label}</p>
                            </Link>
                        </Button>
                    ))}
                </CollapsibleContent>
            )}
        </Collapsible>
    );
}
