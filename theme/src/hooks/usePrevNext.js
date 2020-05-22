import { useCurrentDoc } from 'docz';
import { useMemo } from 'react';

function usePrevNext(menus) {
  const currentDoc = useCurrentDoc();

  // flatten menus
  return useMemo(() => {
    const menuArray = Array.isArray(menus) ? menus : Object.keys(menus).reduce((acc, key) => [...acc, ...menus[key]], []);
    const flattened = menuArray.reduce((acc, obj) => obj.menu
      ? [...acc, ...obj.menu.map((item) => ({ ...item, menu: obj.name }))]
      : [...acc, obj], []);

    const currentIndex = flattened.findIndex((item) => item.slug === currentDoc.slug);
    const p = currentIndex > 0 ? flattened[currentIndex - 1] : null;
    const n = currentIndex < (flattened.length - 1) ? flattened[currentIndex + 1] : null;

    return { prev: p, next: n };
  }, [currentDoc.slug, menus]);
}

export default usePrevNext;