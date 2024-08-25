import React, { useState } from "react";
import { FiMenu as IconMenu } from "react-icons/fi";
import { IoMdClose as IconClose } from "react-icons/io";
import { ActionIcon } from "@mantine/core";
import { cn, getTailwindColor } from "@/utils";
import { Button } from "../shared";
import HeaderDrawerMobile from "./HeaderDrawerMobile";
import useRedirect from "../../../helpers/useRedirect";
import { LOGIN_URL, REGISTER_URL } from "../../../helpers/AppPaths";

const Header = () => {
  // States
  const [openDrawer, setOpenDrawer] = useState(false);

  const onRedirect = useRedirect();

  // Handler ==> Toggle Drawer
  const toggleDrawerHandler = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <>
      <header className="w-full flex items-center justify-between px-3 lg:px-4 h-[60px] lg:h-[80px] max-w-screen-lg gap-4">
        {/* Logo  */}
        <h1 className="text-3xl lg:text-4xl text-black-700 font-[800]">
          BlueEngine
        </h1>
        {/* ---------------------------------------  */}
        {/* Nav Links (Above: lg)  */}
        {/*<nav className="hidden lg:flex items-center justify-center gap-10">*/}
        {/*  {headerNavLinks.map((item: { title: string; url: string }, index: number) => (*/}
        {/*    <Link*/}
        {/*      to={item.url}*/}
        {/*      key={index}*/}
        {/*      className={cn(*/}
        {/*        'text-black-400 text-lg',*/}
        {/*        location.pathname.startsWith(item.url) ? 'text-blue-500' : ''*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      {item.title}*/}
        {/*    </Link>*/}
        {/*  ))}*/}
        {/*</nav>*/}
        {/* Auth Buttons (Above: lg) */}
        <div className="hidden lg:flex items-center justify-end gap-4">
          <Button
            onClick={() => onRedirect(LOGIN_URL)}
            variant="outline"
            color={getTailwindColor("blue", "700")}
          >
            Log In
          </Button>
          <Button
            onClick={() => onRedirect(REGISTER_URL)}
            color={getTailwindColor("blue", "700")}
          >
            Sign Up
          </Button>
        </div>
        {/* -------------------------------------------  */}
        {/* Menu Icon (Below: lg) */}
        <ActionIcon
          color={getTailwindColor("blue", "700")}
          size="lg"
          onClick={toggleDrawerHandler}
          className="lg:hidden"
        >
          {!openDrawer ? (
            <IconMenu color="white" size={22} />
          ) : (
            <IconClose color="white" size={22} />
          )}
        </ActionIcon>
      </header>

      {/* Menu Drawer (For Mobile) */}
      {openDrawer && (
        <HeaderDrawerMobile
          opened={openDrawer}
          toggleHandler={toggleDrawerHandler}
        />
      )}
    </>
  );
};

export default Header;
