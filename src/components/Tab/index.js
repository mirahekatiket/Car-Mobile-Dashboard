import React, { useEffect, useState } from "react";
import './index.scss';

const Tab = ({children, activeTab='', onClickTab}) => {
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, element => {
      if (!React.isValidElement(element)) return;

      const {props: {tab, children}} = element;
      data.push({tab, children});
      
      setTabsData(data);
    })
  }, [children]);

  const isActiveChild = tabsData && tabsData.filter(data => data.tab.value === activeTab).map(data => data.children);
  
  return (
    <div className="w-full tab">
      <ul className="sticky top-0 z-50">
        {
          tabsData.map(({tab}) => (
            <li className={tab.value === activeTab ? 'active': ''}>
              <button onClick={() => onClickTab(tab.value)}>
                {tab.title}
              </button>
            </li>
          ))
        }
      </ul>

      <div className="relative">
        {isActiveChild}
      </div>
    </div>
  )
}

const TabPane = ({children}) => {
  return {children}
}

Tab.TabPane = TabPane;

export default Tab;