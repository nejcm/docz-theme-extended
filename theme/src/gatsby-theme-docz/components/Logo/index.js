/** @jsx jsx */
import {Link, useConfig} from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Logo/styles';
import {Flex, jsx} from 'theme-ui';
import {getPublicUrl} from '../../helpers';
import {Image} from './custom-styles';

export const Logo = () => {
  const config = useConfig();
  const {width = '100%', src} = config.themeConfig.logo || {};
  const len = (config.title || '').length;

  return (
    <div sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <Flex
          sx={{alignItems: 'center', flexDirection: 'row', lineHeight: 1.2}}
        >
          {src ? (
            <Image
              className="logo"
              src={getPublicUrl(config.base, src)}
              width={width}
              height="auto"
              alt={config.title}
            />
          ) : null}
          <span className={len > 12 && src ? 'h-sm' : ''}>{config.title}</span>
        </Flex>
      </Link>
    </div>
  );
};
