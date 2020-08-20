import PropTypes from 'prop-types';
import React, {useEffect, useMemo} from 'react';
import {useTabsContext} from './context';

const Tab = ({id, title, children, ...rest}) => {
  const {current, setCurrent, activeId} = useTabsContext();
  const onKey = (t, ev) => ev.keyCode === 13 && setCurrent(t);
  const tab = useMemo(() => ({id, title, children}), [children, id, title]);
  const isCurrent = !current && tab.id === activeId;

  useEffect(() => {
    if (isCurrent) setCurrent(tab);
  }, [isCurrent, setCurrent, tab]);

  return (
    <div
      role="button"
      className={current && id === current.id ? 'active' : ''}
      key={id}
      onClick={setCurrent.bind(null, tab)}
      onKeyDown={onKey.bind(null, tab)}
      tabIndex={-1}
      {...rest}
    >
      {title}
    </div>
  );
};

Tab.propTypes = {
  /**
   * Tab key
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Tab title
   */
  title: PropTypes.node.isRequired,
  /**
   * Tab content
   */
  children: PropTypes.node,
};
Tab.displayName = 'Tab';

export {Tab};
