import {useCurrentDoc} from 'docz';
import {useMemo} from 'react';

function usePrevNext(menus) {
  const currentDoc = useCurrentDoc();

  return useMemo(() => {
    // if no menus
    if (!menus) return {};

    // init vars
    let found = false;
    let prev = null;
    let next = null;

    // check menu item helper
    const checkItem = (item, path) => {
      // if item was already found just add next and exit
      if (found) {
        next = {path, item};
        return true;
      }
      // if item found then mark and continue to next
      if (item.slug === currentDoc.slug) found = true;
      // else fill prev item
      else prev = {path, item};
      // continue
      return false;
    };

    // loop all groups until found
    Object.keys(menus).some((groupKey) => {
      const basePath = groupKey.length > 0 ? [groupKey] : [];
      // loop all menu items in group until found
      return menus[groupKey].some((menuItem) => {
        // if no sub-menus
        if (!Array.isArray(menuItem.menu)) return checkItem(menuItem, basePath);
        const subMenuGroups = menuItem.extendedMenu || [
          {name: '', menu: menuItem.menu},
        ];
        // check all sub-menu groups
        return subMenuGroups.some((subGroup) => {
          if (!Array.isArray(subGroup.menu)) return undefined; // TODO: need to check item?
          // loop sub-menu items
          return subGroup.menu.some((subItem) => {
            // build path
            const path = [...basePath, subItem.name];
            if (subItem.submenu) path.push(subItem.submenu);
            return checkItem(subItem, path);
          });
        });
      });
    });

    return {prev, next};
  }, [currentDoc.slug, menus]);
}

export default usePrevNext;
