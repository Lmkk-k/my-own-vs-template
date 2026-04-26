export const paginate = (query, { page = 1, limit = 10 }) => {
  const from = (page - 1) * limit
  const to = from + limit - 1
  return query.range(from, to)
}