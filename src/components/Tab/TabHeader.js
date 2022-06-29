import { useContext } from "react";
import { TabContext } from "./TabContex";
import { TabHeaderItem } from "./TabElements";

const TabHeader = ({ title, children }) => {
  const context = useContext(TabContext);
  const isActive = title === context?.activeTab;
  const handleActive = () => context?.setTab(title);

  return (
    <TabHeaderItem isActive={isActive} onClick={handleActive}>
      {children}
    </TabHeaderItem>
  );
};

export default TabHeader;
