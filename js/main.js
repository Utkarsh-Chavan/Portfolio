(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Each feature is wrapped in its own try/catch so a failure in one
  // (e.g. an unexpected DOM shape) can never silently prevent the rest
  // of the page's interactivity from initializing.
  function safe(fn, label) {
    try { fn(); } catch (err) { if (window.console) console.error('[portfolio] ' + label + ' failed:', err); }
  }

  /* ============ THEME TOGGLE ============ */
  safe(function () {
    var themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    function getPreferredTheme() {
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
    }
    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', theme === 'light' ? '#F4F5F3' : '#0B0F14');
    }
    applyTheme(getPreferredTheme());
    themeToggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }, 'theme toggle');

  /* ============ MOBILE NAV ============ */
  safe(function () {
    var burger = document.getElementById('nav-burger');
    var mobileNav = document.getElementById('mobile-nav');
    if (!burger || !mobileNav) return;
    function closeMobileNav() {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
    burger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMobileNav); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMobileNav(); });
  }, 'mobile nav');

  /* ============ SCROLL PROGRESS ============ */
  safe(function () {
    var progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;
    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var scrollTop = doc.scrollTop || document.body.scrollTop;
      var scrollHeight = (doc.scrollHeight - doc.clientHeight) || 1;
      var pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      progressBar.style.width = pct + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }, 'scroll progress');

  /* ============ SECTION REVEAL + NAV ACTIVE STATE ============ */
  safe(function () {
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }
  }, 'section reveal');

  safe(function () {
    var navLinks = document.querySelectorAll('.nav-links a[data-nav]');
    var navSections = Array.prototype.map.call(navLinks, function (link) {
      return document.getElementById(link.getAttribute('data-nav'));
    }).filter(Boolean);
    if (!('IntersectionObserver' in window) || !navSections.length) return;
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = document.querySelector('.nav-links a[data-nav="' + entry.target.id + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    navSections.forEach(function (sec) { navObserver.observe(sec); });
  }, 'nav active state');

  /* ============ TIMELINE STAGGER REVEAL ============ */
  safe(function () {
    var stages = document.querySelectorAll('.timeline-stage');
    if (!stages.length) return;
    if (!('IntersectionObserver' in window)) {
      stages.forEach(function (s) { s.classList.add('stage-in-view'); });
      return;
    }
    var stageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('stage-in-view'); stageObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    stages.forEach(function (s) { stageObserver.observe(s); });
  }, 'timeline stagger');

  /* ============ COUNT-UP STATS ============ */
  // Note: HTML already contains the correct real values as a static fallback.
  // This only re-animates them from 0 for polish — if it never runs, the
  // correct numbers are still visible.
  safe(function () {
    var statEls = document.querySelectorAll('.stat-num');
    if (!statEls.length) return;
    function animateCount(el) {
      var target = parseFloat(el.getAttribute('data-target'));
      if (isNaN(target)) return;
      var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
      if (reduceMotion) { el.textContent = target.toFixed(decimals); return; }
      el.textContent = (0).toFixed(decimals);
      var start = null;
      var duration = 900;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min(1, (ts - start) / duration);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (target * eased).toFixed(decimals);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) return; // static correct values already showing
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); statObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { statObserver.observe(el); });
  }, 'count-up stats');

  /* ============ MAGNETIC BUTTONS (desktop only) ============ */
  safe(function () {
    if (!hasHover || reduceMotion) return;
    document.querySelectorAll('.btn-magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.18) + 'px,' + (y * 0.35) + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }, 'magnetic buttons');

  /* ============ HERO CURSOR GLOW (desktop only) ============ */
  safe(function () {
    if (!hasHover || reduceMotion) return;
    var heroSection = document.getElementById('hero');
    var glow = document.getElementById('hero-glow');
    if (!heroSection || !glow) return;
    var ticking = false, pendingX = 0, pendingY = 0;
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroSection.getBoundingClientRect();
      pendingX = e.clientX - rect.left;
      pendingY = e.clientY - rect.top;
      if (!ticking) {
        requestAnimationFrame(function () {
          glow.style.transform = 'translate(' + (pendingX - 240) + 'px,' + (pendingY - 240) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    });
  }, 'hero cursor glow');

  /* ============ COPY EMAIL ============ */
  safe(function () {
    var copyBtn = document.getElementById('copy-email');
    if (!copyBtn) return;
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      var textEl = document.getElementById('email-text');
      if (!textEl) return;
      var original = textEl.textContent;
      function showCopied() {
        textEl.textContent = 'Copied to clipboard ✓';
        copyBtn.classList.add('copied');
        setTimeout(function () { textEl.textContent = original; copyBtn.classList.remove('copied'); }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied).catch(function () {});
      }
    });
  }, 'copy email');

  /* ============ SKILLS / BUILD ↔ PROJECT HIGHLIGHT ============ */
  // Works via hover on desktop and tap-to-lock on any device (touch included).
  safe(function () {
    var chips = document.querySelectorAll('.chip[data-tech]');
    var skillTags = document.querySelectorAll('.tag-list li[data-tech]');
    var buildCards = document.querySelectorAll('.build-card[data-category]');
    if (!chips.length) return;
    var lockedEl = null;

    function applyHighlight(techList) {
      chips.forEach(function (chip) {
        var chipTech = (chip.getAttribute('data-tech') || '').split(' ');
        var match = techList.some(function (t) { return chipTech.indexOf(t) !== -1; });
        chip.classList.toggle('tag-dim', !match);
      });
    }
    function clearHighlight() {
      chips.forEach(function (c) { c.classList.remove('tag-dim'); });
      skillTags.forEach(function (t) { t.classList.remove('tag-highlight'); });
      buildCards.forEach(function (c) { c.classList.remove('active-build'); });
    }
    function techListFor(el) {
      var single = el.getAttribute('data-tech');
      var cat = el.getAttribute('data-category');
      if (cat) return cat.split(' ');
      if (single) return [single];
      return [];
    }

    function bindInteractive(el, highlightClassTarget) {
      el.addEventListener('mouseenter', function () {
        if (lockedEl) return;
        applyHighlight(techListFor(el));
        highlightClassTarget(el, true);
      });
      el.addEventListener('mouseleave', function () {
        if (lockedEl) return;
        clearHighlight();
      });
      el.addEventListener('focus', function () {
        if (lockedEl) return;
        applyHighlight(techListFor(el));
        highlightClassTarget(el, true);
      });
      el.addEventListener('blur', function () {
        if (lockedEl) return;
        clearHighlight();
      });
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        if (lockedEl === el) {
          lockedEl = null;
          clearHighlight();
        } else {
          lockedEl = el;
          clearHighlight();
          applyHighlight(techListFor(el));
          highlightClassTarget(el, true);
        }
      });
    }

    skillTags.forEach(function (tag) {
      bindInteractive(tag, function (el, on) { el.classList.toggle('tag-highlight', on); });
    });
    buildCards.forEach(function (card) {
      bindInteractive(card, function (el, on) { el.classList.toggle('active-build', on); });
    });

    document.addEventListener('click', function () {
      if (lockedEl) { lockedEl = null; clearHighlight(); }
    });
  }, 'skill/build highlight');

  /* ============ PROJECT GALLERY / CAROUSEL ============ */
  safe(function () {
    var filmstrip = document.getElementById('filmstrip');
    var galleryChips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
    var detailContainer = document.getElementById('project-detail');
    var detailPanels = Array.prototype.slice.call(document.querySelectorAll('.detail-panel'));
    var detailClose = document.getElementById('detail-close');
    var prevBtn = document.getElementById('proj-prev');
    var nextBtn = document.getElementById('proj-next');
    var currentIndexEl = document.getElementById('gallery-current');
    var galleryHint = document.getElementById('gallery-hint');
    if (!galleryChips.length || !detailContainer) return;

    var totalProjects = galleryChips.length;
    var activeIndex = 0;
    var detailOpen = false;

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function setActive(index, opts) {
      opts = opts || {};
      activeIndex = ((index % totalProjects) + totalProjects) % totalProjects;
      galleryChips.forEach(function (chip, i) { chip.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false'); });
      dots.forEach(function (dot, i) { dot.classList.toggle('active', i === activeIndex); });
      if (currentIndexEl) currentIndexEl.textContent = pad(activeIndex + 1);
      if (opts.scroll !== false) {
        var activeChip = galleryChips[activeIndex];
        if (activeChip && filmstrip) {
          var chipCenter = activeChip.offsetLeft + activeChip.offsetWidth / 2;
          var targetScroll = chipCenter - filmstrip.clientWidth / 2;
          filmstrip.scrollTo({ left: targetScroll, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
      }
      if (detailOpen) showDetailPanel(activeIndex);
    }

    function showDetailPanel(index) {
      detailPanels.forEach(function (panel) {
        var match = parseInt(panel.getAttribute('data-project'), 10) === index;
        panel.hidden = !match;
        panel.classList.toggle('active-panel', match);
      });
    }

    function openDetail(index) {
      setActive(index);
      detailOpen = true;
      detailContainer.hidden = false;
      showDetailPanel(activeIndex);
      if (galleryHint) galleryHint.style.display = 'none';
      requestAnimationFrame(function () {
        detailContainer.classList.add('open');
        if (!reduceMotion) detailContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    function closeDetail() {
      detailOpen = false;
      detailContainer.classList.remove('open');
      if (galleryHint) galleryHint.style.display = '';
      window.setTimeout(function () { if (!detailOpen) detailContainer.hidden = true; }, reduceMotion ? 0 : 560);
    }

    galleryChips.forEach(function (chip) {
      chip.addEventListener('click', function () { openDetail(parseInt(chip.getAttribute('data-index'), 10)); });
    });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var i = parseInt(dot.getAttribute('data-index'), 10);
        if (detailOpen) openDetail(i); else setActive(i);
      });
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { if (detailOpen) openDetail(activeIndex - 1); else setActive(activeIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { if (detailOpen) openDetail(activeIndex + 1); else setActive(activeIndex + 1); });
    if (detailClose) detailClose.addEventListener('click', closeDetail);

    if (filmstrip) {
      filmstrip.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); setActive(activeIndex + 1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); setActive(activeIndex - 1); }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(activeIndex); }
      });
    }
    window.addEventListener('keydown', function (e) {
      if (!detailOpen) return;
      if (e.key === 'Escape') closeDetail();
      else if (e.key === 'ArrowRight') openDetail(activeIndex + 1);
      else if (e.key === 'ArrowLeft') openDetail(activeIndex - 1);
    });

    setActive(0, { scroll: false });
  }, 'project gallery');
})();
