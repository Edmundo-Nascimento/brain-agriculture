export function getDayAndWeekday(dateString: string) {
  const date = new Date(dateString);

  const daysOfWeekAbbr = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const dayOfWeek = daysOfWeekAbbr[date.getUTCDay()];

  const dayOfMonth = date.getUTCDate();

  return {
    dayOfWeek: dayOfWeek,
    dayOfMonth: dayOfMonth
  };
}