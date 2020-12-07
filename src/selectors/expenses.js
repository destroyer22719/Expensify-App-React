const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expenses => {
    const startDateMatch = typeof startDate !== "number" || expenses.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expenses.created <= endDate;
    const textMatch = typeof text !== "string" || expenses.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

export default getVisibleExpenses;