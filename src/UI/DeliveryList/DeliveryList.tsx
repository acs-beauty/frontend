import { FC } from "react";

import TruckIcon from "../icons/TruckIcon";
import { useScreen } from "@/hooks";
import { List, ListItem, Text } from "./DeliveryList.styled";
import { IconWrapper } from "@/styles/commonStyles";

const DeliveryList: FC<{ items: string[] }> = ({ items }) => {
  const { isTablet } = useScreen();

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <IconWrapper>
            <TruckIcon
              width={isTablet ? "32" : "24"}
              height={isTablet ? "32" : "24"}
            />
          </IconWrapper>
          <Text>{item}</Text>
        </ListItem>
      ))}
    </List>
  );
};
export default DeliveryList;
