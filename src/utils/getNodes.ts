const getNodes = <T>(data: { edges: { node: T }[] }): T[] =>
  data.edges.map(({ node }) => node)

export default getNodes
