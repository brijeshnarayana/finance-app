// Date utility functions
export const Dates = {
  today() {
    return new Date().toISOString().split('T')[0];
  },

  todayDate() {
    return new Date();
  },

  format(dateStr, style = 'long') {
    const d = new Date(dateStr + 'T00:00:00');
    if (style === 'long') return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if (style === 'medium') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    if (style === 'short') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (style === 'weekday') return d.toLocaleDateString('en-US', { weekday: 'short' });
    return dateStr;
  },

  getWeekKey(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const weekNum = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
    return `${d.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
  },

  getMonthKey(dateStr) {
    return dateStr.slice(0, 7);
  },

  getWeekDates(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const day = d.getDay();
    const monday = new Date(d);
    monday.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  },

  getMonthDates(dateStr) {
    const [year, month] = dateStr.split('-').map(Number);
    const daysInMonth = new Date(year, month, 0).getDate();
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(`${year}-${String(month).padStart(2, '0')}-${String(i).padStart(2, '0')}`);
    }
    return dates;
  },

  getDayOfWeek(dateStr) {
    return new Date(dateStr + 'T00:00:00').getDay();
  },

  getDayOfMonth(dateStr) {
    return new Date(dateStr + 'T00:00:00').getDate();
  },

  addDays(dateStr, days) {
    const d = new Date(dateStr + 'T00:00:00');
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },

  daysBetween(dateStr1, dateStr2) {
    const d1 = new Date(dateStr1 + 'T00:00:00');
    const d2 = new Date(dateStr2 + 'T00:00:00');
    return Math.round((d2 - d1) / 86400000);
  },

  isToday(dateStr) {
    return dateStr === this.today();
  },

  isPast(dateStr) {
    return dateStr < this.today();
  },

  getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  },

  getRelativeTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
};
