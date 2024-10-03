import { useState, useEffect, useRef } from 'react';
import { Tabs, Timeline } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { BsArrowRight as IconArrowRight } from 'react-icons/bs';
import { cn, getTailwindColor } from '@/utils';
import StackedCarousel from './StackedCarousel';

interface IProps {
  data: any;
  sectionClasses: string;
  colOneClasses: string;
  colTwoClasses: string;
  colOneAlignment: 'left' | 'right';
}

const SharedFeatureSection: React.FC<IProps> = ({
  data,
  sectionClasses,
  colOneClasses,
  colTwoClasses,
}) => {
  const id = useId();

  // States
  const [activeTab, setActiveTab] = useState<string | null>(data?.tabs[0].value);
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateLinePosition = () => {
      const tabsList = tabsListRef.current;
      const activeTabElement = document.querySelector(
        `.${id} [aria-selected="true"]`
      ) as HTMLElement;

      if (tabsList && activeTabElement) {
        const indicator = activeTabElement.querySelector('div.absolute') as HTMLElement;
        if (indicator) {
          const tabsListRect = tabsList.getBoundingClientRect();
          const indicatorRect = indicator.getBoundingClientRect();
          const activeTabRect = activeTabElement.getBoundingClientRect();

          const xPosition = indicatorRect.left - tabsListRect.left + indicatorRect.width / 2;
          const yPosition = tabsListRect.top - activeTabRect.top + indicatorRect.height;

          setLineStyle({
            position: 'absolute',
            width: `${xPosition - 39.5}px`,
            backgroundColor: '#1e40af',
            top: `${yPosition + 38}px`,
            left: '39px',
            transform: 'translateY(-50%)',
            borderStyle: 'solid',
            borderColor: '#1d4ed8', // Assuming 'border-blue-800' corresponds to this color
            borderBottomWidth: '2px',
            display: activeTab === data?.tabs[0]?.value ? 'none' : 'flex',
          });
        }
      }
    };

    updateLinePosition();
    window.addEventListener('resize', updateLinePosition);

    return () => {
      window.removeEventListener('resize', updateLinePosition);
    };
  }, [activeTab]);

  return (
    <>
      <section className="w-full flex flex-col items-center rounded-md justify-start gap-2 mt-6 px-4 md:px-14 pt-12 pb-3 bg-gray-200">
        <div
          className={cn(
            'w-full grid gap-14 rounded-md transition-all duration-300 relative',
            sectionClasses
          )}
        >
          {/* Col 1 */}
          <StackedCarousel containerClasses={colOneClasses} images={data?.images} />
          {/* Col 2 */}
          <div
            className={cn('w-full flex flex-col items-start justify-start gap-4', colTwoClasses)}
          >
            <div className="w-full flex flex-col items-start justify-start">
              <h3 className="text-black-800 font-semibold text-3xl w-full text-left ">
                {data?.heading}
              </h3>
              <p className="text-base font-semibold text-neutral-600 text-left">{data?.body}</p>
            </div>
            {/* Tabs Horizontal (Above xs) */}
            <div className="relative hidden xs:block">
              <Tabs
                variant="pills"
                radius="xl"
                value={activeTab}
                onChange={setActiveTab}
                classNames={{
                  tab: 'text-[11px] py-2',
                  list: `gap-1 ${id}`,
                }}
              >
                <Tabs.List
                  ref={tabsListRef}
                  className="bg-white-main px-1 py-1 rounded-full w-fit relative"
                >
                  {data?.tabs?.map(
                    (item: { title: string; value: string; bullets: string[] }, index: number) => (
                      <div className="w-auto" key={index}>
                        <Tabs.Tab
                          value={item.value}
                          className={cn(
                            'text-blue-800',
                            activeTab === item.value ? 'bg-blue-800 text-white-main' : ''
                          )}
                        >
                          {item.title}
                          {activeTab === item.value && (
                            <div
                              className={cn(
                                'absolute -bottom-3 left-[50%] right-[50%] border-solid border-blue-800 border-l-[2px] h-[9px] -ml-[4px]',
                                index === 0 ? 'left-[39px] lg:left-[39px]' : ''
                              )}
                            />
                          )}
                        </Tabs.Tab>
                      </div>
                    )
                  )}
                </Tabs.List>
                {data?.tabs?.map(
                  (
                    item: {
                      title: string;
                      value: string;
                      bullets: string[];
                      activeBullet: number;
                      chips: string[];
                    },
                    index: number
                  ) => (
                    <Tabs.Panel
                      value={item.value}
                      key={index}
                      className="pl-[35px] flex flex-col items-start justify-start mt-[8px]"
                    >
                      <div className="border-l-[2px] border-solid border-blue-800 h-[11px] ml-[4px]" />
                      <Timeline
                        bulletSize={11}
                        lineWidth={2}
                        color={getTailwindColor('blue', '800')}
                        classNames={{
                          root: 'homepage-Timeline',
                          item: 'before:border-blue-800',
                          itemBullet: 'border-blue-800 bg-blue-800',
                        }}
                      >
                        {item.bullets.map((bullet: string, i: number) => (
                          <Timeline.Item
                            key={i}
                            style={{
                              marginTop: i !== 0 ? 'var(--mantine-spacing-xs)' : '',
                            }}
                          >
                            <p className="text-black-800 text-[15px] w-fit">
                              {bullet}
                              {i === item.activeBullet
                                ? item.chips.map((chip, ind) => (
                                    <span
                                      key={ind}
                                      className="rounded-full text-white-main bg-blue-800 px-[10px] py-[1px] text-sm font-medium ml-[6px]"
                                    >
                                      {chip}
                                    </span>
                                  ))
                                : ''}
                            </p>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Tabs.Panel>
                  )
                )}
              </Tabs>
              <div style={lineStyle} />
            </div>
            {/* Tabs Vertical (Below xs) */}
            <div className="relative block xs:hidden">
              <Tabs
                variant="pills"
                radius="xl"
                orientation="horizontal"
                value={activeTab}
                onChange={setActiveTab}
                classNames={{
                  tab: 'text-[11px] !py-2',
                  list: 'gap-1',
                }}
              >
                <Tabs.List className="bg-white-main px-1 py-1 rounded-lg w-fit relative">
                  {data?.tabs?.map(
                    (item: { title: string; value: string; bullets: string[] }, ind: number) => (
                      <div className="w-auto" key={ind}>
                        <Tabs.Tab
                          value={item.value}
                          className={cn(
                            'py-2 text-blue-800 rounded-md',
                            activeTab === item.value ? 'bg-blue-800 text-white-main' : ''
                          )}
                        >
                          {item.title}
                        </Tabs.Tab>
                      </div>
                    )
                  )}
                </Tabs.List>
                {data?.tabs?.map(
                  (
                    item: {
                      title: string;
                      value: string;
                      bullets: string[];
                      activeBullet: number;
                      chips: string[];
                    },
                    ind: number
                  ) => (
                    <Tabs.Panel
                      value={item.value}
                      key={ind}
                      className="pl-[15px] flex flex-col items-start justify-start mt-[8px]"
                    >
                      <Timeline
                        bulletSize={10}
                        lineWidth={2}
                        color={getTailwindColor('blue', '800')}
                        classNames={{
                          root: 'homepage-Timeline',
                          item: 'before:border-blue-800',
                          itemBullet: 'border-blue-800 bg-blue-800',
                        }}
                      >
                        {item.bullets.map((bullet: string, i: number) => (
                          <Timeline.Item
                            key={i}
                            style={{
                              marginTop:
                                i !== 0 ? 'var(--mantine-spacing-xs)' : 'before:border-black-800',
                            }}
                          >
                            <p className="text-black-800 text-[13px] w-fit">
                              {bullet}
                              {i === item.activeBullet
                                ? item.chips.map((chip, key) => (
                                    <span
                                      key={key}
                                      className="rounded-full text-white-main bg-blue-800 px-[10px] py-[1px] text-xs font-medium ml-[6px]"
                                    >
                                      {chip}
                                    </span>
                                  ))
                                : ''}
                            </p>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Tabs.Panel>
                  )
                )}
              </Tabs>
            </div>
          </div>
        </div>
        {/* Must Add roll = Button  */}
        <a
          href={data.featurePageUrl}
          target="_blank"
          className="text-black-800 text-base lg:text-lg font-[800] ml-auto mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-solid border-black-800 px-4 py-[5px] cursor-pointer hover:bg-black-800/5 transition-all durration-300"
          rel="noreferrer"
        >
          <span>Bekijk meer</span>
          <IconArrowRight size={21} />
        </a>
      </section>
    </>
  );
};

export default SharedFeatureSection;
