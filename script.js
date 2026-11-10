/**
 * ==============================================================================
 * PORTFOLIO WEBSITE JAVASCRIPT
 * Client: Mohith | First-year B.Tech CSE (AI) Student
 * Features: Typewriter effect, sticky nav, scroll observer, dark/light theme,
 *           skills & projects modals, mobile drawer, mailto contact handler.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================================
  // 1. TYPING ANIMATION (HERO SUBTITLE)
  // EDIT HERE: Customize the roles/titles you want to cycle through
  // ============================================================================
  const roles = [
    "Engineering Student",
    "AI & CSE Enthusiast",
    "Problem Solver & Coder",
    "Tech Innovator"
  ];

  const typedRoleElem = document.getElementById('typedRole');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 100;
  const erasingDelay = 60;
  const newTextDelay = 1800; // Pause at end of word

  function typeRole() {
    if (!typedRoleElem) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRoleElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedRoleElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = newTextDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(typeRole, delay);
  }

  // Start typewriter effect
  setTimeout(typeRole, 600);


  // ============================================================================
  // 2. STICKY NAVBAR & ACTIVE NAVIGATION LINK HIGHLIGHTING
  // ============================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main > section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Intersection Observer to highlight current active link
  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    navObserver.observe(section);
  });


  // ============================================================================
  // 3. MOBILE HAMBURGER MENU & DRAWER
  // ============================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.classList.toggle('open');
      mobileDrawer.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile drawer when any link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && mobileDrawer.classList.contains('open')) {
        hamburgerBtn.classList.remove('open');
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }


  // ============================================================================
  // 4. THEME TOGGLE (DARK / LIGHT MODE WITH MICRO-INTERACTIONS)
  // Saved to localStorage so visitor preference persists across reloads
  // ============================================================================
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('mohith-portfolio-theme');

  // Initialize theme state (dark by default matching the reference style)
  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.setAttribute('aria-checked', 'true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggle) themeToggle.setAttribute('aria-checked', 'false');
    }
  }

  // Check saved theme
  if (savedTheme === 'dark') {
    applyTheme(true);
  } else if (savedTheme === 'light') {
    applyTheme(false);
  } else {
    // Default to dark mode matching original design aesthetic
    applyTheme(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const willBeDark = !isCurrentlyDark;
      applyTheme(willBeDark);
      localStorage.setItem('mohith-portfolio-theme', willBeDark ? 'dark' : 'light');
    });
  }


  // ============================================================================
  // 5. MODAL DIALOGS (SKILLS & PROJECTS)
  // ============================================================================
  const skillsModal = document.getElementById('skillsModal');
  const openSkillsBtn = document.getElementById('openSkillsModalBtn');
  const closeSkillsBtn = document.getElementById('closeSkillsModalBtn');

  const projectsModal = document.getElementById('projectsModal');
  const openProjectsBtn = document.getElementById('openProjectsModalBtn');
  const closeProjectsBtn = document.getElementById('closeProjectsModalBtn');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent page scroll
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openSkillsBtn && skillsModal) {
    openSkillsBtn.addEventListener('click', () => openModal(skillsModal));
  }
  if (closeSkillsBtn && skillsModal) {
    closeSkillsBtn.addEventListener('click', () => closeModal(skillsModal));
  }

  if (openProjectsBtn && projectsModal) {
    openProjectsBtn.addEventListener('click', () => openModal(projectsModal));
  }
  if (closeProjectsBtn && projectsModal) {
    closeProjectsBtn.addEventListener('click', () => closeModal(projectsModal));
  }

  // Close modals on overlay backdrop click
  [skillsModal, projectsModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(skillsModal);
      closeModal(projectsModal);
    }
  });


  // ============================================================================
  // 6. CONTACT FORM & MAILTO HANDLER
  // ============================================================================
  const toggleContactFormBtn = document.getElementById('toggleContactFormBtn');
  const contactFormCard = document.getElementById('contactFormCard');

  if (toggleContactFormBtn && contactFormCard) {
    toggleContactFormBtn.addEventListener('click', () => {
      const isVisible = contactFormCard.classList.toggle('visible');
      if (isVisible) {
        contactFormCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = document.getElementById('senderName');
        if (nameInput) nameInput.focus();
      }
    });
  }

  // Handle Contact Form Submit (constructs and opens mailto link)
  window.handleContactSubmit = function(event) {
    event.preventDefault();

    // EDIT HERE: YOUR RECEIVING EMAIL
    const recipient = 'mohithcs030@gmail.com';

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('msgSubject').value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return false;
    }

    const emailBody = `Hi Mohith,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your Portfolio Website`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    // Reset form after short delay
    setTimeout(() => {
      document.getElementById('contactForm').reset();
    }, 1000);

    return false;
  };


  // ============================================================================
  // 7. SMOOTH CARD HOVER SOUNDS & ENHANCEMENTS (SUBTLE POLISH)
  // ============================================================================
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });


  // ============================================================================
  // 8. HERO VISUAL VIEW SWITCHER (3D SPLINE DRONE vs PORTRAIT PHOTO)
  // ============================================================================
  const show3dBtn = document.getElementById('show3dBtn');
  const showPhotoBtn = document.getElementById('showPhotoBtn');
  const splinePanel = document.getElementById('splinePanel');
  const photoPanel = document.getElementById('photoPanel');
  const heroVisualFrame = document.getElementById('heroVisualFrame');
  const splineFullscreenBtn = document.getElementById('splineFullscreenBtn');

  function switchHeroView(target) {
    if (target === 'spline') {
      if (show3dBtn) {
        show3dBtn.classList.add('active');
        show3dBtn.setAttribute('aria-selected', 'true');
      }
      if (showPhotoBtn) {
        showPhotoBtn.classList.remove('active');
        showPhotoBtn.setAttribute('aria-selected', 'false');
      }
      if (splinePanel) splinePanel.classList.add('active');
      if (photoPanel) photoPanel.classList.remove('active');
    } else if (target === 'photo') {
      if (showPhotoBtn) {
        showPhotoBtn.classList.add('active');
        showPhotoBtn.setAttribute('aria-selected', 'true');
      }
      if (show3dBtn) {
        show3dBtn.classList.remove('active');
        show3dBtn.setAttribute('aria-selected', 'false');
      }
      if (photoPanel) photoPanel.classList.add('active');
      if (splinePanel) splinePanel.classList.remove('active');
    }
  }

  if (show3dBtn) {
    show3dBtn.addEventListener('click', () => switchHeroView('spline'));
  }

  if (showPhotoBtn) {
    showPhotoBtn.addEventListener('click', () => switchHeroView('photo'));
  }

  // Fullscreen 3D Drone toggle
  if (splineFullscreenBtn && heroVisualFrame) {
    splineFullscreenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        if (heroVisualFrame.requestFullscreen) {
          heroVisualFrame.requestFullscreen();
        } else if (heroVisualFrame.webkitRequestFullscreen) {
          heroVisualFrame.webkitRequestFullscreen();
        } else if (heroVisualFrame.msRequestFullscreen) {
          heroVisualFrame.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const isFull = !!document.fullscreenElement;
      const icon = splineFullscreenBtn.querySelector('i');
      if (icon) {
        icon.className = isFull ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
      }
    });
  }

});

