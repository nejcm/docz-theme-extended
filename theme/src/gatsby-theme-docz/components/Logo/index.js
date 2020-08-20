/** @jsx jsx */
import {Link, useConfig} from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Logo/styles';
import {Flex, jsx, useColorMode} from 'theme-ui';
import {getPublicUrl} from '../../helpers';
import {Image} from './custom-styles';

export const Logo = () => {
  const config = useConfig();
  const [colorMode] = useColorMode();
  const {width = '100%', src = ''} = config.themeConfig.logo || {};
  const len = (config.title || '').length;

  const imagePath = typeof src === 'object' ? src[colorMode] : src;

  return (
    <div sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <Flex
          sx={{alignItems: 'center', flexDirection: 'row', lineHeight: 1.2}}
        >
          {imagePath ? (
            <Image
              className="logo"
              src={getPublicUrl(config.base, imagePath)}
              width={width}
              height="auto"
              alt={config.title}
            />
          ) : null}
          <span className={len > 12 && imagePath ? 'h-sm' : ''}>
            {config.title}
          </span>
        </Flex>
      </Link>
    </div>
  );
};
