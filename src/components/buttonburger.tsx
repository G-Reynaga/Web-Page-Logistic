import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CollapseMenuButton } from './menuList'
import { getMenuList } from '@/lib/menu-list'
import { usePathname } from "next/navigation";

const Buttonburger = () => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <div className='lg:hidden block'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size={'icon'}>
            <HiOutlineMenuAlt2 className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className='flex justify-center'>
              <img src="https://placehold.co/600x400"
                alt="Logo"
                height={'auto'}
                width={'60px'}
              />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <nav className="mt-8">
              <ul>
                {menuList.map(({ groupLabel, menus }, index) => (
                  <li key={index}>
                    {/* <p className="font-medium">{groupLabel}</p> */}
                    {menus.map((menu, menuIndex) => (
                      menu.submenus.length > 0 ? (
                        <CollapseMenuButton
                          key={menuIndex}
                          label={menu.label}
                          active={menu.active}
                          submenus={menu.submenus}
                        />
                      ) : (
                        <Button
                          key={menuIndex}
                          variant={menu.active ? "secondary" : "ghost"}
                          className="w-full justify-start h-10 mb-1"
                          asChild
                        >
                          <Link href={menu.href}>
                            <span>{menu.label}</span>
                          </Link>
                        </Button>
                      )
                    ))}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <SheetFooter className='flex md:hidden gap-2'>
            <SheetClose asChild>
              <Button variant="outline" className="bg-blue-900 text-gray-200 hover:text-blue-500">
                <Link href="/register">Regístrarse</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="outline">
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Buttonburger;
