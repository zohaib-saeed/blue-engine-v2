import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, Accordion } from '@mantine/core';
import { cn, getTailwindColor } from '@/utils';
import { headerNavLinks } from '@/constants';
import { Button } from '../shared';

interface IProps {
  opened: boolean;
  toggleHandler: () => void;
}

const HeaderDrawerMobile: React.FC<IProps> = ({ opened, toggleHandler }) => {
  // Get current URL
  const location = useLocation();
  return (
    <Drawer
      opened={opened}
      onClose={toggleHandler}
      position="top"
      withCloseButton={false}
      className="mt-[60px]"
      closeOnClickOutside={false}
      classNames={{
        content: 'mt-[60px] border-0 border-t-[1px] border-gray-500 border-solid h-auto rounded-0',
        body: 'p-0',
        overlay: 'hidden',
      }}
    >
      {/* Nav Links  */}
      <div className="w-full flex flex-col items-center justify-start">
        {headerNavLinks.map((item: INavLinkItem, index: number) =>
          item?.url ? (
            <Link
              to={item.url}
              key={index}
              className={cn(
                'w-full text-black-400 text-lg px-3 py-4 border-0 border-b-[1px] border-gray-500 border-solid',
                location.pathname.startsWith(item.url) ? 'text-blue-500' : ''
              )}
            >
              {item.title}
            </Link>
          ) : (
            <Accordion className="w-full">
              <Accordion.Item key={item.title} value={item.title}>
                <Accordion.Control className={cn('text-black-400 text-lg')}>
                  {item.title}
                </Accordion.Control>
                <Accordion.Panel className="flex flex-col gap-2">
                  {item.subPages?.map((page, i: number) =>
                    page?.active ? (
                      <Link
                        key={i}
                        to={page?.url}
                        className="text-base block text-black-400 hover:text-blue-500 transition-all duration-300"
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
                    )
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )
        )}
      </div>
      {/* Auth Buttons  */}
      <div className="flex items-center justify-center w-full gap-4 py-4">
        <Button variant="outline" color={getTailwindColor('blue', '700')}>
          Log In
        </Button>
        <Button color={getTailwindColor('blue', '700')}>Sign Up</Button>
      </div>
    </Drawer>
  );
};

export default HeaderDrawerMobile;
