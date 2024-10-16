import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu as IconMenu } from "react-icons/fi";
import { IoMdClose as IconClose } from "react-icons/io";
import { IoChevronDownOutline as IconChevronDown } from "react-icons/io5";
import { ActionIcon } from "@mantine/core";
import styles from "./Header.module.css";
import { headerNavLinks } from "@/constants";
import { cn, getTailwindColor } from "@/utils";
import { Button } from "../shared";
import HeaderDrawerMobile from "./HeaderDrawerMobile";
import useRedirect from "../../../helpers/useRedirect";
import { LOGIN_URL, REGISTER_URL } from "../../../helpers/AppPaths";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [openPopovers, setOpenPopovers] = useState<boolean[]>(
  //   new Array(headerNavLinks.length).fill(false),
  // );

  const toggleDrawerHandler = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  //
  // const handlePopoverOpen = (index: number) => {
  //   setOpenPopovers((prev) =>
  //     prev.map((open, i) => (i === index ? true : open)),
  //   );
  // };
  //
  // const handlePopoverClose = (index: number) => {
  //   setOpenPopovers((prev) =>
  //     prev.map((open, i) => (i === index ? false : open)),
  //   );
  // };

  const redirect = useRedirect();
  const navigate = useNavigate();

  // Handles in-page scroll for links containing hashes
  const handleLinkClick = (url: string) => {
    if (url.includes("#")) {
      const [path, hash] = url.split("#");
      if (path) {
        navigate(path); // Navigate to the page if needed
      }
      // Scroll to the section after navigation
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <header className="w-full flex items-center justify-between px-3 lg:px-4 h-[60px] lg:h-[80px] max-w-screen-lg gap-4">
        <Link to="/">
          <h1 className="text-3xl lg:text-4xl text-black-700 font-[800]">
            BlueEngine
          </h1>
        </Link>
        <nav className="hidden lg:flex items-center justify-center gap-10">
          {headerNavLinks.map((item: INavLinkItem, index: number) =>
            item?.url ? (
              <div
                key={index}
                className={cn("text-black-400 text-lg  cursor-pointer")}
                onClick={() => handleLinkClick(item?.url!)}
              >
                {item.title}
              </div>
            ) : (
              <div key={index} className={`relative ${styles.navLink} py-2`}>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <div className={cn("text-black-400 text-lg")}>
                    {item.title}
                  </div>
                  <IconChevronDown
                    className={`text-black-400 transition-all duration-300 ${styles.navLinkIconRotated}`}
                    size={18}
                  />
                </div>
                <div
                  style={{
                    boxShadow: "-0.5px 0px 5px 0px rgba(0,0,0,0.41)",
                  }}
                  className={`w-[260px] z-[999] hidden flex-col items-start absolute top-10 p-[10px] rounded bg-white-main left-0 bg-white gap-2 justify-start ${styles.navLinkPopover}`}
                >
                  {item.subPages?.map((page, i) =>
                    page.active ? (
                      <Link
                        key={i}
                        to={page.url}
                        className="text-base text-black-400 hover:text-blue-500 transition-all duration-300"
                      >
                        {page.title}
                      </Link>
                    ) : (
                      <div
                        key={i}
                        className="text-base text-black-400 hover:text-blue-500 transition-all duration-300"
                      >
                        {page.title}
                      </div>
                    ),
                  )}
                </div>
              </div>
            ),
          )}
        </nav>
        <div className="hidden lg:flex items-center justify-end gap-4">
          <Button
            onClick={() => redirect(LOGIN_URL)}
            variant="outline"
            color={getTailwindColor("blue", "700")}
          >
            Inloggen
          </Button>
          <Button
            onClick={() => redirect(REGISTER_URL)}
            color={getTailwindColor("blue", "700")}
          >
            Aanmelden
          </Button>
        </div>
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
