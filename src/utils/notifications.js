// Browser notification system
export const Notifications = {
  async requestPermission() {
    if (!('Notification' in window)) return false;
    if (Notification.permission === 'granted') return true;
    const result = await Notification.requestPermission();
    return result === 'granted';
  },

  isSupported() {
    return 'Notification' in window;
  },

  isGranted() {
    return this.isSupported() && Notification.permission === 'granted';
  },

  send(title, body, icon = '📚') {
    if (!this.isGranted()) return;
    try {
      new Notification(title, {
        body,
        icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`,
        badge: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📊</text></svg>`,
        tag: 'finapp-' + Date.now(),
        silent: false
      });
    } catch (e) {
      console.log('Notification failed:', e);
    }
  },

  scheduleDailyReminder() {
    // Check every minute if it's time for a reminder
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Morning reminder at 9:00 AM
      if (hours === 9 && minutes === 0) {
        this.send(
          '🌅 Time to Learn!',
          'Your daily finance & business lessons are ready. Start your learning streak!',
          '📖'
        );
      }
      
      // Evening reminder at 7:00 PM
      if (hours === 19 && minutes === 0) {
        this.send(
          '🌙 Don\'t Forget!',
          'Have you completed today\'s lessons? Keep your streak alive!',
          '🔥'
        );
      }
    };

    setInterval(checkTime, 60000);
    console.log('Daily reminders scheduled');
  },

  sendLessonComplete(title) {
    this.send('✅ Lesson Complete!', `Great job finishing "${title}"! Keep going!`, '🎉');
  },

  sendStreakUpdate(count) {
    this.send(`🔥 ${count}-Day Streak!`, `You're on fire! ${count} consecutive days of learning!`, '🔥');
  },

  sendWeeklyReorg() {
    this.send('📋 Weekly Plan Updated', 'Your weekly goals have been reorganized based on your progress.', '📋');
  },

  sendMonthlyReorg() {
    this.send('📅 Monthly Plan Updated', 'Your monthly goals have been adjusted. Check the tracker!', '📅');
  }
};
