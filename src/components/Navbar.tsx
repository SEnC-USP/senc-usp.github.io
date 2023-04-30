import { FC } from "react";
import { Button } from "./ui/button";
import { User, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-slate-200">
      {/* DESKTOP */}
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-1">
        <Link href="/">
          <Button
            size="lg"
            variant="link"
            className="text-4xl font-bold hover:text-accent"
          >
            SEnC
          </Button>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-1">
            <Link href="/programacao">
              <Button variant="link" className="hover:text-accent">
                Programação
              </Button>
            </Link>
          </li>
          <li className="p-1">
            <Link href="/patrocinadores">
              <Button variant="link" className="hover:text-accent">
                Patrocinadores
              </Button>
            </Link>
          </li>
          <li className="p-1">
            <Link href="/contato">
              <Button variant="link" className="hover:text-accent">
                Contato
              </Button>
            </Link>
          </li>
          <li className="p-1 ml-4">
            <Link href="/participante">
              <Button className="hover:text-white hover:bg-accent">
                <div className="flex w-auto items-center">
                  <User />
                  <p className="pl-4">Área do participante</p>
                </div>
              </Button>
            </Link>
          </li>
        </ul>

        {/* MOBILE */}
        <div className="block sm:hidden max-w-7xl z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent position="right" size="full">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Button
                      size="lg"
                      variant="link"
                      className="text-xl font-bold hover:text-accent"
                    >
                      SEnC
                    </Button>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="max-w-full items-center justify-center">
                <ul>
                  <li className="p-1">
                    <Link href="/programacao">
                      <Button variant="link" className="hover:text-accent">
                        Programação
                      </Button>
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link href="/patrocinadores">
                      <Button variant="link" className="hover:text-accent">
                        Patrocinadores
                      </Button>
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link href="/contato">
                      <Button variant="link" className="hover:text-accent">
                        Contato
                      </Button>
                    </Link>
                  </li>
                  <li className="p-1 ml-4">
                    <Link href="/participante">
                      <Button className="hover:text-white hover:bg-green-950">
                        <div className="flex w-auto items-center">
                          <User />
                          <p className="pl-4">Área do participante</p>
                        </div>
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
