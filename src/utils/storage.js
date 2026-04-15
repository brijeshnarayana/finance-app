// localStorage wrapper with versioning and type safety
const STORAGE_PREFIX = 'finapp_';
const STORAGE_VERSION = 1;

export const Storage = {
  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + key);
      if (raw === null) return defaultValue;
      const parsed = JSON.parse(raw);
      return parsed.v === STORAGE_VERSION ? parsed.data : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify({
        v: STORAGE_VERSION,
        data: value,
        ts: Date.now()
      }));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(STORAGE_PREFIX + key);
  },

  // Learning progress
  getLessonProgress(lessonId) {
    const progress = this.get('lesson_progress', {});
    return progress[lessonId] || { completed: false, actionItems: {}, quizScore: null, completedAt: null };
  },

  setLessonProgress(lessonId, data) {
    const progress = this.get('lesson_progress', {});
    progress[lessonId] = { ...progress[lessonId], ...data, updatedAt: Date.now() };
    this.set('lesson_progress', progress);
  },

  getCompletedLessons() {
    const progress = this.get('lesson_progress', {});
    return Object.entries(progress).filter(([, v]) => v.completed).map(([k]) => k);
  },

  getCompletedCount(category) {
    const progress = this.get('lesson_progress', {});
    return Object.entries(progress).filter(([k, v]) => v.completed && k.startsWith(category)).length;
  },

  // Daily tasks
  getDailyTasks(dateStr) {
    const tasks = this.get('daily_tasks', {});
    return tasks[dateStr] || [];
  },

  setDailyTasks(dateStr, tasks) {
    const allTasks = this.get('daily_tasks', {});
    allTasks[dateStr] = tasks;
    this.set('daily_tasks', allTasks);
  },

  // Weekly goals
  getWeeklyGoals(weekKey) {
    const goals = this.get('weekly_goals', {});
    return goals[weekKey] || null;
  },

  setWeeklyGoals(weekKey, goals) {
    const allGoals = this.get('weekly_goals', {});
    allGoals[weekKey] = goals;
    this.set('weekly_goals', allGoals);
  },

  // Monthly goals
  getMonthlyGoals(monthKey) {
    const goals = this.get('monthly_goals', {});
    return goals[monthKey] || null;
  },

  setMonthlyGoals(monthKey, goals) {
    const allGoals = this.get('monthly_goals', {});
    allGoals[monthKey] = goals;
    this.set('monthly_goals', allGoals);
  },

  // Streak tracking
  getStreak() {
    return this.get('streak', { current: 0, longest: 0, lastActiveDate: null });
  },

  updateStreak(dateStr) {
    return this.recalculateStreak();
  },

  recalculateStreak() {
    const log = this.get('activity_log', {});
    const activeDates = Object.keys(log).filter(d => log[d] > 0).sort();
    
    let current = 0;
    let longest = 0;
    let lastActiveDate = null;
    
    if (activeDates.length > 0) {
      let streak = 1;
      longest = 1;
      
      for (let i = 1; i < activeDates.length; i++) {
        const d1 = new Date(activeDates[i-1] + 'T00:00:00');
        const d2 = new Date(activeDates[i] + 'T00:00:00');
        const diffDays = Math.round((d2 - d1) / 86400000);
        
        if (diffDays === 1) {
          streak++;
          longest = Math.max(longest, streak);
        } else if (diffDays > 1) {
          streak = 1;
        }
      }
      
      const today = new Date().toISOString().split('T')[0];
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterday = yesterdayDate.toISOString().split('T')[0];
      
      const lastDate = activeDates[activeDates.length - 1];
      if (lastDate === today || lastDate === yesterday) {
        current = streak;
        lastActiveDate = lastDate;
      } else {
        current = 0;
        lastActiveDate = null;
      }
    }
    
    const streakObj = { current, longest, lastActiveDate };
    this.set('streak', streakObj);
    return streakObj;
  },

  // Activity log for heat map
  logActivity(dateStr) {
    const log = this.get('activity_log', {});
    log[dateStr] = (log[dateStr] || 0) + 1;
    this.set('activity_log', log);
    this.recalculateStreak();
  },

  unlogActivity(dateStr) {
    const log = this.get('activity_log', {});
    if (log[dateStr]) {
      log[dateStr] -= 1;
      if (log[dateStr] <= 0) {
        delete log[dateStr];
      }
    }
    this.set('activity_log', log);
    this.recalculateStreak();
  },

  getActivityLog() {
    return this.get('activity_log', {});
  },

  // Settings
  getSettings() {
    return this.get('settings', {
      topicsPerDay: 5,
      finnhubKey: '',
      newsApiKey: '',
      theme: 'dark',
      notificationsEnabled: true,
      learningStartDate: new Date().toISOString().split('T')[0]
    });
  },

  setSettings(settings) {
    this.set('settings', settings);
  },

  // Saved articles
  getSavedArticles() {
    return this.get('saved_articles', []);
  },

  saveArticle(article) {
    const articles = this.getSavedArticles();
    if (!articles.find(a => a.title === article.title)) {
      articles.unshift(article);
      this.set('saved_articles', articles);
    }
  },

  removeArticle(title) {
    const articles = this.getSavedArticles().filter(a => a.title !== title);
    this.set('saved_articles', articles);
  },

  // Lesson notes / journal
  getLessonNotes(lessonId) {
    const notes = this.get('lesson_notes', {});
    return notes[lessonId] || { text: '', aiResponse: null, lastUpdated: null };
  },

  setLessonNotes(lessonId, data) {
    const notes = this.get('lesson_notes', {});
    notes[lessonId] = { ...notes[lessonId], ...data, lastUpdated: Date.now() };
    this.set('lesson_notes', notes);
  },

  getAllNotes() {
    return this.get('lesson_notes', {});
  },

  // Export / Import
  exportAll() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(STORAGE_PREFIX)) {
        data[key] = localStorage.getItem(key);
      }
    }
    return JSON.stringify(data, null, 2);
  },

  importAll(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      Object.entries(data).forEach(([key, value]) => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.setItem(key, value);
        }
      });
      return true;
    } catch {
      return false;
    }
  },

  clearAll() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(STORAGE_PREFIX)) keys.push(key);
    }
    keys.forEach(k => localStorage.removeItem(k));
  }
};
