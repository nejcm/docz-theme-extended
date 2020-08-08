/**
 * Currently there is no better way of building custom menu groups and
 * sub-menus without modifiynig the core theme functionality.
 *
 * TODO:
 *  - improve this ugly code
 *  - check for perf. improvements
 */

import {useConfig, useMenus} from 'docz';
import {values} from 'lodash/fp';
import {useMemo} from 'react';

export const NO_GROUP = '';

const buildSubMenus = (menuItems) => {
  const map = {};
  const extendedMenu = menuItems.map((item) => {
    if (!item.menu) return item;

    const grouped = item.menu.reduce((ac, subItem) => {
      const i = ac.length;
      // part of sub-menu
      if (subItem.submenu) {
        const pos = map[subItem.submenu];
        // sub-menu already exists in array
        if (pos >= 0) {
          ac[pos].menu.push(subItem);
        }
        // sub-menu does not exist yet
        else if (subItem.submenu) {
          ac.push({name: subItem.submenu, menu: [subItem]});
          map[subItem.submenu] = i;
        }
        return ac;
      }

      // not part of sub-menu
      // is previous item a non group item
      if (i > 0 && ac[i - 1].name === NO_GROUP) {
        ac[i - 1].menu.push(subItem);
      }
      // create new non group
      else {
        ac.push({name: NO_GROUP, menu: [subItem]});
      }
      return ac;
    }, []);

    item.extendedMenu = grouped;
    return item;
  });
  return extendedMenu;
};

const buildGroups = (menuItems, groups) => {
  const groupKeys = Object.keys(groups);
  // no groups
  if (!groups || groupKeys.length === 0) {
    return {[NO_GROUP]: menuItems};
  }

  // map from array to object
  // where key is menu name (unique ID)
  const menusObject = menuItems.reduce((acc, curr) => {
    acc[curr.name || ''] = curr;
    return acc;
  }, {});

  // group menu items
  const grouped = groupKeys
    .filter((key) => Array.isArray(groups[key]))
    .reduce((acc, key) => {
      // map menu item to group key
      acc[key] = groups[key].map((group) => {
        const val = menusObject[group];
        delete menusObject[group];
        return val;
      });
      return acc;
    }, {});

  // add ungrouped items
  grouped[NO_GROUP] = [
    ...(grouped[NO_GROUP] || []),
    ...(values(menusObject) || []),
  ];
  return grouped;
};

function useExtendedMenus({query}) {
  const {groups = {}} = useConfig();
  const menus = useMenus({query});

  return useMemo(() => {
    // if no custom menus present than return default menus
    if (!Array.isArray(menus)) return menus;
    // if query than return simple menu object
    if (query && query.length) return {[NO_GROUP]: menus};

    // build sub menus
    let extendedMenus = buildSubMenus(menus);
    // build groups
    extendedMenus = buildGroups(extendedMenus, groups);
    // return extended menu
    return extendedMenus;
  }, [groups, menus, query]);
}

export default useExtendedMenus;
