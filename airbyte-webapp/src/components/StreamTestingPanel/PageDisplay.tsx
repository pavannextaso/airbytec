import { Tab } from "@headlessui/react";
import classNames from "classnames";

import { Text } from "components/ui/Text";

import {
  HttpRequest,
  HttpResponse,
  StreamReadSlicesItemPagesItem,
  StreamReadSlicesItemPagesItemRecordsItem,
} from "core/request/ConnectorBuilderClient";

import styles from "./PageDisplay.module.scss";

interface PageDisplayProps {
  page: StreamReadSlicesItemPagesItem;
  className?: string;
}

interface TabData {
  title: string;
  content: StreamReadSlicesItemPagesItemRecordsItem[] | HttpRequest | HttpResponse;
}

export const PageDisplay: React.FC<PageDisplayProps> = ({ page, className }) => {
  const tabs: TabData[] = [
    { title: "Records", content: page.records },
    { title: "Request", content: page.request },
    { title: "Response", content: page.response },
  ];

  return (
    <div className={classNames(className, styles.container)}>
      <Tab.Group>
        <Tab.List className={styles.tabList}>
          {tabs.map((tab) => (
            <Tab className={styles.tab}>
              {({ selected }) => (
                <Text className={classNames(styles.tabTitle, { [styles.selected]: selected })}>{tab.title}</Text>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={styles.tabPanelContainer}>
          {tabs.map((tab) => (
            <Tab.Panel className={styles.tabPanel}>
              <pre>{JSON.stringify(tab.content, null, 2)}</pre>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};