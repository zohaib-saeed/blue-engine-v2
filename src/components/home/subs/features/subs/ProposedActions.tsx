import { useState, useEffect, useRef } from "react";
import { Tabs, Timeline } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { BsArrowRight as IconArrowRight } from "react-icons/bs";
import { cn } from "@/utils";
import StackedCarousel from "./StackedCarousel";
import { voorgesteldeFeature } from "@/db/home-feature-sections";

const ProposedActions = () => {
  // Tabs Data
  const data = voorgesteldeFeature;

  // Generates random ID
  const id = useId();

  // States
  const [activeTab, setActiveTab] = useState<string | null>(
    data.tabs[data.mainTab as number].value,
  );
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateLinePosition = () => {
      const tabsList = tabsListRef.current;
      const activeTabElement = document.querySelector(
        `.${id} [aria-selected="true"]`,
      ) as HTMLElement;

      if (tabsList && activeTabElement) {
        const indicator = activeTabElement.querySelector(
          "div.absolute",
        ) as HTMLElement;
        if (indicator) {
          const tabsListRect = tabsList.getBoundingClientRect();
          const indicatorRect = indicator.getBoundingClientRect();
          const activeTabRect = activeTabElement.getBoundingClientRect();

          const xPosition =
            indicatorRect.left - tabsListRect.left + indicatorRect.width / 2;
          const yPosition =
            tabsListRect.top - activeTabRect.top + indicatorRect.height;

          setLineStyle({
            position: "absolute",
            width: `${xPosition - 40}px`,
            height: "1.5px",
            backgroundColor: "white",
            top: `${yPosition + 38}px`,
            left: "39px",
            transform: "translateY(-50%)",
            display: activeTab === data?.tabs[0]?.value ? "none" : "flex",
          });
        }
      }
    };

    updateLinePosition();
    window.addEventListener("resize", updateLinePosition);

    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [activeTab]);

  return (
    <section className="w-full max-w-screen-sxl flex flex-col items-center justify-start gap-12">
      <div
        className="w-full flex flex-col items-center justify-start gap-2 rounded-md mt-6 px-4 md:px-14 pt-12 pb-3 transition-all duration-300 relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(45,139,242,1) 0%, rgba(2,78,161,1) 100%)",
        }}
      >
        <div className="w-full grid lg:grid-cols-[0.8fr_1.2fr] gap-12 rounded-md transition-all duration-300 relative">
          {/* Col 1 */}
          <StackedCarousel images={data?.images} />
          {/* Col 2 */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className="w-full flex flex-col items-start justify-start">
              <h3 className="text-white-main font-[800] text-3xl w-full text-left ">
                {data?.heading}
              </h3>
              <p className="base font-bold text-white-main text-left">
                {data?.body}
              </p>
            </div>
            {/* Tabs Vertical (Above xs) */}
            <div className="relative hidden xs:block">
              <Tabs
                variant="pills"
                radius="xl"
                value={activeTab}
                onChange={setActiveTab}
                classNames={{
                  tab: "text-[11px] py-2",
                  list: `gap-1 ${id}`,
                }}
              >
                <Tabs.List
                  ref={tabsListRef}
                  className="bg-white-main px-1 py-1 rounded-full w-fit relative"
                >
                  {data?.tabs?.map(
                    (
                      item: { title: string; value: string; bullets: string[] },
                      index: number,
                    ) => (
                      <div className="w-auto" key={index}>
                        <Tabs.Tab
                          value={item.value}
                          className={cn(
                            "text-blue-800",
                            activeTab === item.value
                              ? "bg-blue-800 text-white-main"
                              : "",
                          )}
                        >
                          {item.title}
                          {activeTab === item.value && (
                            <div
                              className={cn(
                                "absolute -bottom-3 left-[50%] right-[50%] border-0 border-solid border-white-main border-l-[2px] h-[9px] -ml-[4.5px]",
                                index === 0 ? "left-[40px]" : "",
                              )}
                            />
                          )}
                        </Tabs.Tab>
                      </div>
                    ),
                  )}
                </Tabs.List>
                {(data?.tabs as any)?.map(
                  (
                    item: {
                      title: string;
                      value: string;
                      bullets: string[];
                      activeBullet: number;
                      chips: string[];
                    },
                    index: number,
                  ) => (
                    <Tabs.Panel
                      value={item.value}
                      key={index}
                      className={cn(
                        "pl-[35px] flex flex-col items-start justify-start mt-[8px]",
                        index === 0 ? "pl-[35.5px]" : "",
                      )}
                    >
                      <div className="border-[1.5px] border-solid border-white-main h-[11px] ml-[4px]" />
                      <Timeline
                        bulletSize={10}
                        lineWidth={2}
                        color="white"
                        classNames={{
                          root: "homepage-Timeline",
                          itemBullet: "border-white-main",
                        }}
                      >
                        {item.bullets.map((bullet: string, i: number) => (
                          <Timeline.Item
                            key={i}
                            style={{
                              marginTop:
                                i !== 0 ? "var(--mantine-spacing-xs)" : "",
                            }}
                          >
                            <p className="text-white-main text-[15px] w-fit">
                              {bullet}
                              {i === item.activeBullet
                                ? item.chips.map((chip, ind) => (
                                    <span
                                      key={ind}
                                      className="rounded-full bg-white-main text-blue-800 px-[10px] py-[1px] text-15 font-medium ml-[6px]"
                                    >
                                      {chip}
                                    </span>
                                  ))
                                : ""}
                            </p>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Tabs.Panel>
                  ),
                )}
              </Tabs>
              <div style={lineStyle} />
            </div>
            {/* Tabs Horizontal (Below xs) */}
            <div className="relative block xs:hidden">
              <Tabs
                variant="pills"
                radius="xl"
                orientation="horizontal"
                value={activeTab}
                onChange={setActiveTab}
                classNames={{
                  tab: "text-[11px] !py-2",
                  list: "gap-1",
                }}
              >
                <Tabs.List className="bg-white-main px-1 py-1 rounded-lg w-fit relative">
                  {(data?.tabs as any).map(
                    (
                      item: {
                        title: string;
                        value: string;
                        bullets: string[];
                        activeBullet: number;
                      },
                      index: number,
                    ) => (
                      <div className="w-auto" key={index}>
                        <Tabs.Tab
                          value={item.value}
                          className={cn(
                            "py-2 text-blue-800 rounded-md",
                            activeTab === item.value
                              ? "bg-blue-800 text-white-main"
                              : "",
                          )}
                        >
                          {item.title}
                        </Tabs.Tab>
                      </div>
                    ),
                  )}
                </Tabs.List>
                {(data?.tabs as any)?.map(
                  (
                    item: {
                      title: string;
                      value: string;
                      bullets: string[];
                      activeBullet: number;
                      chips: string[];
                    },
                    index: number,
                  ) => (
                    <Tabs.Panel
                      value={item.value}
                      key={index}
                      className="pl-[15px] flex flex-col items-start justify-start mt-[8px]"
                    >
                      <Timeline
                        bulletSize={10}
                        lineWidth={2}
                        color="white"
                        classNames={{
                          root: "homepage-Timeline",
                          itemBullet: "border-white-main",
                        }}
                      >
                        {item.bullets.map((bullet: string, i: number) => (
                          <Timeline.Item
                            key={i}
                            style={{
                              marginTop:
                                i !== 0 ? "var(--mantine-spacing-xs)" : "",
                            }}
                          >
                            <p className="text-white-main text-[13px] w-fit">
                              {bullet}
                              {i === item.activeBullet
                                ? item.chips.map((chip, ind) => (
                                    <span
                                      key={ind}
                                      className="rounded-full bg-white-main text-blue-800 px-[10px] py-[1px] text-xs font-medium ml-[6px]"
                                    >
                                      {chip}
                                    </span>
                                  ))
                                : ""}
                            </p>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Tabs.Panel>
                  ),
                )}
              </Tabs>
            </div>
          </div>
        </div>
        {/* Must Add roll = Button  */}
        <a
          href={data.featurePageUrl}
          target="_blank"
          className="text-white-main text-base lg:text-lg font-[800] ml-auto mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-solid border-white-main px-4 py-[5px] cursor-pointer hover:bg-white-main/5 transition-all durration-300"
          rel="noreferrer"
        >
          <span>Bekijk meer</span>
          <IconArrowRight size={21} />
        </a>
      </div>
    </section>
  );
};

export default ProposedActions;
