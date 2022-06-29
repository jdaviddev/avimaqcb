import { ListTabs } from "../Escuela/DataTab";
import {
  GlobalContainer,
  TabHeaderContainer,
  TabPanelContainer,
  TabPanelItem
} from "./TabElements";
import TabContainer from "./TabContex";
import TabHeader from "./TabHeader";
import TabPanel from "./TabPanel";

const Tab = () => {
  return (
    <div className="container">
     <GlobalContainer>
        <TabContainer tab={ListTabs[0].title}>
          <TabHeaderContainer>
            {ListTabs?.map(({ id, title }) => (
              <TabHeader title={title} key={id}>
                {title}
              </TabHeader>
            ))}
          </TabHeaderContainer>
          <TabPanelContainer>
            {ListTabs?.map(({ id, title, description }) => (
              <TabPanel whenActive={title} key={id}>
                <TabPanelItem>{description}</TabPanelItem>
              </TabPanel>
            ))}
          </TabPanelContainer>
        </TabContainer>
      </GlobalContainer>
    </div>
  );
};

export default Tab;
