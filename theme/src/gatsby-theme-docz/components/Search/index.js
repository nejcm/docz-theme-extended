import {Link, useDocs} from 'docz';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  Close,
  DrawerContainer,
  Results,
  SearchContainer,
  Submit,
} from './custom-styles';

const filter = (regex, doc) =>
  (doc.tags && regex.test(doc.tags)) || regex.test(doc.name);

const Search = ({open, toggleOpen, className, ...rest}) => {
  const classes = `${open ? 'open' : ''} ${className}`;
  const [results, setResults] = useState(null);
  const docs = useDocs();

  const search = (ev) => {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const q = form.get('query');
    if (!q || !q.length) {
      setResults(null);
      return;
    }
    const regex = new RegExp(q, 'i');
    const filtered = docs.filter(filter.bind(null, regex));
    setResults(filtered);
  };

  return (
    <DrawerContainer className={classes} {...rest}>
      <div>
        <Close onClick={() => toggleOpen(false)}>✕</Close>
        <SearchContainer>
          <form action="" onSubmit={search}>
            <label htmlFor="search-query" style={{display: 'none'}}>
              Search
            </label>
            <input
              id="search-query"
              name="query"
              type="text"
              placeholder="Type to search..."
            />
            <Submit type="submit">🡢</Submit>
          </form>
        </SearchContainer>
        {results && results.length ? (
          <Results>
            {results.map((doc, i) => (
              <Link key={i} to={doc.route}>
                <h4>{doc.name}</h4>
                <span>{doc.route}</span>
              </Link>
            ))}
          </Results>
        ) : null}
      </div>
    </DrawerContainer>
  );
};

Search.propTypes = {
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  className: PropTypes.string,
};

export default Search;
