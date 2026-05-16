    const RESPONSIVE_BREAKPOINT = 1760;
    const RESPONSIVE_HEIGHT_BREAKPOINT = 900;
    let isMobile = window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT;
    document.body.classList.toggle('mobile-mode', isMobile);

    // DATA
    const WORK_PROJECTS = [
      {
        kind: "work",
        title: "TUBITAK 1002 Research Project",
        acronym: "TUBITAK 1002",
        wordmark: "TUBITAK 1002",
        role: "Researcher",
        summary: "A research project on holistic process optimization for real textile wastewater treatment, pollutant removal, and cathodic green hydrogen production under the supervision of Prof. Dr. Umran Tezcan Un.",
        features: [
          "Performs experiments for wastewater treatment and energy recovery.",
          "Analyzes experimental data to evaluate treatment efficiency.",
          "Contributes to process optimization for pollutant removal and green hydrogen production."
        ],
        link: ""
      },
      {
        kind: "work",
        title: "Urasco Chemicals - Egypt",
        acronym: "TECHNICAL MANAGER",
        wordmark: "Technical Manager",
        role: "Technical Manager",
        summary: "Led technical service operations for textile digital printing customers across Egypt after building and coordinating a team of four engineers.",
        features: [
          "Managed technical support for approximately 30 high-production customers.",
          "Coordinated field maintenance and service planning over a broad region.",
          "Connected customer needs with practical engineering solutions."
        ],
        link: ""
      },
      {
        kind: "work",
        title: "Urasco Chemicals - Turkiye",
        acronym: "MAINTENANCE ENGINEER",
        wordmark: "Maintenance",
        role: "Maintenance Engineer",
        summary: "Worked in textile digital printing maintenance after an intensive training period, supporting technical continuity and service reliability.",
        features: [
          "Completed around three months of textile digital printing training.",
          "Maintained digital printing systems and supported production continuity.",
          "Built fast, practical experience in technical troubleshooting."
        ],
        link: ""
      }
    ];

    const PERSONAL_PROJECTS = [
      {
        kind: "personal",
        title: "Electrochemical Textile Wastewater Treatment",
        acronym: "MASTER'S THESIS",
        wordmark: "M.Sc. Thesis",
        role: "Graduate Researcher",
        summary: "A sustainable research project focused on textile wastewater treatment and hydrogen production as a renewable energy source, funded by the university's Scientific Research Project commission.",
        features: [
          "Explores electrochemical treatment methods for real textile wastewater.",
          "Studies hydrogen production as a sustainability-oriented energy output.",
          "Supported by Scientific Research Project No. 25LOT223."
        ],
        link: ""
      },
      {
        kind: "personal",
        title: "Microplastics as Air Pollutants",
        acronym: "BACHELOR'S THESIS",
        wordmark: "B.Sc. Thesis",
        role: "Environmental Engineering Researcher",
        summary: "Bachelor's degree thesis examining microplastics from an air pollution perspective within environmental engineering.",
        features: [
          "Focused on emerging environmental pollutant risks.",
          "Built a research foundation in environmental engineering.",
          "Connected pollution analysis with sustainability awareness."
        ],
        link: ""
      }
    ];

    const JOURNEY_ITEMS = [
      {
        type: "experience",
        date: "Jan 2026 - Present",
        title: "Researcher",
        org: "TUBITAK 1002 Project",
        focus: "Wastewater Treatment / Green Hydrogen",
        summary: "Working as a researcher on the TUBITAK 1002 project titled \"Holistic Process Optimization for Real Textile Wastewater Treatment: Pollutant Removal and Cathodic Green Hydrogen Production.\"",
        highlights: [
          "Performs laboratory experiments under the supervision of Prof. Dr. Umran Tezcan Un.",
          "Uses data analysis and process optimization to improve treatment efficiency.",
          "Works on energy recovery through cathodic green hydrogen production."
        ]
      },
      {
        type: "education",
        date: "Sep 2024 - May 2026",
        title: "M.Sc. in Energy Resources and Management",
        org: "Eskisehir Technical University",
        focus: "Energy / Sustainability",
        summary: "Pursuing a master's degree in Energy Resources and Management with a 3.85 GPA.",
        highlights: [
          "Thesis focuses on electrochemical treatment of textile wastewater and renewable hydrogen production.",
          "Available to begin working immediately before completing the master's degree.",
          "Combines energy systems, sustainability, and environmental engineering research."
        ]
      },
      {
        type: "experience",
        date: "Jun 2023 - Sep 2024",
        title: "Technical Manager",
        org: "Urasco Chemicals, Cairo, Egypt",
        focus: "Technical Service / Team Leadership",
        summary: "Promoted to Technical Manager after assembling a team of four engineers and supporting textile digital printing customers across Egypt.",
        highlights: [
          "Maintained service operations for around 30 high-production customers.",
          "Led a technical engineering team in the field.",
          "Balanced customer communication, maintenance planning, and technical problem solving."
        ]
      },
      {
        type: "experience",
        date: "Sep 2021 - Jun 2023",
        title: "Maintenance Engineer",
        org: "Urasco Chemicals, Istanbul, Turkiye",
        focus: "Textile Digital Printing",
        summary: "Worked as a maintenance engineer in textile digital printing after completing an intensive technical training period.",
        highlights: [
          "Completed about three months of training in textile digital printing.",
          "Supported equipment maintenance and technical reliability.",
          "Made a strong early impact through hands-on field engineering."
        ]
      },
      {
        type: "education",
        date: "Sep 2012 - Jul 2020",
        title: "B.Sc. in Environmental Engineering",
        org: "Eskisehir Technical University",
        focus: "Environmental Systems",
        summary: "Completed a bachelor's degree in Environmental Engineering.",
        highlights: [
          "Graduation thesis focused on microplastics as air pollutants.",
          "Built a foundation in environmental analysis and sustainability.",
          "Developed an engineering perspective on pollution control and resource management."
        ]
      },
      {
        type: "experience",
        date: "Sep 2012 - Jun 2016",
        title: "Part-Time Role",
        org: "Anadolu University, Eskisehir, Turkiye",
        focus: "University Experience",
        summary: "Worked part-time at Anadolu University while building professional discipline and workplace experience.",
        highlights: [
          "Gained early professional experience in a university environment.",
          "Strengthened responsibility, time management, and communication habits.",
          "Balanced work experience with academic development."
        ]
      }
    ];

    const PROGRAMS = [
      { name: "Experimental Research", subtitle: "Laboratory work and test planning", icon: "science", color: "#40d9ff" },
      { name: "Data Analysis", subtitle: "Interpreting process and treatment data", icon: "monitoring", color: "#7c7cff" },
      { name: "Process Optimization", subtitle: "Efficiency and energy recovery", icon: "tune", color: "#20d5d8" },
      { name: "Adaptability", subtitle: "Fast learning in changing environments", icon: "sync_alt", color: "#6df0a5" },
      { name: "Environmental Engineering", subtitle: "Pollution and sustainability systems", icon: "eco", color: "#9be15d" },
      { name: "Technical Management", subtitle: "Team and customer coordination", icon: "engineering", color: "#ffcc66" },
      { name: "Critical Thinking", subtitle: "Clear judgment under complex conditions", icon: "psychology", color: "#ff8bd1" },
      { name: "Time Management", subtitle: "Reliable planning and prioritization", icon: "schedule", color: "#ffa657" },
      { name: "Teamwork and Leadership", subtitle: "Collaborative execution and ownership", icon: "groups", color: "#b892ff" }
    ];

    // PROJECT TOGGLE + PREVIEW
    const projectSets = {
      work: WORK_PROJECTS,
      personal: PERSONAL_PROJECTS
    };
    const projectsWall = document.getElementById('projectsWall');
    const projectsStage = document.querySelector('.projects-stage');
    const projectsSwitch = document.getElementById('projectsSwitch');
    const projectPreview = document.getElementById('projectPreview');
    const projectPreviewClose = document.getElementById('projectPreviewClose');
    let activeProjectKind = 'work';
    let activeProjectIndex = -1;
    let panelOpen = false;
    let journeyModalOpen = false;
    let lockedScrollY = 0;

    function lockPageScroll() {
      if (document.body.classList.contains('panel-open')) return;
      lockedScrollY = window.scrollY;
      if (isMobile) document.body.style.top = `-${lockedScrollY}px`;
      document.body.classList.add('panel-open');
    }

    function unlockPageScrollIfClear() {
      if (panelOpen || journeyModalOpen) return;
      if (!document.body.classList.contains('panel-open')) return;
      const restoreY = lockedScrollY;
      document.body.classList.remove('panel-open');
      document.body.style.top = '';
      if (isMobile) {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, restoreY);
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      }
    }

    function renderProjectLogo(project) {
      if (project.logo) {
        return `<img src="${project.logo}" alt="${project.title} logo" loading="lazy">`;
      }
      return `<span class="project-wordmark">${project.wordmark || project.acronym}</span>`;
    }

    function updateProjectPreview(project) {
      const kind = project.kind || activeProjectKind;
      const link = document.getElementById('projectPreviewLink');
      const subtitle = document.getElementById('projectPreviewAcronym');
      const roleLabel = document.getElementById('projectPreviewRoleLabel');
      const featuresList = document.getElementById('projectPreviewFeatures');
      projectPreview.className = `project-preview open is-${kind}`;
      projectsStage.classList.add('is-preview-open');
      document.getElementById('projectPreviewLogo').innerHTML = project.logo
        ? `<img src="${project.logo}" alt="${project.title} logo" loading="lazy">`
        : `<span class="project-wordmark">${project.wordmark || project.acronym}</span>`;
      document.getElementById('projectPreviewTitle').textContent = project.title;
      subtitle.textContent = project.subtitle || project.acronym || '';
      subtitle.style.display = subtitle.textContent ? '' : 'none';
      document.getElementById('projectPreviewSummary').textContent = project.summary;
      featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
      roleLabel.style.display = project.features.length ? '' : 'none';
      featuresList.style.display = project.features.length ? '' : 'none';
      if (project.link) {
        link.href = project.link;
        link.textContent = 'Open project page';
        link.removeAttribute('aria-disabled');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.style.display = 'inline-flex';
      } else {
        link.href = '#';
        link.textContent = 'Link will be added';
        link.setAttribute('aria-disabled', 'true');
        link.removeAttribute('target');
        link.style.display = 'inline-flex';
      }
      panelOpen = true;
      projectPreview.scrollTop = 0;
      lockPageScroll();
    }

    function closeProjectPreview() {
      projectPreview.classList.remove('open', 'is-work', 'is-personal');
      projectsStage.classList.remove('is-preview-open');
      projectsWall.querySelectorAll('.project-logo-button').forEach(node => node.classList.remove('is-active'));
      activeProjectIndex = -1;
      panelOpen = false;
      unlockPageScrollIfClear();
    }

    function renderProjects(kind = activeProjectKind) {
      activeProjectKind = kind;
      const items = projectSets[kind];
      closeProjectPreview();
      projectsWall.innerHTML = '';
      projectsWall.dataset.kind = kind;
      projectsSwitch.classList.toggle('is-personal', kind === 'personal');
      projectsSwitch.setAttribute('aria-pressed', String(kind === 'personal'));

      items.forEach((project, idx) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `project-logo-button ${kind === 'personal' ? 'is-personal' : ''}`;
        button.setAttribute('aria-label', `Preview ${project.title}`);
        button.innerHTML = renderProjectLogo(project);
        const openCard = () => {
          activeProjectIndex = idx;
          projectsWall.querySelectorAll('.project-logo-button').forEach((node, nodeIdx) => {
            node.classList.toggle('is-active', nodeIdx === idx);
          });
          updateProjectPreview(project);
        };
        button.addEventListener('click', e => {
          e.stopPropagation();
          openCard();
        });
        button.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openCard();
          }
        });
        projectsWall.appendChild(button);
      });
    }

    projectsSwitch.addEventListener('click', () => {
      renderProjects(activeProjectKind === 'work' ? 'personal' : 'work');
    });
    projectPreviewClose.addEventListener('click', closeProjectPreview);
    projectsStage.addEventListener('click', e => {
      if (!projectPreview.classList.contains('open')) return;
      if (e.target.closest('.project-logo-button')) return;
      if (e.target.closest('.projects-switch')) return;
      if (projectPreview.contains(e.target)) return;
      closeProjectPreview();
    });
    renderProjects();

    // RENDER ABOUT JOURNEY
    const journeyTree = document.getElementById('journeyTree');
    journeyTree.innerHTML = '<div class="journey-axis" aria-hidden="true"></div>';
    let activeJourneyItem = null;
    JOURNEY_ITEMS.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = `journey-item ${item.type} reveal-item`;
      row.innerHTML = `
        <span class="journey-date">${item.date}</span>
        <span class="journey-node" aria-hidden="true"></span>
        <button type="button" class="journey-card" data-journey="${i}" aria-label="Open details for ${item.title}">
          <span class="journey-type">${item.type}</span>
          <h3 class="journey-title">${item.title}</h3>
          <p class="journey-org">${item.org}</p>
        </button>
      `;
      const card = row.querySelector('.journey-card');
      card.addEventListener('click', () => openJourneyModal(i));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openJourneyModal(i);
        }
      });
      journeyTree.appendChild(row);
    });

    // RENDER PROGRAMS
    const programsGrid = document.getElementById('programsGrid');
    PROGRAMS.forEach((program, idx) => {
      const card = document.createElement('article');
      card.className = 'program-card';
      card.innerHTML = `
        <span class="program-icon" style="--program-color: ${program.color}" aria-hidden="true">
          <span class="material-symbols-outlined">${program.icon}</span>
        </span>
        <div class="program-text">
          <strong>${program.name}</strong>
          <span>${program.subtitle || ''}</span>
        </div>
      `;
      programsGrid.appendChild(card);
    });

    // JOURNEY MODAL
    const journeyModalOverlay = document.getElementById('journeyModalOverlay');
    const journeyModalClose = document.getElementById('journeyModalClose');
    function openJourneyModal(idx) {
      const item = JOURNEY_ITEMS[idx];
      if (activeJourneyItem) activeJourneyItem.classList.remove('is-active');
      activeJourneyItem = journeyTree.querySelector(`[data-journey="${idx}"]`)?.closest('.journey-item') || null;
      if (activeJourneyItem) activeJourneyItem.classList.add('is-active');
      document.getElementById('journeyModalTitle').textContent = item.title;
      document.getElementById('journeyModalOrg').textContent = item.org;
      document.getElementById('journeyModalDate').textContent = item.date;
      document.getElementById('journeyModalSummary').textContent = item.summary;
      document.getElementById('journeyModalHighlights').innerHTML = item.highlights.map(point => `<li>${point}</li>`).join('');
      journeyModalOverlay.classList.add('open');
      journeyModalOverlay.setAttribute('aria-hidden', 'false');
      journeyModalOpen = true;
      journeyModalOverlay.scrollTop = 0;
      document.querySelector('.journey-modal').scrollTop = 0;
      lockPageScroll();
    }
    function closeJourneyModal() {
      journeyModalOverlay.classList.remove('open');
      journeyModalOverlay.setAttribute('aria-hidden', 'true');
      if (activeJourneyItem) {
        activeJourneyItem.classList.remove('is-active');
        activeJourneyItem = null;
      }
      journeyModalOpen = false;
      unlockPageScrollIfClear();
    }
    journeyModalClose.addEventListener('click', closeJourneyModal);
    journeyModalOverlay.addEventListener('click', e => { if (e.target === journeyModalOverlay) closeJourneyModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && panelOpen) closeProjectPreview();
      if (e.key === 'Escape' && journeyModalOpen) closeJourneyModal();
    });

    // SCROLL ENGINE
    const sections = document.querySelectorAll('.fp-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const dots = document.querySelectorAll('.dot-nav-item');
    let current = 0, isAnimating = false;
    const sectionCount = sections.length;

    function shouldUseResponsiveFlow() {
      return window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT;
    }

    function setActiveSection(idx) {
      current = idx;
      navLinks.forEach(a => a.classList.toggle('active', parseInt(a.dataset.section, 10) === current));
      dots.forEach(d => {
        const isActive = parseInt(d.dataset.section, 10) === current;
        d.classList.toggle('active', isActive);
        if (isActive) d.setAttribute('aria-current', 'page');
        else d.removeAttribute('aria-current');
      });
      document.getElementById('navbar').classList.toggle('scrolled', isMobile ? window.scrollY > 40 || current > 0 : current > 0);
    }

    function getNearestSectionIndex() {
      let nearestIdx = 0;
      let nearestDistance = Infinity;
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 96);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIdx = idx;
        }
      });
      return nearestIdx;
    }

    function updateCurrentFromScroll() {
      if (!isMobile) return;
      setActiveSection(getNearestSectionIndex());
    }

    function positionSections() {
      if (isMobile) {
        sections.forEach(section => { section.style.transform = 'none'; });
        return;
      }
      sections.forEach((s, i) => { s.style.transform = `translateY(${(i - current) * 100}%)`; });
    }

    function syncResponsiveMode() {
      const nextIsMobile = shouldUseResponsiveFlow();
      const preservedSection = isMobile ? getNearestSectionIndex() : current;

      if (nextIsMobile === isMobile) {
        if (isMobile) {
          sections.forEach(section => { section.style.transform = 'none'; });
          updateCurrentFromScroll();
        }
        return;
      }

      isMobile = nextIsMobile;
      document.body.classList.toggle('mobile-mode', isMobile);
      setActiveSection(preservedSection);

      if (isMobile) {
        sections.forEach(section => { section.style.transform = 'none'; });
        document.getElementById('navLinks').classList.remove('open');
        document.querySelectorAll('.reveal-item').forEach(item => item.classList.add('visible'));
        requestAnimationFrame(() => {
          sections[preservedSection].scrollIntoView({ behavior: 'auto', block: 'start' });
          updateCurrentFromScroll();
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
        positionSections();
        setActiveSection(preservedSection);
        triggerReveal();
      }
    }

    function goTo(idx) {
      if (isMobile || idx < 0 || idx >= sectionCount || idx === current || isAnimating || panelOpen || journeyModalOpen) return;
      isAnimating = true;
      setActiveSection(idx);
      positionSections();
      setTimeout(() => { isAnimating = false; triggerReveal(); }, 900);
    }

    function navigateToSection(idx, options = {}) {
      if (idx < 0 || idx >= sectionCount || panelOpen || journeyModalOpen) return;
      const { focusSelector = '', behavior = 'smooth' } = options;
      document.getElementById('navLinks').classList.remove('open');

      const focusTarget = () => {
        if (!focusSelector) return;
        const target = document.querySelector(focusSelector);
        target?.focus({ preventScroll: true });
      };

      if (isMobile) {
        setActiveSection(idx);
        sections[idx].scrollIntoView({ behavior, block: 'start' });
        if (focusSelector) setTimeout(focusTarget, 650);
        return;
      }

      if (idx !== current) {
        goTo(idx);
      } else {
        setActiveSection(idx);
        triggerReveal();
      }

      if (focusSelector) setTimeout(focusTarget, idx === current ? 120 : 980);
    }

    window.addEventListener('wheel', e => {
      if (isMobile) return;
      e.deltaY > 30 ? goTo(current + 1) : e.deltaY < -30 && goTo(current - 1);
    }, { passive: true });
    let touchY = 0;
    window.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; });
    window.addEventListener('touchend', e => {
      if (isMobile) return;
      const d = touchY - e.changedTouches[0].clientY;
      Math.abs(d) > 50 && goTo(current + (d > 0 ? 1 : -1));
    });
    document.addEventListener('keydown', e => {
      if (isMobile || panelOpen || journeyModalOpen) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(current - 1);
    });

    navLinks.forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      navigateToSection(parseInt(a.dataset.section, 10));
    }));
    dots.forEach(d => d.addEventListener('click', () => {
      const idx = parseInt(d.dataset.section, 10);
      navigateToSection(idx);
    }));
    document.querySelectorAll('[data-section-target]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        navigateToSection(parseInt(link.dataset.sectionTarget, 10), {
          focusSelector: link.dataset.focusTarget || ''
        });
      });
    });

    // TYPEWRITER
    const phrases = ['Engineer','Energy & Sustainability','Researcher'];
    let phraseIdx = 0, charIdx = 0, deleting = false;
    const tw = document.getElementById('typewriter');
    function typewrite() {
      const word = phrases[phraseIdx];
      tw.textContent = deleting ? word.substring(0, charIdx--) : word.substring(0, charIdx++);
      if (!deleting && charIdx > word.length) { setTimeout(() => { deleting = true; typewrite(); }, 2000); return; }
      if (deleting && charIdx < 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
      setTimeout(typewrite, deleting ? 40 : 80);
    }
    typewrite();

    // MOBILE TOGGLE
    document.getElementById('mobileToggle').addEventListener('click', () => { document.getElementById('navLinks').classList.toggle('open'); });

    // CONTACT FORM
    const contactForm = document.getElementById('contactForm');
    const contactFormStatus = document.getElementById('contactFormStatus');
    const contactSubmitButton = contactForm.querySelector('.form-submit');
    const contactSubmitLabel = contactSubmitButton.textContent;
    const contactReplyTo = document.getElementById('contactReplyTo');
    const contactSubject = document.getElementById('contactSubject');

    function setContactFormStatus(message, state = '') {
      contactFormStatus.textContent = message;
      contactFormStatus.className = 'form-status';
      if (state) contactFormStatus.classList.add(`is-${state}`);
    }

    function buildMailtoFallback(formData) {
      const subject = `Portfolio contact from ${formData.name}`;
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        '',
        formData.message
      ].join('\n');
      return `mailto:zmozgen@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    contactForm.addEventListener('submit', async e => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const payload = {
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        message: String(formData.get('message') || '').trim()
      };

      if (!payload.name || !payload.email || !payload.message) {
        setContactFormStatus('Please complete all fields before sending.', 'error');
        return;
      }

      contactReplyTo.value = payload.email;
      contactSubject.value = `Portfolio message from ${payload.name}`;
      formData.set('_replyto', payload.email);
      formData.set('_subject', `Portfolio message from ${payload.name}`);

      contactSubmitButton.disabled = true;
      contactSubmitButton.textContent = 'Sending...';
      setContactFormStatus('Sending your message...', 'pending');

      try {
        const response = await fetch('https://formsubmit.co/ajax/zmozgen@live.com', {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) {
          throw new Error(result.message || 'Unable to submit the form.');
        }

        contactForm.reset();
        setContactFormStatus('Your message has been sent successfully.', 'success');
      } catch (error) {
        setContactFormStatus('Direct send failed. Opening your email app as fallback...', 'error');
        window.location.href = buildMailtoFallback(payload);
      } finally {
        contactSubmitButton.disabled = false;
        contactSubmitButton.textContent = contactSubmitLabel;
      }
    });

    // REVEAL
    function triggerReveal() {
      const items = sections[current].querySelectorAll('.reveal-item:not(.visible)');
      items.forEach((el, i) => { setTimeout(() => el.classList.add('visible'), i * 120); });
    }
    syncResponsiveMode();
    if (!isMobile) { positionSections(); triggerReveal(); }
    else { updateCurrentFromScroll(); }
    window.addEventListener('resize', syncResponsiveMode);

    // CUSTOM CURSOR
    const cursor = document.getElementById('cursorDot');
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; });
    const hoverTargets = 'a, button, .project-logo-button, .projects-switch, .btn, input, textarea, .journey-card, .program-card, .skill-cluster, .journey-modal-close';
    document.addEventListener('mouseover', e => { if (e.target.closest(hoverTargets)) cursor.classList.add('hovering'); });
    document.addEventListener('mouseout', e => { if (e.target.closest(hoverTargets)) cursor.classList.remove('hovering'); });

    window.addEventListener('scroll', () => {
      if (!isMobile) return;
      updateCurrentFromScroll();
    }, { passive: true });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-item:not(.visible)').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120));
        }
      });
    }, { threshold: 0.15 });
    sections.forEach(s => obs.observe(s));

    // HERO PHOTO CROSSFADE
    const heroPhoto = document.getElementById('heroPhoto');
    setTimeout(() => { heroPhoto.classList.add('swapped'); }, 5000);
    setTimeout(() => { heroPhoto.classList.remove('swapped'); }, 10000);

    // INTERACTIVE PARTICLE NETWORK
    (function() {
      const canvas = document.getElementById('particleCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w, h, particles = [], mouse = { x: -999, y: -999 };
      const PARTICLE_COUNTS = { desktop: 420, tablet: 160, phone: 85 };
      const CONNECT_DIST = 140, MOUSE_RADIUS = 160;

      function getParticleCount() {
        if (window.innerWidth <= 640) return PARTICLE_COUNTS.phone;
        if (window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT) return PARTICLE_COUNTS.tablet;
        return PARTICLE_COUNTS.desktop;
      }

      class Particle {
        constructor() { this.x = Math.random() * w; this.y = Math.random() * h; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; this.r = Math.random() * 2.4 + 1.6; }
        update() {
          this.x += this.vx; this.y += this.vy;
          if (this.x < 0 || this.x > w) this.vx *= -1;
          if (this.y < 0 || this.y > h) this.vy *= -1;
          const dx = this.x - mouse.x, dy = this.y - mouse.y, dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < MOUSE_RADIUS) { const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.03; this.vx += dx * force; this.vy += dy * force; }
          this.vx *= 0.99; this.vy *= 0.99;
        }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(32,213,216,0.5)'; ctx.fill(); }
      }

      function syncParticleCount() {
        const targetCount = getParticleCount();
        while (particles.length < targetCount) particles.push(new Particle());
        if (particles.length > targetCount) particles.length = targetCount;
      }

      function resize() {
        const hero = document.getElementById('hero');
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
        syncParticleCount();
        particles.forEach(p => {
          if (p.x > w) p.x = Math.random() * w;
          if (p.y > h) p.y = Math.random() * h;
        });
      }

      resize();
      window.addEventListener('resize', resize);
      function connectParticles() {
        for (let i = 0; i < particles.length; i++) for (let j = i+1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < CONNECT_DIST) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(32,213,216,${(1-dist/CONNECT_DIST)*0.25})`; ctx.lineWidth = 0.6; ctx.stroke(); }
        }
      }
      function animate() { ctx.clearRect(0,0,w,h); particles.forEach(p => { p.update(); p.draw(); }); connectParticles(); requestAnimationFrame(animate); }
      animate();
      document.getElementById('hero').addEventListener('mousemove', e => { const rect = canvas.getBoundingClientRect(); mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top; });
      document.getElementById('hero').addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
    })();

