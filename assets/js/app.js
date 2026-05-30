    const RESPONSIVE_BREAKPOINT = 1760;
    const RESPONSIVE_HEIGHT_BREAKPOINT = 900;
    let isMobile = window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT;
    document.body.classList.toggle('mobile-mode', isMobile);

    // DATA
    const WORK_PROJECTS = [
      {
        kind: "work",
        title: "Holistic Process Optimization for Real Textile Wastewater Treatment: Pollutant Removal and Cathodic Green Hydrogen Production. Research Project",
        acronym: "RESEARCHER",
        wordmark: "TUBITAK 1002",
        role: "Researcher",
        summary: "Supported by the TUBITAK 1002 program and supervised by Prof. Dr. Umran Tezcan Un, this project explores sustainable electrochemical pathways to simultaneously remediate industrial effluents and recover clean energy.",
        features: [
          "Executing electrochemical trials using stainless steel electrodes to maximize simultaneous pollutant removal and hydrogen evolution.",
          "Performing statistical analysis and response surface modeling to evaluate treatment efficacy and energy consumption.",
          "Optimizing operational parameters to achieve high-purity green hydrogen generation alongside effective wastewater remediation."
        ],
        link: ""
      },
      {
        kind: "work",
        title: "Game Development Initiative",
        acronym: "FOUNDER",
        wordmark: "Xyrtuland Games",
        role: "Founder",
        summary: "Leveraged GDevelop and visual scripting to independently design and develop two mobile games for Android.",
        features: [
          "Developed and launched two standalone Android mobile games: 'IFO: Black Hole' and 'IFO: Diagonally'.",
          "Engineered core game mechanics and logic utilizing visual scripting within the GDevelop engine.",
          "Successfully managed the complete end-to-end personal development cycle, finalizing both titles in 2019."
        ],
        link: "https://play.google.com/store/apps/dev?id=5933746138444564349"
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
        link: "assets/BscThesis.pdf"
      },
      {
        kind: "work",
        title: "Publications",
        acronym: "AUTHOR",
        wordmark: "Publications",
        role: "Researcher",
        summary: "As part of my academic research, I author scientific articles and technical reports.",
        features: [
          "Ozgen, Z. M., Tezcan Un, U., & Onay, O. (2025). Electrochemical wastewater treatment and hydrogen production. In O. Umut (Ed.), New concepts and advanced studies in engineering (pp. 335–357). Allscience Academy.",
          "Coming Soon",
          "Coming Soon"
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
          "Executing electrochemical trials using stainless steel electrodes to maximize simultaneous pollutant removal and hydrogen evolution.",
          "Performing statistical analysis and response surface modeling to evaluate treatment efficacy and energy consumption.",
          "Optimizing operational parameters to achieve high-purity green hydrogen generation alongside effective wastewater remediation."
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
          "Acquired specialized expertise in advanced energy auditing and sustainability reporting methodologies.",
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
      { name: "Energy Manager", subtitle: "Energy resources and sustainability focus", icon: "energy_savings_leaf", color: "#20d5d8" },
      { name: "Environmental Engineering", subtitle: "Pollution and sustainability systems", icon: "eco", color: "#9be15d" },
      { name: "Process Optimization", subtitle: "Efficiency and energy recovery", icon: "tune", color: "#20d5d8" },
      { name: "Experimental Research", subtitle: "Laboratory work and test planning", icon: "science", color: "#40d9ff" },
      { name: "Data Analysis", subtitle: "Interpreting process and treatment data", icon: "monitoring", color: "#7c7cff" },
      { name: "Technical Management", subtitle: "Team and customer coordination", icon: "engineering", color: "#ffcc66" },
      { name: "Critical Thinking", subtitle: "Clear judgment under complex conditions", icon: "psychology", color: "#ff8bd1" },
      { name: "Result-Oriented Thinking", subtitle: "Focused execution with measurable outcomes", icon: "track_changes", color: "#f5d76e" },
      { name: "Teamwork and Leadership", subtitle: "Collaborative execution and ownership", icon: "groups", color: "#b892ff" },
      { name: "Adaptability", subtitle: "Fast learning in changing environments", icon: "sync_alt", color: "#6df0a5" },
      { name: "Time Management", subtitle: "Reliable planning and prioritization", icon: "schedule", color: "#ffa657" },
      { name: "Resourcefulness", subtitle: "Practical solutions with available resources", icon: "tips_and_updates", color: "#66e3ff" }
    ];

    // PROJECT TOGGLE + PREVIEW
    const ALL_PROJECTS = [...WORK_PROJECTS, ...PERSONAL_PROJECTS];
    const projectsWall = document.getElementById('projectsWall');
    const projectsStage = document.querySelector('.projects-stage');
    const projectPreview = document.getElementById('projectPreview');
    const projectPreviewClose = document.getElementById('projectPreviewClose');
    document.body.appendChild(projectPreview);
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
      const link = document.getElementById('projectPreviewLink');
      const subtitle = document.getElementById('projectPreviewAcronym');
      const roleLabel = document.getElementById('projectPreviewRoleLabel');
      const featuresList = document.getElementById('projectPreviewFeatures');
      projectPreview.className = 'project-preview open';
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
      projectPreview.classList.remove('open');
      projectsStage.classList.remove('is-preview-open');
      projectsWall.querySelectorAll('.project-logo-button').forEach(node => node.classList.remove('is-active'));
      activeProjectIndex = -1;
      panelOpen = false;
      unlockPageScrollIfClear();
    }

    function renderProjects() {
      const items = ALL_PROJECTS;
      closeProjectPreview();
      projectsWall.innerHTML = '';

      items.forEach((project, idx) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'project-logo-button';
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

    projectPreviewClose.addEventListener('click', closeProjectPreview);
    projectsStage.addEventListener('click', e => {
      if (!projectPreview.classList.contains('open')) return;
      if (e.target.closest('.project-logo-button')) return;
      if (projectPreview.contains(e.target)) return;
      closeProjectPreview();
    });
    document.addEventListener('click', e => {
      if (!projectPreview.classList.contains('open')) return;
      if (e.target.closest('.project-logo-button')) return;
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
    const hoverTargets = 'a, button, .project-logo-button, .btn, input, textarea, .journey-card, .program-card, .skill-cluster, .journey-modal-close';
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

    const playZoneReset = document.getElementById('playZoneReset');
    playZoneReset?.addEventListener('click', () => {
      window.resetParticleField?.();
      playZoneReset.classList.remove('is-resetting');
      void playZoneReset.offsetWidth;
      playZoneReset.classList.add('is-resetting');
    });

    // INTERACTIVE PARTICLE NETWORK
    (function() {
      const canvas = document.getElementById('particleCanvas');
      if (!canvas) return;
      document.body.insertBefore(canvas, document.querySelector('.noise-overlay'));
      const ctx = canvas.getContext('2d');
      let w, h, particles = [], mouse = { x: -999, y: -999 };
      const PARTICLE_COUNTS = { desktop: 420, tablet: 160, phone: 85 };
      const CONNECT_DIST = 128, MOUSE_RADIUS = 160;
      const COLORS = {
        blue: { fill: 'rgba(58,137,255,0.72)', line: '58,137,255' },
        red: { fill: 'rgba(255,58,58,0.74)', line: '255,58,58' },
        white: { fill: 'rgba(255,255,255,0.86)', line: '255,255,255' },
        black: { fill: 'rgba(2,2,5,0.92)', line: '15,15,18' }
      };

      function getParticleCount() {
        if (window.innerWidth <= 640) return PARTICLE_COUNTS.phone;
        if (window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT) return PARTICLE_COUNTS.tablet;
        return PARTICLE_COUNTS.desktop;
      }

      function getMaxRadius(kind = '') {
        if (kind === 'white') {
          if (window.innerWidth <= 640) return 22;
          if (window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT) return 30;
          return 42;
        }
        if (kind === 'black') {
          if (window.innerWidth <= 640) return 30;
          if (window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT) return 40;
          return 56;
        }
        if (window.innerWidth <= 640) return 8;
        if (window.innerWidth <= RESPONSIVE_BREAKPOINT || window.innerHeight <= RESPONSIVE_HEIGHT_BREAKPOINT) return 10;
        return 12;
      }

      function isCollector(particle) {
        return particle.kind === 'white' || particle.kind === 'black';
      }

      function mass(particle) {
        return particle.r * particle.r;
      }

      function growRadius(base, addition, ratio, kind) {
        const cap = getMaxRadius(kind);
        const areaRadius = Math.sqrt((base * base) + (addition * addition * ratio));
        const remaining = Math.max(0, 1 - base / cap);
        const softenedGrowth = Math.max(0.04, (areaRadius - base) * Math.max(0.18, remaining));
        return Math.min(cap, base + softenedGrowth);
      }

      function preserveMomentum(keeper, a, b) {
        const totalMass = mass(a) + mass(b);
        keeper.vx = ((a.vx * mass(a)) + (b.vx * mass(b))) / totalMass;
        keeper.vy = ((a.vy * mass(a)) + (b.vy * mass(b))) / totalMass;
      }

      function separatePair(a, b, dist, dx, dy) {
        const minDist = a.r + b.r;
        const nx = dist > 0 ? dx / dist : 1;
        const ny = dist > 0 ? dy / dist : 0;
        const overlap = minDist - dist;
        if (overlap <= 0) return { nx, ny };
        const totalMass = mass(a) + mass(b);
        const aShare = mass(b) / totalMass;
        const bShare = mass(a) / totalMass;
        a.x += nx * overlap * aShare;
        a.y += ny * overlap * aShare;
        b.x -= nx * overlap * bShare;
        b.y -= ny * overlap * bShare;
        return { nx, ny };
      }

      function bouncePair(a, b, nx, ny, restitution = 0.88) {
        const rvx = a.vx - b.vx;
        const rvy = a.vy - b.vy;
        const velocityAlongNormal = rvx * nx + rvy * ny;
        if (velocityAlongNormal > 0) return;
        const impulse = (-(1 + restitution) * velocityAlongNormal) / ((1 / mass(a)) + (1 / mass(b)));
        a.vx += (impulse / mass(a)) * nx;
        a.vy += (impulse / mass(a)) * ny;
        b.vx -= (impulse / mass(b)) * nx;
        b.vy -= (impulse / mass(b)) * ny;
      }

      class Particle {
        constructor(kind = Math.random() < 0.5 ? 'blue' : 'red') {
          this.kind = kind;
          const startsLeft = kind === 'blue';
          const sideStart = startsLeft ? 0 : w * 0.55;
          const sideWidth = Math.max(w * 0.45, 1);
          this.x = sideStart + Math.random() * sideWidth;
          this.y = Math.random() * h;
          this.vx = (startsLeft ? 0.25 : -0.25) + (Math.random() - 0.5) * 0.52;
          this.vy = (Math.random() - 0.5) * 0.52;
          this.r = Math.random() * 2.4 + 1.8;
        }
        update() {
          if (!isCollector(this)) {
            particles.forEach(attractor => {
              if (!isCollector(attractor) || attractor === this) return;
              const dx = attractor.x - this.x;
              const dy = attractor.y - this.y;
              const distSq = dx * dx + dy * dy;
              const reach = Math.max(190, attractor.r * 8);
              if (distSq < 1 || distSq > reach * reach) return;
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / reach) * (attractor.r / getMaxRadius(attractor.kind)) * 0.015;
              this.vx += (dx / dist) * force;
              this.vy += (dy / dist) * force;
            });
          }

          this.x += this.vx; this.y += this.vy;
          if (this.x < this.r) { this.x = this.r; this.vx = Math.abs(this.vx); }
          if (this.x > w - this.r) { this.x = w - this.r; this.vx = -Math.abs(this.vx); }
          if (this.y < this.r) { this.y = this.r; this.vy = Math.abs(this.vy); }
          if (this.y > h - this.r) { this.y = h - this.r; this.vy = -Math.abs(this.vy); }
          const dx = this.x - mouse.x, dy = this.y - mouse.y, dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < MOUSE_RADIUS) { const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.03; this.vx += dx * force; this.vy += dy * force; }
          this.vx *= 0.992; this.vy *= 0.992;
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          const maxSpeed = isCollector(this) ? 1.25 : 2;
          if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
          }
        }
        draw() {
          const palette = COLORS[this.kind];
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = palette.fill;
          ctx.shadowColor = this.kind === 'black' ? 'rgba(255,255,255,0.25)' : palette.fill;
          ctx.shadowBlur = isCollector(this) ? 18 : 7;
          ctx.fill();
          ctx.shadowBlur = 0;
          if (this.kind === 'black') {
            ctx.strokeStyle = 'rgba(255,255,255,0.42)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      function syncParticleCount() {
        const targetCount = getParticleCount();
        while (particles.length < targetCount) particles.push(new Particle(particles.length % 2 === 0 ? 'blue' : 'red'));
        if (particles.length > targetCount) particles.length = targetCount;
      }

      function resetParticles() {
        particles = [];
        syncParticleCount();
      }

      window.resetParticleField = resetParticles;

      function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        syncParticleCount();
        particles.forEach(p => {
          p.r = Math.min(p.r, getMaxRadius(p.kind));
          if (p.x > w - p.r) p.x = w - p.r;
          if (p.y > h - p.r) p.y = h - p.r;
        });
      }

      resize();
      window.addEventListener('resize', resize);

      function absorbParticle(keeper, consumed, growthRatio) {
        const previousMass = mass(keeper);
        const previousVx = keeper.vx;
        const previousVy = keeper.vy;
        keeper.r = growRadius(keeper.r, consumed.r, growthRatio, keeper.kind);
        const totalMass = previousMass + mass(consumed);
        keeper.vx = ((previousVx * previousMass) + (consumed.vx * mass(consumed))) / totalMass;
        keeper.vy = ((previousVy * previousMass) + (consumed.vy * mass(consumed))) / totalMass;
      }

      function resolveCollisions() {
        for (let i = particles.length - 1; i >= 0; i--) {
          for (let j = i - 1; j >= 0; j--) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > a.r + b.r) continue;
            const { nx, ny } = separatePair(a, b, dist, dx, dy);

            if ((a.kind === 'red' && b.kind === 'blue') || (a.kind === 'blue' && b.kind === 'red')) {
              const keeper = a.r >= b.r ? a : b;
              const consumedIndex = keeper === a ? j : i;
              preserveMomentum(keeper, a, b);
              keeper.kind = Math.random() < 0.75 ? 'white' : 'black';
              keeper.r = Math.min(getMaxRadius(keeper.kind), Math.max(a.r, b.r) * 1.3);
              particles.splice(consumedIndex, 1);
              if (consumedIndex === i) break;
              continue;
            }

            if (isCollector(a) && isCollector(b) && a.kind === b.kind) {
              const keeper = a.r >= b.r ? a : b;
              const consumedIndex = keeper === a ? j : i;
              preserveMomentum(keeper, a, b);
              keeper.r = growRadius(Math.max(a.r, b.r), Math.min(a.r, b.r), 0.7, keeper.kind);
              particles.splice(consumedIndex, 1);
              if (consumedIndex === i) break;
              continue;
            }

            if (isCollector(a) || isCollector(b)) {
              const keeper = isCollector(a) && !isCollector(b) ? a : isCollector(b) && !isCollector(a) ? b : a.r >= b.r ? a : b;
              const consumedIndex = keeper === a ? j : i;
              const consumed = keeper === a ? b : a;
              absorbParticle(keeper, consumed, 0.3);
              particles.splice(consumedIndex, 1);
              if (consumedIndex === i) break;
              continue;
            }

            bouncePair(a, b, nx, ny);
          }
        }
      }

      function connectParticles() {
        for (let i = 0; i < particles.length; i++) for (let j = i+1; j < particles.length; j++) {
          if (particles[i].kind !== particles[j].kind) continue;
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx*dx+dy*dy);
          const connectDist = isCollector(particles[i]) ? CONNECT_DIST * 0.72 : CONNECT_DIST;
          if (dist < connectDist) {
            const rgb = COLORS[particles[i].kind].line;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb},${(1-dist/connectDist)*0.22})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }
      function animate() {
        ctx.clearRect(0,0,w,h);
        particles.forEach(p => p.update());
        resolveCollisions();
        connectParticles();
        particles.forEach(p => p.draw());
        requestAnimationFrame(animate);
      }
      animate();
      window.addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
      window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
      window.addEventListener('touchmove', e => {
        const touch = e.touches[0];
        if (!touch) return;
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
      }, { passive: true });
      window.addEventListener('pointerleave', () => { mouse.x = -999; mouse.y = -999; });
      window.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
    })();

