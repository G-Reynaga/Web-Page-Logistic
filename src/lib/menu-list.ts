type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
    const submenusProductos = [
        {
            href: "/commerce",
            label: "Comercio",
            active: pathname === "/commerce",
        },
        {
            href: "/currier",
            label: "Currier",
            active: pathname === "/currier",
        },
        {
            href: "/customer",
            label: "Cliente",
            active: pathname === "/customer",
        },
    ];

    const menuProductos: Menu = {
        href: "",
        label: "Productos",
        active: submenusProductos.some((submenu) =>
            pathname.includes(submenu.href)
        ),
        submenus: submenusProductos,
    };

    return [
        {
            groupLabel: "Contenido",
            menus: [
                menuProductos,
                {
                    href: "/about",
                    label: "Conócenos",
                    active: pathname.includes("/about"),
                    submenus: [],
                },
                {
                    href: "/contact",
                    label: "Contáctanos",
                    active: pathname.includes("/contact"),
                    submenus: [],
                },
                {
                    href: "/documentation",
                    label: "Documentación",
                    active: pathname.includes("/documentation"),
                    submenus: [],
                },
            ],
        },
    ];
}
