import Layout from "@/components/Layout";
import {
  Title,
  InternalLink,
  Topic,
  TitleBack,
} from "@/components/DesignSystem";
import { Tab } from "@headlessui/react";
import LayoutGlobalNavigation from "@/components/LayoutGlobalNavigation";

export default function Kalkulator() {
  const tab =
    "active:bg-zinc-200 rounded-md text-tiny hover:bg-white hover:shadow-md py-2 px-4";
  return (
    <LayoutGlobalNavigation
      browserTitle="Kalkulator"
      description="Kalkulator"
      globalNavigationTitle="Kalkulator"
    >
      <Tab.Group as="div">
        <Tab.List className="grid grid-cols-3 gap-1 p-1 text-base text-gray-600 bg-zinc-200 rounded-lg sm:w-1/4 sm:text-tiny">
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-white shadow-md rounded-md p-1 sm:p-0.5"
                : "p-1 sm:p-0.5 hover:bg-zinc-300 rounded-md"
            }
          >
            Basic
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-white shadow-md rounded-md p-1 sm:p-0.5"
                : "p-1 sm:p-0.5 hover:bg-zinc-300 rounded-md"
            }
          >
            Saintifik
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-white shadow-md rounded-md p-1 sm:p-0.5"
                : "p-1 sm:p-0.5 hover:bg-zinc-300 rounded-md"
            }
          >
            Rumus
          </Tab>
        </Tab.List>

        <Tab.Panels className="p-1 mt-2 bg-zinc-200 rounded-md">
          <Tab.Panel className="h-48">Content 1</Tab.Panel>
          <Tab.Panel className="h-48">Content 2</Tab.Panel>
          <Tab.Panel className="h-48">Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </LayoutGlobalNavigation>
  );
}
