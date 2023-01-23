import { List } from "@raycast/api";
import { ReactNode } from "react";

export interface Item {
  title: string;
  subtitle?: string;
  keywords?: string[];
  icon?: string;
  actions: ReactNode;
}

export const generateList = (items: Item[]) => (
  <List>
    {items.map((item, index) => (
      <List.Item
        key={index}
        icon={item.icon || "list-icon.png"}
        title={item.title}
        subtitle={item.subtitle}
        keywords={item.keywords}
        actions={item.actions}
      />
    ))}
  </List>
);

export const splitOnce = (target: string, delimiter: string): [string, string] => {
  const splitted = target.split(delimiter);
  return [splitted[0], splitted.slice(1).join(delimiter)];
};
