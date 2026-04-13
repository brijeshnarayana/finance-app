// FinanceOS - Main Application Entry Point
import { Router } from './utils/router.js';
import { Storage } from './utils/storage.js';
import { Dates } from './utils/dates.js';
import { Scheduler } from './utils/scheduler.js';
import { API } from './utils/api.js';
import { Notifications } from './utils/notifications.js';
import { financeCurriculum } from './data/finance-curriculum.js';
import { businessCurriculum } from './data/business-curriculum.js';
import { marketCurriculum } from './data/market-curriculum.js';
import { sipWatchlist } from './data/sip-watchlist.js';

// ============ GLOBALS ============
const router = new Router();
const curricula = {
  fin: financeCurriculum,
  biz: businessCurriculum,
  mkt: marketCurriculum
};

const categoryMeta = {
  fin: { name: 'Finance & Economics', icon: '💰', color: 'finance', accent: '#34d399' },
  biz: { name: 'Business & Startups', icon: '🚀', color: 'business', accent: '#a78bfa' },
  mkt: { name: 'Stock Market', icon: '📈', color: 'market', accent: '#fb923c' }
};

const motivationalQuotes = [
  { text: "The stock market is a device for transferring money from the impatient to the patient.", author: "Warren Buffett" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Compound interest is the eighth wonder of the world.", author: "Albert Einstein" },
  { text: "Do not save what is left after spending; spend what is left after saving.", author: "Warren Buffett" },
  { text: "Risk comes from not knowing what you're doing.", author: "Warren Buffett" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" }
];

// ============ TOAST SYSTEM ============
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span>${icons[type] || '📌'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ============ MODAL SYSTEM ============
function showModal(html) {
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// ============ PROGRESS HELPERS ============
function getProgress(cat) {
  const total = curricula[cat].length;
  const completed = Storage.getCompletedCount(cat);
  return { total, completed, pct: total ? Math.round((completed / total) * 100) : 0 };
}

function updateNavBadges() {
  ['fin', 'biz', 'mkt'].forEach(cat => {
    const el = document.getElementById(`nav-badge-${cat}`);
    if (el) el.textContent = `${getProgress(cat).pct}%`;
  });
  const streak = Storage.getStreak();
  const el = document.getElementById('streak-count');
  if (el) el.textContent = streak.current;
}

function renderProgressRing(pct, size = 80, stroke = 6, color = '#34d399') {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (pct / 100) * circ;
  return `
    <div class="progress-ring-container" style="width:${size}px;height:${size}px">
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${radius}" stroke="rgba(255,255,255,0.06)" stroke-width="${stroke}" fill="none"/>
        <circle cx="${size/2}" cy="${size/2}" r="${radius}" stroke="${color}" stroke-width="${stroke}" fill="none"
          stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
          transform="rotate(-90 ${size/2} ${size/2})" style="transition: stroke-dashoffset 1s ease"/>
      </svg>
      <span class="progress-ring-text" style="color:${color}">${pct}%</span>
    </div>
  `;
}

// ============ PAGE: DASHBOARD ============
function renderDashboard() {
  document.getElementById('topbar-title').textContent = 'Dashboard';
  document.getElementById('topbar-breadcrumb').textContent = Dates.getGreeting() + '! Ready to learn?';

  const today = Dates.today();
  const streak = Storage.getStreak();
  const totalCompleted = Storage.getCompletedLessons().length;
  const totalLessons = Object.values(curricula).reduce((sum, c) => sum + c.length, 0);
  const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  
  // Generate daily tasks
  const dailyTasks = Scheduler.generateDailyTasks(curricula, today);
  Scheduler.generateWeeklyGoals(curricula, today);
  Scheduler.generateMonthlyGoals(curricula, today);

  const completedToday = dailyTasks.filter(t => t.completed).length;

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <!-- Quote Banner -->
    <div class="quote-banner animate-fade-in">
      <div class="quote-text">${quote.text}</div>
      <div class="quote-author">— ${quote.author}</div>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-4 mb-6 stagger">
      <div class="card stat-card card-glow-finance">
        ${renderProgressRing(Math.round((totalCompleted/totalLessons)*100), 70, 5, '#34d399')}
        <div class="stat-label mt-2">Overall Progress</div>
        <div class="text-xs text-muted mt-1">${totalCompleted}/${totalLessons} lessons</div>
      </div>
      <div class="card stat-card card-glow-market">
        <div class="stat-value" style="color:var(--accent-market)">🔥 ${streak.current}</div>
        <div class="stat-label">Day Streak</div>
        <div class="text-xs text-muted mt-1">Best: ${streak.longest} days</div>
      </div>
      <div class="card stat-card card-glow-business">
        <div class="stat-value" style="color:var(--accent-business)">${completedToday}/${dailyTasks.length}</div>
        <div class="stat-label">Today's Tasks</div>
        <div class="text-xs text-muted mt-1">${dailyTasks.length - completedToday} remaining</div>
      </div>
      <div class="card stat-card card-glow-news">
        <div class="stat-value" style="color:var(--accent-news)">${Math.round(totalCompleted * 15 / 60)}h</div>
        <div class="stat-label">Hours Invested</div>
        <div class="text-xs text-muted mt-1">~15 min per lesson</div>
      </div>
    </div>

    <!-- Progress Bars -->
    <div class="card mb-6 animate-slide-up">
      <div class="section-header">
        <div class="section-title">Learning Progress</div>
      </div>
      ${['fin', 'biz', 'mkt'].map(cat => {
        const p = getProgress(cat);
        const meta = categoryMeta[cat];
        return `
          <div style="margin-bottom:16px">
            <div class="flex justify-between items-center mb-2">
              <div class="flex items-center gap-2">
                <span>${meta.icon}</span>
                <span class="text-sm font-bold">${meta.name}</span>
              </div>
              <span class="font-mono text-sm" style="color:${meta.accent}">${p.completed}/${p.total}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill ${meta.color}" style="width:${p.pct}%"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Daily Learning Queue -->
    <div class="grid grid-3 mb-6">
      ${['fin', 'biz', 'mkt'].map(cat => {
        const meta = categoryMeta[cat];
        const catTasks = dailyTasks.filter(t => t.category === cat);
        return `
          <div class="card card-glow-${meta.color} animate-slide-up">
            <div class="section-header">
              <div>
                <div class="flex items-center gap-2">
                  <span>${meta.icon}</span>
                  <span class="section-title text-lg">${meta.name.split(' ')[0]}</span>
                </div>
                <div class="section-subtitle">Today's Topics</div>
              </div>
              <span class="badge badge-${meta.color}">${catTasks.filter(t => t.completed).length}/${catTasks.length}</span>
            </div>
            <div class="flex flex-col gap-2">
              ${catTasks.length ? catTasks.map(task => `
                <div class="task-card ${task.completed ? 'completed' : ''}" data-task-id="${task.id}" data-lesson-id="${task.lessonId}">
                  <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="event.stopPropagation(); window.toggleTask('${task.id}', '${task.lessonId}')"></div>
                  <div class="task-card-body">
                    <div class="task-card-title">${task.title}</div>
                    <div class="task-card-meta">
                      <span>${task.module}</span>
                      <span>· ${task.estimatedMinutes} min</span>
                      ${task.carryOver ? '<span class="badge badge-warning" style="font-size:0.65rem">Carry Over</span>' : ''}
                    </div>
                  </div>
                </div>
              `).join('') : '<div class="text-muted text-sm" style="padding:12px">All caught up! 🎉</div>'}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Quick Actions -->
    <div class="card animate-slide-up">
      <div class="section-title mb-4">Quick Actions</div>
      <div class="grid grid-4">
        <a class="quick-action card-sm pointer" href="#news">
          <div class="quick-action-icon" style="background:var(--accent-news-dim)">🤖</div>
          <div class="quick-action-label">AI News</div>
        </a>
        <a class="quick-action card-sm pointer" href="#market">
          <div class="quick-action-icon" style="background:var(--accent-market-dim)">📊</div>
          <div class="quick-action-label">Stock Analysis</div>
        </a>
        <a class="quick-action card-sm pointer" href="#tracker">
          <div class="quick-action-icon" style="background:var(--accent-tracker-dim)">🎯</div>
          <div class="quick-action-label">Goal Tracker</div>
        </a>
        <a class="quick-action card-sm pointer" href="#settings">
          <div class="quick-action-icon" style="background:var(--accent-business-dim)">⚙️</div>
          <div class="quick-action-label">Settings</div>
        </a>
      </div>
    </div>
  `;

  // Click on task card to open lesson
  content.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('click', () => {
      const lessonId = card.dataset.lessonId;
      router.navigate(`lesson/${lessonId}`);
    });
  });
}

// Toggle task completion
window.toggleTask = function(taskId, lessonId) {
  const today = Dates.today();
  const tasks = Storage.getDailyTasks(today);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    Storage.setDailyTasks(today, tasks);

    if (task.completed) {
      Storage.setLessonProgress(lessonId, { completed: true, completedAt: Date.now() });
      Storage.updateStreak(today);
      Storage.logActivity(today);
      Scheduler.updateGoalProgress(curricula, today);
      Notifications.sendLessonComplete(task.title);
      showToast(`Completed: ${task.title}`);
    } else {
      Storage.setLessonProgress(lessonId, { completed: false, completedAt: null });
    }
    updateNavBadges();
    renderDashboard();
  }
};

// ============ PAGE: LEARNING ============
function renderLearning(catParam) {
  const cat = catParam || 'fin';
  const meta = categoryMeta[cat];
  const curriculum = curricula[cat];
  if (!meta || !curriculum) return;

  document.getElementById('topbar-title').textContent = meta.name;
  document.getElementById('topbar-breadcrumb').textContent = 'Learning Curriculum';

  const completedIds = Storage.getCompletedLessons();
  const modules = [...new Set(curriculum.map(l => l.module))];
  const progress = getProgress(cat);

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <!-- Category Tabs -->
    <div class="tabs mb-6">
      ${Object.entries(categoryMeta).map(([key, m]) => `
        <a class="tab ${key === cat ? 'active' : ''}" href="#learning/${key}" style="${key === cat ? `border-bottom-color:${m.accent};color:${m.accent}` : ''}">${m.icon} ${m.name}</a>
      `).join('')}
    </div>

    <!-- Overall progress -->
    <div class="card mb-6 animate-fade-in">
      <div class="flex items-center gap-4">
        ${renderProgressRing(progress.pct, 64, 5, meta.accent)}
        <div>
          <div class="font-bold text-lg">${progress.completed} of ${progress.total} lessons completed</div>
          <div class="text-muted text-sm">${progress.total - progress.completed} lessons remaining</div>
        </div>
      </div>
    </div>

    <!-- Module List -->
    <div class="flex flex-col gap-4 stagger">
      ${modules.map((mod, mi) => {
        const modLessons = curriculum.filter(l => l.module === mod);
        const modCompleted = modLessons.filter(l => completedIds.includes(l.id)).length;
        const modPct = Math.round((modCompleted / modLessons.length) * 100);
        return `
          <div class="card card-glow-${meta.color}">
            <div class="flex justify-between items-center mb-4" style="cursor:pointer" onclick="this.parentElement.querySelector('.module-lessons').classList.toggle('hidden')">
              <div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-${meta.color}">Module ${mi + 1}</span>
                  <span class="font-bold">${mod}</span>
                </div>
                <div class="text-xs text-muted mt-1">${modCompleted}/${modLessons.length} lessons · ${modPct}% complete</div>
              </div>
              <span class="text-muted">▼</span>
            </div>
            <div class="progress-bar mb-4">
              <div class="progress-bar-fill ${meta.color}" style="width:${modPct}%"></div>
            </div>
            <div class="module-lessons flex flex-col gap-2 ${mi > 0 ? 'hidden' : ''}">
              ${modLessons.map((lesson, li) => {
                const isCompleted = completedIds.includes(lesson.id);
                return `
                  <a class="task-card ${isCompleted ? 'completed' : ''}" href="#lesson/${lesson.id}" style="text-decoration:none">
                    <div class="task-checkbox ${isCompleted ? 'checked' : ''}"></div>
                    <div class="task-card-body">
                      <div class="task-card-title">${lesson.title}</div>
                      <div class="task-card-meta">
                        <span>Lesson ${li + 1}</span>
                        <span>· ${lesson.estimatedMinutes} min</span>
                      </div>
                    </div>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ============ PAGE: LESSON ============
function renderLesson(lessonId) {
  let lesson = null;
  let cat = null;
  for (const [key, arr] of Object.entries(curricula)) {
    const found = arr.find(l => l.id === lessonId);
    if (found) { lesson = found; cat = key; break; }
  }
  if (!lesson) {
    document.getElementById('app-content').innerHTML = '<div class="empty-state"><div class="empty-state-icon">📚</div><div class="empty-state-title">Lesson not found</div></div>';
    return;
  }

  const meta = categoryMeta[cat];
  const progress = Storage.getLessonProgress(lessonId);
  const curriculum = curricula[cat];
  const idx = curriculum.findIndex(l => l.id === lessonId);
  const prevLesson = idx > 0 ? curriculum[idx - 1] : null;
  const nextLesson = idx < curriculum.length - 1 ? curriculum[idx + 1] : null;

  document.getElementById('topbar-title').textContent = lesson.title;
  document.getElementById('topbar-breadcrumb').textContent = `${meta.name} → ${lesson.module}`;

  const c = lesson.content;
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="lesson-container animate-fade-in">
      <div class="lesson-header">
        <div class="lesson-module-badge">
          <span class="badge badge-${meta.color}">${meta.icon} ${lesson.module}</span>
        </div>
        <h1 class="lesson-title">${lesson.title}</h1>
        <div class="lesson-meta">
          <span>⏱ ${lesson.estimatedMinutes} min read</span>
          <span>📖 Lesson ${idx + 1} of ${curriculum.length}</span>
          ${progress.completed ? '<span class="badge badge-success">✅ Completed</span>' : ''}
        </div>
      </div>

      <!-- Theory -->
      <div class="lesson-section">
        <div class="lesson-section-title">📖 Core Concept</div>
        <div class="card card-lg">
          <div class="lesson-section-content">${formatContent(c.theory)}</div>
        </div>
      </div>

      <!-- Real World Example -->
      <div class="lesson-section">
        <div class="lesson-section-title">🌍 Real-World Example</div>
        <div class="lesson-callout ${meta.color}">
          <div class="lesson-section-content">${formatContent(c.realWorldExample)}</div>
        </div>
      </div>

      <!-- Implementation -->
      <div class="lesson-section">
        <div class="lesson-section-title">🛠️ Implementation Strategy</div>
        <div class="card card-lg" style="border-left: 3px solid ${meta.accent}">
          <div class="lesson-section-content">${formatContent(c.implementation)}</div>
        </div>
      </div>

      <!-- Action Items -->
      <div class="lesson-section">
        <div class="lesson-section-title">✅ Action Items</div>
        <div class="card card-lg">
          ${c.actionItems.map((item, i) => {
            const aiKey = `ai_${i}`;
            const checked = progress.actionItems && progress.actionItems[aiKey];
            return `
              <div class="lesson-action-item">
                <div class="task-checkbox ${checked ? 'checked' : ''}" onclick="window.toggleActionItem('${lessonId}', '${aiKey}')"></div>
                <span class="lesson-section-content">${item}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Quiz -->
      <div class="lesson-section">
        <div class="lesson-section-title">🧠 Quick Quiz</div>
        <div id="quiz-container">
          ${c.quiz.map((q, qi) => `
            <div class="card mb-4" id="quiz-${qi}">
              <div class="font-bold mb-4">${qi + 1}. ${q.q}</div>
              <div class="flex flex-col gap-2">
                ${q.options.map((opt, oi) => `
                  <div class="lesson-quiz-option" onclick="window.checkQuiz(${qi}, ${oi}, ${q.answer}, '${lessonId}')">
                    <div class="lesson-quiz-option-marker">${String.fromCharCode(65 + oi)}</div>
                    <span>${opt}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Key Takeaways -->
      <div class="lesson-section">
        <div class="lesson-section-title">💡 Key Takeaways</div>
        <div class="card card-lg" style="background: linear-gradient(135deg, rgba(52, 211, 153, 0.05), rgba(56, 189, 248, 0.05))">
          <ul style="list-style:none;padding:0">
            ${c.keyTakeaways.map(t => `<li style="padding:6px 0;display:flex;gap:8px"><span style="color:${meta.accent}">→</span> ${t}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Complete Button -->
      <div class="text-center mt-8 mb-6">
        <button class="btn ${progress.completed ? 'btn-secondary' : 'btn-primary'} btn-lg" id="complete-btn" onclick="window.completeLesson('${lessonId}')">
          ${progress.completed ? '✅ Completed — Mark Incomplete' : '🎯 Mark as Complete'}
        </button>
      </div>

      <!-- Navigation -->
      <div class="lesson-nav">
        ${prevLesson ? `<a class="btn btn-secondary" href="#lesson/${prevLesson.id}">← ${prevLesson.title}</a>` : '<div></div>'}
        ${nextLesson ? `<a class="btn btn-primary" href="#lesson/${nextLesson.id}">${nextLesson.title} →</a>` : '<div></div>'}
      </div>
    </div>
  `;
}

function formatContent(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p style="margin-top:12px">')
    .replace(/\n• /g, '<br>• ')
    .replace(/\n(\d+)\. /g, '<br>$1. ')
    .replace(/\n/g, '<br>');
}

window.toggleActionItem = function(lessonId, aiKey) {
  const progress = Storage.getLessonProgress(lessonId);
  if (!progress.actionItems) progress.actionItems = {};
  progress.actionItems[aiKey] = !progress.actionItems[aiKey];
  Storage.setLessonProgress(lessonId, progress);
  renderLesson(lessonId);
};

window.checkQuiz = function(quizIdx, selected, correct, lessonId) {
  const container = document.getElementById(`quiz-${quizIdx}`);
  const options = container.querySelectorAll('.lesson-quiz-option');
  options.forEach((opt, i) => {
    opt.classList.remove('correct', 'incorrect');
    if (i === correct) opt.classList.add('correct');
    if (i === selected && i !== correct) opt.classList.add('incorrect');
    opt.style.pointerEvents = 'none';
  });
};

window.completeLesson = function(lessonId) {
  const progress = Storage.getLessonProgress(lessonId);
  const newState = !progress.completed;
  Storage.setLessonProgress(lessonId, { completed: newState, completedAt: newState ? Date.now() : null });

  if (newState) {
    Storage.updateStreak(Dates.today());
    Storage.logActivity(Dates.today());
    Scheduler.updateGoalProgress(curricula, Dates.today());
    showToast('Lesson completed! Keep going! 🎉');
    Notifications.sendLessonComplete(document.querySelector('.lesson-title')?.textContent || 'Lesson');
  } else {
    showToast('Lesson marked as incomplete', 'info');
  }
  updateNavBadges();
  renderLesson(lessonId);
};

// ============ PAGE: AI NEWS ============
async function renderNews() {
  document.getElementById('topbar-title').textContent = 'AI News & Intelligence';
  document.getElementById('topbar-breadcrumb').textContent = 'Daily AI & Tech Updates';

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="flex items-center gap-2 mb-4 animate-fade-in">
      <div class="tag active" onclick="window.filterNews('all')">All</div>
      <div class="tag" onclick="window.filterNews('ai')">🤖 AI</div>
      <div class="tag" onclick="window.filterNews('technology')">💻 Technology</div>
      <div class="tag" onclick="window.filterNews('startups')">🚀 Startups</div>
    </div>
    <div id="news-grid" class="grid grid-auto stagger">
      ${Array(6).fill(0).map(() => '<div class="card" style="height:200px"><div class="skeleton" style="height:100%;width:100%"></div></div>').join('')}
    </div>
  `;

  const news = await API.getAINews('all');
  renderNewsGrid(news);
}

function renderNewsGrid(articles) {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  
  const saved = Storage.getSavedArticles();
  grid.innerHTML = articles.map(article => {
    const isSaved = saved.find(a => a.title === article.title);
    const timeAgo = Dates.getRelativeTime(new Date(article.pubDate).getTime());
    const cats = (article.category || []).map(c => `<span class="tag" style="pointer-events:none">${c}</span>`).join('');
    const isStartupRelated = (article.keywords || []).some(k => ['startup', 'investment', 'funding'].includes(k.toLowerCase()));
    
    return `
      <div class="card news-card card-glow-news animate-slide-up">
        <div class="news-card-source">
          <span class="news-card-source-name">${article.source_id || 'Source'}</span>
          <span class="news-card-time">${timeAgo}</span>
        </div>
        <div class="news-card-title">${article.title}</div>
        <div class="news-card-desc">${article.description || ''}</div>
        <div class="news-card-tags">
          ${cats}
          ${isStartupRelated ? '<span class="badge badge-market">💡 Startup Opportunity</span>' : ''}
        </div>
        <div class="news-card-actions">
          <button class="btn btn-sm ${isSaved ? 'btn-success' : 'btn-secondary'}" onclick="window.toggleSaveArticle(this, '${encodeURIComponent(JSON.stringify({title:article.title,description:article.description,source_id:article.source_id}))}')">
            ${isSaved ? '📌 Saved' : '📌 Save'}
          </button>
          ${article.link && article.link !== '#' ? `<a href="${article.link}" target="_blank" class="btn btn-sm btn-secondary">🔗 Read</a>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

window.filterNews = async function(category) {
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  const news = await API.getAINews(category);
  renderNewsGrid(news);
};

window.toggleSaveArticle = function(btn, encodedArticle) {
  const article = JSON.parse(decodeURIComponent(encodedArticle));
  const saved = Storage.getSavedArticles();
  if (saved.find(a => a.title === article.title)) {
    Storage.removeArticle(article.title);
    btn.className = 'btn btn-sm btn-secondary';
    btn.textContent = '📌 Save';
    showToast('Article removed from saved');
  } else {
    Storage.saveArticle(article);
    btn.className = 'btn btn-sm btn-success';
    btn.textContent = '📌 Saved';
    showToast('Article saved!');
  }
};

// ============ PAGE: STOCK MARKET ============
async function renderMarket() {
  document.getElementById('topbar-title').textContent = 'Stock Market Analysis';
  document.getElementById('topbar-breadcrumb').textContent = 'Daily Market Intelligence & SIP Suggestions';

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="disclaimer-banner animate-fade-in">
      ⚠️ <strong>Educational purposes only.</strong> This is not financial advice. Always do your own research before investing.
    </div>

    <!-- Tabs -->
    <div class="tabs" id="market-tabs">
      <div class="tab active" onclick="window.showMarketTab('watchlist')">📊 Watchlist</div>
      <div class="tab" onclick="window.showMarketTab('sip')">💰 SIP Strategies</div>
      <div class="tab" onclick="window.showMarketTab('news')">📰 Market News</div>
    </div>

    <div id="market-content">
      <div class="grid grid-auto stagger">
        ${Array(8).fill(0).map(() => '<div class="card" style="height:120px"><div class="skeleton" style="height:100%;width:100%"></div></div>').join('')}
      </div>
    </div>
  `;

  window.showMarketTab('watchlist');
}

window.showMarketTab = async function(tab) {
  document.querySelectorAll('#market-tabs .tab').forEach(t => t.classList.remove('active'));
  event?.target?.classList.add('active');

  const container = document.getElementById('market-content');

  if (tab === 'watchlist') {
    const allTickers = [
      ...sipWatchlist.blueChips.map(s => s.ticker),
      ...sipWatchlist.growth.slice(0, 4).map(s => s.ticker)
    ];
    const quotes = await API.getMultipleQuotes(allTickers);

    container.innerHTML = `
      <div class="section-header">
        <div class="section-title">Today's Watchlist</div>
      </div>
      <div class="grid grid-4 stagger">
        ${allTickers.map(ticker => {
          const q = quotes[ticker] || {};
          const isUp = q.d >= 0;
          const stock = [...sipWatchlist.blueChips, ...sipWatchlist.growth].find(s => s.ticker === ticker);
          return `
            <div class="card stock-card card-glow-${isUp ? 'finance' : 'market'}" style="cursor:pointer" onclick="window.showStockDetail('${ticker}')">
              <div class="stock-card-header">
                <div>
                  <div class="stock-ticker">${ticker}</div>
                  <div class="stock-name">${stock?.name || ticker}</div>
                </div>
                <div>
                  <div class="stock-price font-mono">$${(q.c || 0).toFixed(2)}</div>
                  <div class="stock-change ${isUp ? 'positive' : 'negative'} font-mono">
                    ${isUp ? '▲' : '▼'} ${Math.abs(q.d || 0).toFixed(2)} (${Math.abs(q.dp || 0).toFixed(2)}%)
                  </div>
                </div>
              </div>
              ${stock ? `<div class="text-xs text-muted mt-2">${stock.sector} · SIP Score: ${'⭐'.repeat(Math.floor(stock.sipScore/2))}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (tab === 'sip') {
    container.innerHTML = `
      <div class="section-header">
        <div>
          <div class="section-title">SIP Investment Strategies</div>
          <div class="section-subtitle">Curated portfolios for different risk appetites</div>
        </div>
      </div>
      <div class="grid grid-3 mb-6 stagger">
        ${Object.entries(sipWatchlist.sipStrategies).map(([key, strat]) => `
          <div class="card card-lg card-glow-finance">
            <div class="font-bold text-lg mb-2">${strat.name}</div>
            <div class="text-muted text-sm mb-4">${strat.description}</div>
            <div class="flex flex-col gap-2">
              ${strat.allocation.map(a => `
                <div class="flex justify-between items-center" style="padding:6px 0;border-bottom:1px solid var(--border-primary)">
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-sm">${a.ticker}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="progress-bar" style="width:80px;height:4px">
                      <div class="progress-bar-fill finance" style="width:${a.weight}%"></div>
                    </div>
                    <span class="font-mono text-sm" style="width:35px;text-align:right">${a.weight}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- All Companies -->
      <div class="section-title mb-4">📋 Complete Company Directory</div>
      ${['blueChips', 'growth', 'dividend', 'etfs'].map(cat => {
        const names = { blueChips: '🏛️ Blue Chips', growth: '🚀 Growth', dividend: '💵 Dividend', etfs: '📦 ETFs' };
        return `
          <div class="card mb-4">
            <div class="font-bold mb-4">${names[cat]}</div>
            <div class="table-wrapper">
              <table class="data-table">
                <thead><tr><th>Ticker</th><th>Name</th><th>Sector</th><th>SIP Score</th><th>Why Watch</th></tr></thead>
                <tbody>
                  ${sipWatchlist[cat].map(s => `
                    <tr>
                      <td><span class="font-mono font-bold">${s.ticker}</span></td>
                      <td>${s.name}</td>
                      <td><span class="badge badge-news">${s.sector}</span></td>
                      <td><span class="font-mono">${s.sipScore}/10</span></td>
                      <td class="text-sm text-muted">${s.reason.slice(0, 100)}...</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }).join('')}
    `;
  } else if (tab === 'news') {
    const news = await API.getMarketNews();
    container.innerHTML = `
      <div class="section-title mb-4">Market News & Headlines</div>
      <div class="flex flex-col gap-4 stagger">
        ${news.map(n => `
          <div class="card card-sm card-glow-market">
            <div class="flex justify-between items-center mb-2">
              <span class="badge badge-market">${n.source || 'Market'}</span>
              <span class="text-xs text-muted">${Dates.getRelativeTime(n.datetime * 1000)}</span>
            </div>
            <div class="font-bold">${n.headline}</div>
            <div class="text-sm text-muted mt-2">${n.summary || ''}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
};

window.showStockDetail = async function(ticker) {
  const profile = await API.getCompanyProfile(ticker);
  const quote = await API.getStockQuote(ticker);
  const stock = [...sipWatchlist.blueChips, ...sipWatchlist.growth, ...sipWatchlist.dividend, ...sipWatchlist.etfs].find(s => s.ticker === ticker);
  const isUp = quote.d >= 0;

  showModal(`
    <div class="modal-header">
      <div>
        <div class="font-bold text-xl">${profile.name || ticker}</div>
        <div class="text-muted text-sm">${profile.exchange || ''} · ${profile.finnhubIndustry || ''}</div>
      </div>
      <button class="modal-close" onclick="window.closeAppModal()">✕</button>
    </div>
    <div class="grid grid-2 gap-4 mb-6">
      <div class="card card-sm text-center">
        <div class="font-mono text-xl font-bold">$${(quote.c || 0).toFixed(2)}</div>
        <div class="font-mono text-sm ${isUp ? 'positive' : 'negative'}" style="color:${isUp ? 'var(--color-gain)' : 'var(--color-loss)'}">
          ${isUp ? '▲' : '▼'} $${Math.abs(quote.d || 0).toFixed(2)} (${Math.abs(quote.dp || 0).toFixed(2)}%)
        </div>
      </div>
      <div class="card card-sm">
        <div class="text-xs text-muted">Day Range</div>
        <div class="font-mono text-sm">$${(quote.l || 0).toFixed(2)} — $${(quote.h || 0).toFixed(2)}</div>
        <div class="text-xs text-muted mt-2">Prev Close</div>
        <div class="font-mono text-sm">$${(quote.pc || 0).toFixed(2)}</div>
      </div>
    </div>
    ${stock ? `
      <div class="card card-sm mb-4" style="border-left:3px solid var(--accent-finance)">
        <div class="text-xs text-muted font-bold mb-2">WHY WATCH THIS STOCK</div>
        <div class="text-sm" style="color:var(--text-secondary)">${stock.reason}</div>
        <div class="mt-2">
          <span class="badge badge-finance">SIP Score: ${stock.sipScore}/10</span>
        </div>
      </div>
    ` : ''}
  `);
};

window.closeAppModal = closeModal;

// ============ PAGE: TRACKER ============
function renderTracker() {
  document.getElementById('topbar-title').textContent = 'Goal Tracker';
  document.getElementById('topbar-breadcrumb').textContent = 'Daily · Weekly · Monthly Progress';

  const today = Dates.today();
  const weekKey = Dates.getWeekKey(today);
  const monthKey = Dates.getMonthKey(today);

  // Check for auto-reorganization
  const weekReorg = Scheduler.checkWeeklyReorg(curricula, today);
  const monthReorg = Scheduler.checkMonthlyReorg(curricula, today);
  if (weekReorg) { Notifications.sendWeeklyReorg(); showToast('Weekly goals reorganized!', 'info'); }
  if (monthReorg) { Notifications.sendMonthlyReorg(); showToast('Monthly goals reorganized!', 'info'); }

  const weeklyGoals = Storage.getWeeklyGoals(weekKey) || Scheduler.generateWeeklyGoals(curricula, today);
  const monthlyGoals = Storage.getMonthlyGoals(monthKey) || Scheduler.generateMonthlyGoals(curricula, today);

  // Activity heatmap data
  const activityLog = Storage.getActivityLog();
  const monthDates = Dates.getMonthDates(today);

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <!-- View Tabs -->
    <div class="tracker-tabs animate-fade-in">
      <button class="tracker-tab active" onclick="window.showTrackerView('daily', this)">📅 Daily</button>
      <button class="tracker-tab" onclick="window.showTrackerView('weekly', this)">📊 Weekly</button>
      <button class="tracker-tab" onclick="window.showTrackerView('monthly', this)">📈 Monthly</button>
    </div>

    <div id="tracker-content"></div>
  `;

  window.showTrackerView('daily', document.querySelector('.tracker-tab.active'));
}

window.showTrackerView = function(view, btn) {
  document.querySelectorAll('.tracker-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const container = document.getElementById('tracker-content');
  const today = Dates.today();

  if (view === 'daily') {
    const dailyTasks = Storage.getDailyTasks(today);
    const tasksByCategory = {};
    dailyTasks.forEach(t => {
      if (!tasksByCategory[t.category]) tasksByCategory[t.category] = [];
      tasksByCategory[t.category].push(t);
    });

    container.innerHTML = `
      <div class="section-header">
        <div>
          <div class="section-title">Today's Learning Plan</div>
          <div class="section-subtitle">${Dates.format(today, 'long')}</div>
        </div>
        <div class="badge ${dailyTasks.filter(t=>t.completed).length === dailyTasks.length && dailyTasks.length > 0 ? 'badge-success' : 'badge-warning'}">
          ${dailyTasks.filter(t=>t.completed).length}/${dailyTasks.length} Complete
        </div>
      </div>

      ${Object.entries(tasksByCategory).map(([cat, tasks]) => {
        const meta = categoryMeta[cat];
        return `
          <div class="card mb-4 card-glow-${meta.color} animate-slide-up">
            <div class="flex items-center gap-2 mb-4">
              <span>${meta.icon}</span>
              <span class="font-bold">${meta.name}</span>
              <span class="badge badge-${meta.color} ml-auto">${tasks.filter(t=>t.completed).length}/${tasks.length}</span>
            </div>
            <div class="flex flex-col gap-2">
              ${tasks.map(task => `
                <div class="task-card ${task.completed ? 'completed' : ''}" style="cursor:pointer">
                  <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="event.stopPropagation(); window.toggleTask('${task.id}', '${task.lessonId}')"></div>
                  <div class="task-card-body" onclick="location.hash='lesson/${task.lessonId}'">
                    <div class="task-card-title">${task.title}</div>
                    <div class="task-card-meta">
                      <span>${task.module}</span>
                      <span>· ${task.estimatedMinutes} min</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}

      ${dailyTasks.length === 0 ? '<div class="empty-state"><div class="empty-state-icon">🎉</div><div class="empty-state-title">No tasks for today!</div><div class="empty-state-desc">Navigate to the Dashboard to generate today\'s learning plan.</div></div>' : ''}

      <!-- Activity Heatmap -->
      <div class="card mt-6 animate-slide-up">
        <div class="section-title mb-4">📊 Activity Heatmap — ${Dates.format(today, 'medium').split(',')[0]}</div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:8px">
          ${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => `<div class="text-xs text-muted text-center">${d}</div>`).join('')}
        </div>
        <div class="heat-map">
          ${Dates.getMonthDates(today).map(d => {
            const log = Storage.getActivityLog();
            const count = log[d] || 0;
            const level = count === 0 ? '' : count <= 2 ? 'level-1' : count <= 5 ? 'level-2' : count <= 10 ? 'level-3' : 'level-4';
            const isToday = d === today;
            return `<div class="heat-map-cell ${level} ${isToday ? 'today' : ''}" data-tooltip="${Dates.format(d, 'short')}: ${count} activities"></div>`;
          }).join('')}
        </div>
        <div class="flex items-center gap-2 mt-4 justify-between">
          <span class="text-xs text-muted">Less</span>
          <div class="flex gap-1">
            <div class="heat-map-cell" style="width:14px;height:14px"></div>
            <div class="heat-map-cell level-1" style="width:14px;height:14px"></div>
            <div class="heat-map-cell level-2" style="width:14px;height:14px"></div>
            <div class="heat-map-cell level-3" style="width:14px;height:14px"></div>
            <div class="heat-map-cell level-4" style="width:14px;height:14px"></div>
          </div>
          <span class="text-xs text-muted">More</span>
        </div>
      </div>
    `;
  } else if (view === 'weekly') {
    const weekKey = Dates.getWeekKey(today);
    const weeklyGoals = Storage.getWeeklyGoals(weekKey) || Scheduler.generateWeeklyGoals(curricula, today);

    container.innerHTML = `
      <div class="section-header">
        <div>
          <div class="section-title">Weekly Goals</div>
          <div class="section-subtitle">Week of ${Dates.format(weeklyGoals.startDate || today, 'medium')} — ${Dates.format(weeklyGoals.endDate || today, 'medium')}</div>
        </div>
        ${weeklyGoals.reorganized ? '<span class="badge badge-warning">📋 Reorganized</span>' : ''}
      </div>

      <div class="grid grid-2 mb-6 stagger">
        ${Object.entries(weeklyGoals.categories).filter(([k]) => k !== 'general').map(([cat, data]) => {
          const meta = categoryMeta[cat];
          const pct = data.targetLessons ? Math.round((data.completedLessons / data.targetLessons) * 100) : 0;
          return `
            <div class="card card-glow-${meta.color}">
              <div class="flex items-center gap-3 mb-4">
                ${renderProgressRing(pct, 56, 4, meta.accent)}
                <div>
                  <div class="font-bold">${data.name}</div>
                  <div class="text-xs text-muted">${data.completedLessons}/${data.targetLessons} lessons</div>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                ${data.milestones.map(m => `
                  <div class="flex items-center gap-2 text-sm">
                    <span class="task-checkbox ${m.done ? 'checked' : ''}" style="width:18px;height:18px;cursor:pointer" onclick="window.toggleWeeklyMilestone('${weekKey}','${cat}','${m.title}')"></span>
                    <span style="${m.done ? 'text-decoration:line-through;opacity:0.5' : ''}">${m.title}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${weeklyGoals.categories.general ? `
        <div class="card animate-slide-up">
          <div class="font-bold mb-4">🎯 General Goals</div>
          ${weeklyGoals.categories.general.milestones.map(m => `
            <div class="flex items-center gap-2 text-sm mb-3">
              <span class="task-checkbox ${m.done ? 'checked' : ''}" style="width:18px;height:18px;cursor:pointer" onclick="window.toggleWeeklyMilestone('${weekKey}','general','${m.title}')"></span>
              <span style="${m.done ? 'text-decoration:line-through;opacity:0.5' : ''}">${m.title}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
  } else if (view === 'monthly') {
    const monthKey = Dates.getMonthKey(today);
    const monthlyGoals = Storage.getMonthlyGoals(monthKey) || Scheduler.generateMonthlyGoals(curricula, today);

    container.innerHTML = `
      <div class="section-header">
        <div>
          <div class="section-title">Monthly Goals</div>
          <div class="section-subtitle">${Dates.format(today, 'long').split(' ').slice(1).join(' ')}</div>
        </div>
        ${monthlyGoals.reorganized ? '<span class="badge badge-warning">📅 Reorganized</span>' : ''}
      </div>

      <div class="grid grid-3 mb-6 stagger">
        ${Object.entries(monthlyGoals.categories).map(([cat, data]) => {
          const meta = categoryMeta[cat];
          const pct = data.targetLessons ? Math.round((data.completedLessons / data.targetLessons) * 100) : 0;
          return `
            <div class="card card-glow-${meta.color}">
              <div class="flex items-center gap-3 mb-4">
                ${renderProgressRing(pct, 64, 5, meta.accent)}
                <div>
                  <div class="font-bold">${data.name}</div>
                  <div class="text-xs text-muted">${data.completedLessons}/${data.targetLessons} target</div>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                ${data.milestones.map(m => `
                  <div class="flex items-center gap-2 text-sm">
                    <span class="task-checkbox ${m.done ? 'checked' : ''}" style="width:18px;height:18px;cursor:pointer" onclick="window.toggleMonthlyMilestone('${monthKey}','${cat}','${m.title}')"></span>
                    <span style="${m.done ? 'text-decoration:line-through;opacity:0.5' : ''}">${m.title}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
};

window.toggleWeeklyMilestone = function(weekKey, cat, title) {
  const goals = Storage.getWeeklyGoals(weekKey);
  if (goals && goals.categories[cat]) {
    const m = goals.categories[cat].milestones.find(m => m.title === title);
    if (m) { m.done = !m.done; Storage.setWeeklyGoals(weekKey, goals); }
  }
  renderTracker();
};

window.toggleMonthlyMilestone = function(monthKey, cat, title) {
  const goals = Storage.getMonthlyGoals(monthKey);
  if (goals && goals.categories[cat]) {
    const m = goals.categories[cat].milestones.find(m => m.title === title);
    if (m) { m.done = !m.done; Storage.setMonthlyGoals(monthKey, goals); }
  }
  renderTracker();
};

// ============ PAGE: SETTINGS ============
function renderSettings() {
  document.getElementById('topbar-title').textContent = 'Settings';
  document.getElementById('topbar-breadcrumb').textContent = 'Configure your learning experience';

  const settings = Storage.getSettings();
  const content = document.getElementById('app-content');

  content.innerHTML = `
    <div style="max-width:700px" class="animate-fade-in">
      <!-- Learning Preferences -->
      <div class="card mb-6">
        <div class="font-bold text-lg mb-4">📚 Learning Preferences</div>
        <div class="form-group">
          <label class="form-label">Topics per day (per category)</label>
          <select class="form-input" id="setting-topics" onchange="window.updateSetting('topicsPerDay', parseInt(this.value))">
            ${[1,2,3,4,5].map(n => `<option value="${n}" ${settings.topicsPerDay === n ? 'selected' : ''}>${n} topics/day ${n === 5 ? '(intensive)' : n === 3 ? '(balanced)' : n === 1 ? '(light)' : ''}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Learning Start Date</label>
          <input type="date" class="form-input" value="${settings.learningStartDate || Dates.today()}" onchange="window.updateSetting('learningStartDate', this.value)">
        </div>
      </div>

      <!-- API Keys -->
      <div class="card mb-6">
        <div class="font-bold text-lg mb-4">🔑 API Keys (Optional)</div>
        <div class="text-sm text-muted mb-4">Add your free API keys for live data. Without them, you'll see mock/demo data.</div>
        <div class="form-group">
          <label class="form-label">Finnhub API Key <a href="https://finnhub.io/" target="_blank" class="text-xs">(get free key)</a></label>
          <input type="password" class="form-input" placeholder="Enter Finnhub API key..." value="${settings.finnhubKey || ''}" onchange="window.updateSetting('finnhubKey', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">NewsData.io API Key <a href="https://newsdata.io/" target="_blank" class="text-xs">(get free key)</a></label>
          <input type="password" class="form-input" placeholder="Enter NewsData.io API key..." value="${settings.newsApiKey || ''}" onchange="window.updateSetting('newsApiKey', this.value)">
        </div>
      </div>

      <!-- Notifications -->
      <div class="card mb-6">
        <div class="font-bold text-lg mb-4">🔔 Notifications</div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-bold text-sm">Daily Learning Reminders</div>
            <div class="text-xs text-muted">Get notified at 9 AM and 7 PM</div>
          </div>
          <button class="btn ${settings.notificationsEnabled ? 'btn-success' : 'btn-secondary'} btn-sm" id="notif-toggle" 
            onclick="window.toggleNotifications()">
            ${settings.notificationsEnabled ? '✅ Enabled' : '🔕 Disabled'}
          </button>
        </div>
      </div>

      <!-- Data Management -->
      <div class="card mb-6">
        <div class="font-bold text-lg mb-4">💾 Data Management</div>
        <div class="flex flex-wrap gap-2">
          <button class="btn btn-secondary" onclick="window.exportData()">📤 Export Data</button>
          <button class="btn btn-secondary" onclick="document.getElementById('import-file').click()">📥 Import Data</button>
          <input type="file" id="import-file" accept=".json" style="display:none" onchange="window.importData(event)">
          <button class="btn btn-danger" onclick="window.resetAllData()">🗑️ Reset All Progress</button>
        </div>
      </div>

      <!-- About -->
      <div class="card">
        <div class="font-bold text-lg mb-4">ℹ️ About FinanceOS</div>
        <div class="text-sm text-muted">
          <p>A comprehensive daily learning platform for Finance, Business, Stock Market, AI News, and Investment Analysis.</p>
          <p class="mt-2">All data is stored locally in your browser. No account required.</p>
          <p class="mt-2 font-mono text-xs">Version 1.0.0 · Built with ❤️</p>
        </div>
      </div>
    </div>
  `;
}

window.updateSetting = function(key, value) {
  const settings = Storage.getSettings();
  settings[key] = value;
  Storage.setSettings(settings);
  showToast('Setting updated!');
};

window.toggleNotifications = async function() {
  const settings = Storage.getSettings();
  if (!settings.notificationsEnabled) {
    const granted = await Notifications.requestPermission();
    if (granted) {
      settings.notificationsEnabled = true;
      Storage.setSettings(settings);
      Notifications.scheduleDailyReminder();
      showToast('Notifications enabled!');
    } else {
      showToast('Notification permission denied', 'warning');
      return;
    }
  } else {
    settings.notificationsEnabled = false;
    Storage.setSettings(settings);
    showToast('Notifications disabled');
  }
  renderSettings();
};

window.exportData = function() {
  const data = Storage.exportAll();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `financeos-backup-${Dates.today()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported successfully!');
};

window.importData = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    if (Storage.importAll(e.target.result)) {
      showToast('Data imported successfully! Refreshing...');
      setTimeout(() => location.reload(), 1000);
    } else {
      showToast('Import failed — invalid file', 'error');
    }
  };
  reader.readAsText(file);
};

window.resetAllData = function() {
  showModal(`
    <div class="modal-header">
      <div class="font-bold text-lg">⚠️ Reset All Progress</div>
      <button class="modal-close" onclick="window.closeAppModal()">✕</button>
    </div>
    <div class="text-muted mb-6">
      This will permanently delete all your learning progress, goals, saved articles, and settings. This action cannot be undone.
    </div>
    <div class="flex gap-2 justify-between">
      <button class="btn btn-secondary" onclick="window.closeAppModal()">Cancel</button>
      <button class="btn btn-danger" onclick="Storage.clearAll(); location.reload();">Yes, Reset Everything</button>
    </div>
  `);
};
// Make Storage available for the reset button
window.Storage = Storage;

// ============ ROUTER SETUP ============
router.addRoute('dashboard', renderDashboard);
router.addRoute('learning', renderLearning);
router.addRoute('lesson', renderLesson);
router.addRoute('news', renderNews);
router.addRoute('market', renderMarket);
router.addRoute('tracker', renderTracker);
router.addRoute('settings', renderSettings);

// ============ INITIALIZATION ============
let initialized = false;

function init() {
  if (initialized) return;
  initialized = true;

  try {
    // Update date display
    document.getElementById('topbar-date').textContent = Dates.format(Dates.today(), 'medium');

    // Modal overlay click-outside handler
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') closeModal();
    });

    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });

    // Close sidebar on content click (mobile)
    document.getElementById('app-content')?.addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('open');
    });

    // Update nav badges
    updateNavBadges();

    // Setup notifications
    const settings = Storage.getSettings();
    if (settings.notificationsEnabled) {
      Notifications.requestPermission().then(granted => {
        if (granted) Notifications.scheduleDailyReminder();
      });
    }

    // Initialize router
    router.init();

    console.log('FinanceOS initialized successfully ✓');
  } catch(err) {
    console.error('Init error:', err);
    document.getElementById('app-content').innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <div class="empty-state-title">Something went wrong</div>
        <div class="empty-state-desc">${err.message}</div>
      </div>
    `;
  }
}

// Module scripts are deferred, so DOM is ready when they execute
init();
