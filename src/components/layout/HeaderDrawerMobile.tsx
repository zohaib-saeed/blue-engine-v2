import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, Accordion } from "@mantine/core";
import { cn, getTailwindColor } from "@/utils";
import { headerNavLinks } from "@/constants";
import { Button } from "../shared";
import useRedirect from "../../../helpers/useRedirect";
import { LOGIN_URL, REGISTER_URL } from "../../../helpers/AppPaths";

interface IProps {
  opened: boolean;
  toggleHandler: () => void;
}

const HeaderDrawerMobile: React.FC<IProps> = ({ opened, toggleHandler }) => {
  const location = useLocation();
  const redirect = useRedirect();
  const navigate = useNavigate();

  const handleLinkClick = (url: string) => {
    if (url.includes("#")) {
      const [path, hash] = url.split("#");
      if (path && location.pathname !== path) {
        navigate(path);
      }
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        toggleHandler(); // Close the drawer after scroll
      }, 0);
    } else {
      navigate(url);
      toggleHandler(); // Close the drawer after navigation
    }
  };

  return (
    <Drawer
      opened={opened}
      onClose={toggleHandler}
      position="top"
      withCloseButton={false}
      className="mt-[60px]"
      classNames={{
        content:
          "mt-[60px] border-0 border-t-[1px] border-gray-500 border-solid h-auto rounded-0",
        body: "p-0",
        overlay: "hidden",
      }}
    >
      {/* Nav Links */}
      <div className="w-full flex flex-col items-center justify-start">
        {headerNavLinks.map((item: INavLinkItem, index: number) =>
          item?.url ? (
            <div
              key={index}
              onClick={() => handleLinkClick(item?.url!)}
              className={cn(
                "w-full text-black-400 cursor-pointer text-lg px-3 py-4 border-0 border-b-[1px] border-gray-500 border-solid",
              )}
            >
              {item.title}
            </div>
          ) : (
            <Accordion key={index} className="w-full">
              <Accordion.Item value={item.title}>
                <Accordion.Control className={cn("text-black-400 text-lg")}>
                  {item.title}
                </Accordion.Control>
                <Accordion.Panel className="flex flex-col gap-4">
                  {item.subPages?.map((page, i: number) =>
                    page?.active ? (
                      <Link
                        key={i}
                        to={page?.url}
                        className="text-base block text-black-400 hover:text-blue-500 transition-all duration-300"
                        onClick={toggleHandler} // Close the drawer on link click
                      >
                        {page.title}
                      </Link>
                    ) : (
                      <div
                        key={i}
                        className="text-base block text-black-400 hover:text-blue-500 transition-all duration-300"
                      >
                        {page.title}
                      </div>
                    ),
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          ),
        )}
      </div>
      {/* Auth Buttons */}
      <div className="flex items-center justify-center w-full gap-4 py-4">
        <Button
          onClick={() => {
            redirect(LOGIN_URL);
            toggleHandler(); // Close the drawer after redirection
          }}
          variant="outline"
          color={getTailwindColor("blue", "700")}
        >
          Log In
        </Button>
        <Button
          onClick={() => {
            redirect(REGISTER_URL);
            toggleHandler(); // Close the drawer after redirection
          }}
          color={getTailwindColor("blue", "700")}
        >
          Sign Up
        </Button>
      </div>
    </Drawer>
  );
};

export default HeaderDrawerMobile;
