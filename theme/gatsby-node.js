/* eslint-disable import/no-extraneous-dependencies */
const { get } = require('lodash/fp');
const { parseConfig } = require('docz-core');

const ENTRIES_QUERY = `
  {
    allDoczEntries{
      edges{
        node{
          id
          filepath
          fullpath
          route
          slug
          name
          menu
          headings {
            slug
            depth
            value
          }
        }
      }
    }
  }
`
exports.createPagesStatefully = ({ graphql, actions }, opts = {}) => {
  return graphql(ENTRIES_QUERY).then(async ({ data, errors }) => {
    const hasErrors = errors && errors.length > 0
    const entries = get('allDoczEntries.edges', data)
    if (!entries || entries.length === 0 || hasErrors) return
    const defaultEntry = entries.find(({ node: entry }) => entry.route === '/')
    if (defaultEntry === undefined) {
      const config = await parseConfig(opts)
      // Create a default entry unless specifically denied by config
      const shouldNotCreateRootRoute = Boolean(config.noRootRoute)
      if (shouldNotCreateRootRoute === false) {
        // Set the first found entry as the default entry
        const createdDefaultEntry = {
          node: {
            ...entries[0].node,
            route: '/',
          },
        }
        entries.unshift(createdDefaultEntry)
      }
    }
    entries.forEach(({ node: entry }, index) => {
      if (!entry) return;
      const next = index === entries.length - 1 ? null : entries[index + 1].node;
      const previous = index === 0 ? null : entries[index - 1].node;
      actions.createPage({
        component: entry.fullpath,
        path: entry.route,
        context: {
          entry,
          previous,
          next,
        },
      })
    })
  })
}; 
