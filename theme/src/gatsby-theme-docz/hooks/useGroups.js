import {useConfig} from 'docz';
import {values} from 'lodash/fp';
import {useMemo} from 'react';

export const NO_GROUP = '';

function useGroups(menus) {
  const {groups} = useConfig();
  return useMemo(() => {
    if (!groups || Object.keys(groups).length === 0) {
      return {[NO_GROUP]: menus};
    }
    if (!Array.isArray(menus)) {
      return menus;
    }

    const menusObject = menus.reduce((acc, curr) => {
      acc[curr.name || ''] = curr;
      return acc;
    }, {});

    const grouped = Object.keys(groups)
      .filter((key) => Array.isArray(groups[key]))
      .reduce((acc, key) => {
        acc[key] = groups[key].map((group) => {
          const val = menusObject[group];
          delete menusObject[group];
          return val;
        });
        return acc;
      }, {});
    grouped[NO_GROUP] = [
      ...(grouped[NO_GROUP] || []),
      ...(values(menusObject) || []),
    ];
    return grouped;
  }, [groups, menus]);
}

export default useGroups;
