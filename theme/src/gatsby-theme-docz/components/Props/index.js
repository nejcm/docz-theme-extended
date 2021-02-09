/* eslint-disable react/prop-types */
/** @jsx jsx */
import {ChevronDown, ChevronUp} from 'gatsby-theme-docz/src/components/Icons';
import * as styles from 'gatsby-theme-docz/src/components/Props/styles';
import {useState} from 'react';
import {jsx} from 'theme-ui';
import {InlineCode} from '../../custom-components/InlineCode';
import {
  Container,
  defaultValue as propsDefaultValue,
  container as propsContainer,
  propName as propsPropName,
  propType as propsPropType,
  right as propsRight,
} from './custom-styles';

export const getDefaultValue = ({defaultValue, type, flowType}) => {
  const propType = flowType ? flowType : type;
  if (!defaultValue || !defaultValue.value) return null;
  if (defaultValue.value === "''") {
    return '[Empty string]';
  }
  if (propType && propType.name === 'string') {
    return defaultValue.value.replace(/'/g, '"');
  }
  if (typeof defaultValue.value === 'object' && defaultValue.value.toString) {
    return defaultValue.value.toString();
  }
  return defaultValue.value;
};

export const Prop = ({propName, prop, getPropType, isToggle}) => {
  const [showing, setShowing] = useState(isToggle || false);
  if (!prop.type && !prop.flowType) return null;

  const toggle = () => setShowing((s) => !s);
  const defaultValue = getDefaultValue(prop);
  return (
    <div sx={styles.line} data-testid="prop">
      <div sx={styles.content}>
        <div sx={propsPropName} data-testid="prop-name">
          {propName}
        </div>
        <div sx={propsPropType} data-testid="prop-type">
          {getPropType(prop)}
        </div>
        {prop.defaultValue && (
          <div
            sx={propsDefaultValue}
            data-testid="prop-default-value"
            data-hovertext={
              defaultValue.length > 150 ? defaultValue : undefined
            }
          >
            <em>{defaultValue}</em>
          </div>
        )}
        <div sx={propsRight}>
          {prop.required && (
            <div sx={styles.propRequired} data-testid="prop-required">
              <strong>required</strong>
            </div>
          )}
          {prop.description && (
            <button
              sx={styles.openDescBtn}
              onClick={toggle}
              data-testid="prop-toggle-description"
            >
              {showing ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
      </div>
      {showing && prop.description && (
        <div sx={styles.description} data-testid="prop-description">
          {prop.description}
        </div>
      )}
    </div>
  );
};

export const Props = ({props, table, getPropType, isToggle}) => {
  const entries = Object.entries(props);

  if (table) {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th width="17%">Prop name</th>
              <th width="25%">Type</th>
              <th width="9%">Default</th>
              <th width="9%">Required</th>
              <th width="40%">Description</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([key, prop]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <InlineCode>{getPropType(prop)}</InlineCode>
                </td>
                <td>{getDefaultValue(prop) || '—'}</td>
                <td>{prop.required ? 'true' : 'false'}</td>
                <td>{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }

  return (
    <div sx={propsContainer} data-testid="props">
      {entries.map(([key, prop]) => (
        <Prop
          key={key}
          propName={key}
          prop={prop}
          getPropType={getPropType}
          isToggle={isToggle}
        />
      ))}
    </div>
  );
};
