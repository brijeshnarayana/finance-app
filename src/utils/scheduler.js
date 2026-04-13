import { Storage } from './storage.js';
import { Dates } from './dates.js';

// Dynamic scheduling engine for daily/weekly/monthly planning
export const Scheduler = {
  
  // Generate daily learning tasks based on progress
  generateDailyTasks(curricula, dateStr = Dates.today()) {
    const settings = Storage.getSettings();
    const topicsPerDay = settings.topicsPerDay || 5;
    const existingTasks = Storage.getDailyTasks(dateStr);
    
    if (existingTasks.length > 0) return existingTasks;

    const tasks = [];
    const categories = ['fin', 'biz', 'mkt'];
    const categoryNames = {
      fin: 'Finance & Economics',
      biz: 'Business & Entrepreneurship',
      mkt: 'Stock Market & Investments'
    };

    categories.forEach(cat => {
      const curriculum = curricula[cat] || [];
      const completedIds = Storage.getCompletedLessons();
      
      // Get unfinished lessons from yesterday first
      const yesterday = Dates.addDays(dateStr, -1);
      const yesterdayTasks = Storage.getDailyTasks(yesterday);
      const unfinishedYesterday = yesterdayTasks
        .filter(t => !t.completed && t.category === cat)
        .slice(0, 2);

      // Get next lessons in sequence
      const nextLessons = curriculum
        .filter(l => !completedIds.includes(l.id))
        .filter(l => !unfinishedYesterday.find(u => u.lessonId === l.id))
        .slice(0, topicsPerDay - unfinishedYesterday.length);

      // Combine: unfinished yesterday + new lessons
      const dayLessons = [
        ...unfinishedYesterday.map(t => ({
          id: `task-${dateStr}-${t.lessonId}`,
          lessonId: t.lessonId,
          title: t.title,
          category: cat,
          categoryName: categoryNames[cat],
          module: t.module,
          completed: false,
          carryOver: true,
          estimatedMinutes: t.estimatedMinutes || 15
        })),
        ...nextLessons.map(l => ({
          id: `task-${dateStr}-${l.id}`,
          lessonId: l.id,
          title: l.title,
          category: cat,
          categoryName: categoryNames[cat],
          module: l.module,
          completed: false,
          carryOver: false,
          estimatedMinutes: l.estimatedMinutes || 15
        }))
      ];

      tasks.push(...dayLessons);
    });

    Storage.setDailyTasks(dateStr, tasks);
    return tasks;
  },

  // Generate weekly goals
  generateWeeklyGoals(curricula, dateStr = Dates.today()) {
    const weekKey = Dates.getWeekKey(dateStr);
    const existing = Storage.getWeeklyGoals(weekKey);
    if (existing) return existing;

    const settings = Storage.getSettings();
    const topicsPerDay = settings.topicsPerDay || 5;
    const weeklyTargetPerCat = topicsPerDay * 5; // 5 working days

    const goals = {
      weekKey,
      startDate: Dates.getWeekDates(dateStr)[0],
      endDate: Dates.getWeekDates(dateStr)[6],
      categories: {},
      reorganized: false,
      reorganizedAt: null,
      createdAt: Date.now()
    };

    const categories = { fin: 'Finance & Economics', biz: 'Business & Entrepreneurship', mkt: 'Stock Market & Investments' };

    Object.entries(categories).forEach(([cat, name]) => {
      const curriculum = curricula[cat] || [];
      const completedIds = Storage.getCompletedLessons();
      const remaining = curriculum.filter(l => !completedIds.includes(l.id));
      const target = Math.min(weeklyTargetPerCat, remaining.length);

      goals.categories[cat] = {
        name,
        targetLessons: target,
        completedLessons: 0,
        milestones: [
          { title: `Complete ${Math.ceil(target / 2)} ${name} lessons`, done: false },
          { title: `Finish 1 ${name} module`, done: false },
          { title: `Apply 3 ${name} concepts in real life`, done: false }
        ]
      };
    });

    goals.categories.general = {
      name: 'General',
      milestones: [
        { title: 'Review AI News daily and note 3 startup opportunities', done: false },
        { title: 'Analyze daily stock watchlist and track 5 companies', done: false },
        { title: 'Maintain learning streak for the full week', done: false }
      ]
    };

    Storage.setWeeklyGoals(weekKey, goals);
    return goals;
  },

  // Generate monthly goals
  generateMonthlyGoals(curricula, dateStr = Dates.today()) {
    const monthKey = Dates.getMonthKey(dateStr);
    const existing = Storage.getMonthlyGoals(monthKey);
    if (existing) return existing;

    const settings = Storage.getSettings();
    const topicsPerDay = settings.topicsPerDay || 5;
    const monthlyTarget = topicsPerDay * 22; // ~22 working days

    const goals = {
      monthKey,
      categories: {},
      reorganized: false,
      reorganizedAt: null,
      createdAt: Date.now()
    };

    const categories = { fin: 'Finance & Economics', biz: 'Business & Entrepreneurship', mkt: 'Stock Market & Investments' };

    Object.entries(categories).forEach(([cat, name]) => {
      const curriculum = curricula[cat] || [];
      const completedIds = Storage.getCompletedLessons();
      const remaining = curriculum.filter(l => !completedIds.includes(l.id));
      const target = Math.min(monthlyTarget, remaining.length);

      goals.categories[cat] = {
        name,
        targetLessons: target,
        completedLessons: 0,
        milestones: [
          { title: `Master ${Math.ceil(target * 0.25)} ${name} topics`, done: false },
          { title: `Complete 2 full ${name} modules`, done: false },
          { title: `Build real ${name} implementation project`, done: false },
          { title: `Teach 1 ${name} concept to someone`, done: false }
        ]
      };
    });

    Storage.setMonthlyGoals(monthKey, goals);
    return goals;
  },

  // Auto-reorganize weekly goals (trigger on Wednesday if no Mon-Wed updates)
  checkWeeklyReorg(curricula, dateStr = Dates.today()) {
    const dayOfWeek = Dates.getDayOfWeek(dateStr);
    if (dayOfWeek < 3) return null; // Only check Wed+

    const weekKey = Dates.getWeekKey(dateStr);
    const goals = Storage.getWeeklyGoals(weekKey);
    if (!goals || goals.reorganized) return null;

    const weekDates = Dates.getWeekDates(dateStr);
    const monToWed = weekDates.slice(0, 3);
    
    let totalCompleted = 0;
    monToWed.forEach(d => {
      const tasks = Storage.getDailyTasks(d);
      totalCompleted += tasks.filter(t => t.completed).length;
    });

    // If less than 20% completion Mon-Wed, reorganize
    const totalPlanned = monToWed.length * 15; // 15 tasks per day (5 per cat)
    if (totalCompleted / Math.max(totalPlanned, 1) < 0.2) {
      return this.reorganizeWeekly(curricula, goals, dateStr);
    }
    return null;
  },

  reorganizeWeekly(curricula, goals, dateStr) {
    const weekDates = Dates.getWeekDates(dateStr);
    const remaining = weekDates.filter(d => d >= dateStr);
    const daysLeft = remaining.length;

    Object.keys(goals.categories).forEach(cat => {
      if (cat === 'general') return;
      const catGoal = goals.categories[cat];
      const unfinished = catGoal.targetLessons - catGoal.completedLessons;
      catGoal.targetLessons = Math.ceil(unfinished * 0.7); // Reduce by 30%
      catGoal.milestones.forEach(m => {
        if (!m.done) m.title = '(Adjusted) ' + m.title;
      });
    });

    goals.reorganized = true;
    goals.reorganizedAt = Date.now();
    Storage.setWeeklyGoals(goals.weekKey, goals);
    return goals;
  },

  // Auto-reorganize monthly goals (trigger after day 15 if < 40% progress)
  checkMonthlyReorg(curricula, dateStr = Dates.today()) {
    const dayOfMonth = Dates.getDayOfMonth(dateStr);
    if (dayOfMonth < 16) return null;

    const monthKey = Dates.getMonthKey(dateStr);
    const goals = Storage.getMonthlyGoals(monthKey);
    if (!goals || goals.reorganized) return null;

    let totalTarget = 0;
    let totalCompleted = 0;

    Object.keys(goals.categories).forEach(cat => {
      if (cat === 'general') return;
      totalTarget += goals.categories[cat].targetLessons;
      totalCompleted += goals.categories[cat].completedLessons;
    });

    if (totalCompleted / Math.max(totalTarget, 1) < 0.4) {
      return this.reorganizeMonthly(goals, dateStr);
    }
    return null;
  },

  reorganizeMonthly(goals, dateStr) {
    const dayOfMonth = Dates.getDayOfMonth(dateStr);
    const [year, month] = dateStr.split('-').map(Number);
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysLeft = daysInMonth - dayOfMonth;

    Object.keys(goals.categories).forEach(cat => {
      if (cat === 'general') return;
      const catGoal = goals.categories[cat];
      const unfinished = catGoal.targetLessons - catGoal.completedLessons;
      catGoal.targetLessons = catGoal.completedLessons + Math.ceil(unfinished * 0.6);
      catGoal.milestones.forEach(m => {
        if (!m.done) m.title = '(Revised) ' + m.title;
      });
    });

    goals.reorganized = true;
    goals.reorganizedAt = Date.now();
    Storage.setMonthlyGoals(goals.monthKey, goals);
    return goals;
  },

  // Update completion counts
  updateGoalProgress(curricula, dateStr = Dates.today()) {
    const weekKey = Dates.getWeekKey(dateStr);
    const monthKey = Dates.getMonthKey(dateStr);
    
    const weekGoals = Storage.getWeeklyGoals(weekKey);
    const monthGoals = Storage.getMonthlyGoals(monthKey);

    const categories = ['fin', 'biz', 'mkt'];

    categories.forEach(cat => {
      const completed = Storage.getCompletedCount(cat);
      if (weekGoals && weekGoals.categories[cat]) {
        weekGoals.categories[cat].completedLessons = completed;
      }
      if (monthGoals && monthGoals.categories[cat]) {
        monthGoals.categories[cat].completedLessons = completed;
      }
    });

    if (weekGoals) Storage.setWeeklyGoals(weekKey, weekGoals);
    if (monthGoals) Storage.setMonthlyGoals(monthKey, monthGoals);
  }
};
