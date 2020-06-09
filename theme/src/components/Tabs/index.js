import PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import {TabsContext, useTabsContext} from './context';
import {TabPane, Tabs as TabList, Wrapper} from './styles';
import {Tab} from './tab';

const Pane = () => {
  const {current} = useTabsContext();
  return current ? <TabPane>{current.children}</TabPane> : null;
};
Pane.propTypes = {
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Children = React.memo(({children}) => {
  return <TabList>{children}</TabList>;
});
Children.propTypes = {
  children: PropTypes.node.isRequired,
};

const Tabs = ({activeId, children}) => {
  const [current, setCurrent] = useState(undefined);

  const value = useMemo(
    () => ({
      activeId,
      current,
      setCurrent,
    }),
    [current, activeId],
  );

  return (
    <TabsContext.Provider value={value}>
      <Wrapper>
        <Children children={children} />
        <Pane />
      </Wrapper>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  /**
   * Active tab key
   */
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Tabs
   */
  children: PropTypes.node.isRequired,
};
Tabs.displayName = 'Tabs';

Tabs.Tab = Tab;
export {Tabs};
