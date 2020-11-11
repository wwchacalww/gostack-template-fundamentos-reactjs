const formatDate = (date: string): string => {
  const newDate = Date.parse(date);
  return new Intl.DateTimeFormat('en-GB').format(newDate);
};
export default formatDate;
