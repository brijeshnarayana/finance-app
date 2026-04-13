// Simple hash-based SPA router
export class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.firstLoad = true;
    window.addEventListener('hashchange', () => this.navigate());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    if (path) {
      window.location.hash = path;
      return;
    }
    const hash = window.location.hash.slice(1) || 'dashboard';
    const [page, ...params] = hash.split('/');
    
    if (this.routes[page]) {
      this.currentPage = page;
      const appContent = document.getElementById('app-content');

      if (this.firstLoad) {
        // On first load, render immediately without transition
        this.firstLoad = false;
        this.routes[page](params.join('/'));
      } else if (appContent) {
        appContent.classList.add('page-exit');
        setTimeout(() => {
          this.routes[page](params.join('/'));
          appContent.classList.remove('page-exit');
          appContent.classList.add('page-enter');
          setTimeout(() => appContent.classList.remove('page-enter'), 400);
        }, 150);
      } else {
        this.routes[page](params.join('/'));
      }
      this.updateActiveNav(page, hash);
    }
  }

  updateActiveNav(page, hash) {
    document.querySelectorAll('.nav-item').forEach(item => {
      const itemPage = item.dataset.page;
      const itemHref = (item.getAttribute('href') || '').replace('#', '');
      // Match by exact href match or page name match
      const isActive = itemHref === hash || 
                       (itemPage === page && !hash.includes('/')) ||
                       (hash.startsWith('learning/') && itemHref === hash);
      item.classList.toggle('active', isActive);
    });
  }

  init() {
    this.navigate();
  }
}
