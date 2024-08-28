"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./theme-toggle-button"
import { Button } from "./ui/button"
import Buttonburger from "./buttonburger"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Comercio",
    href: "/commerce",
    description:
      "Facilitamos soluciones innovadoras para comerciantes, ofreciendo plataformas de comercio electrónico y herramientas de gestión de ventas que optimizan la experiencia del cliente y aumentan la eficiencia operativa.",
  },
  {
    title: "Currier",
    href: "/currier",
    description:
      "Nuestros servicios de mensajería garantizan entregas rápidas y seguras, con un seguimiento en tiempo real y una gestión eficiente de paquetes, asegurando la satisfacción tanto del remitente como del destinatario.",
  },
  {
    title: "Cliente",
    href: "/customer",
    description:
      "Nos enfocamos en la satisfacción del cliente, ofreciendo soporte dedicado, plataformas de autoservicio intuitivas y soluciones personalizadas para atender sus necesidades de manera eficaz y amigable.",
  }
]

export function Navbar() {

  return (
    <NavigationMenu className="sticky top-0 animate-enhance-header scroll-timeline">
      <Buttonburger />
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink>
          <img src="https://placehold.co/600x400"
            alt="Logo"
            height={'auto'}
            width={'60px'}
          />
        </NavigationMenuLink>
      </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] gap-3 p-4 md:w-[700px] md:grid-cols-3 lg:w-[950px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Conócenos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contáctanos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/documentation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentación
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="flex gap-x-4">
        <div className="md:flex hidden gap-x-4">
          <Button asChild variant={"outline"} className="bg-blue-900 text-gray-200 hover:text-blue-500">
            <Link href="/register">Regístrarse</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/login">Iniciar Sessión</Link>
          </Button>
        </div>
        <ModeToggle />
      </div>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-bold text-blue-300 mb-6 leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
