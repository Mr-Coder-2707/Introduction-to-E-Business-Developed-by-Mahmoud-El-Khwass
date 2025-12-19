
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. INJECT CSS STYLES ---
    const style = document.createElement('style');
    style.textContent = `
        /* =========================================
           NAVBAR & GLOBAL STYLES
           ========================================= */
        :root {
            --nav-bg: rgba(255, 255, 255, 0.85);
            --nav-border: rgba(0, 0, 0, 0.1);
            --nav-text: #333;
            --nav-hover: #007bff;
            --nav-height: 70px;
            --primary-accent: #667eea;
        }

        body.dark-mode {
            --nav-bg: rgba(26, 26, 26, 0.95);
            --nav-border: rgba(255, 255, 255, 0.15);
            --nav-text: #e8e8e8;
            --nav-hover: #60a5fa;
            
            /* Dark Mode Variables Override */
            --paper-bg: #1a1a1a;
            --bg-paper: #1a1a1a;
            --text-color: #e8e8e8;
            --line-color: #2a2a2a;
            --margin-line: #7a3333;
            --shadow: 0 4px 12px rgba(0,0,0,0.6);
            
            /* Pastel colors for dark mode - muted but visible */
            --pastel-blue: #3b5998;
            --pastel-orange: #d97706;
            --pastel-green: #059669;
            --pastel-pink: #be185d;
            --pastel-purple: #7c3aed;
            --pastel-gray: #4b5563;
            
            background-color: #1a1a1a !important;
            color: #e8e8e8 !important;
            background-image: linear-gradient(#2a2a2a 1px, transparent 1px) !important;
        }

        /* Fix specific file issues in dark mode */
        body.dark-mode .section-block,
        body.dark-mode .card, 
        body.dark-mode header,
        body.dark-mode .block-content,
        body.dark-mode .model-card,
        body.dark-mode .homework-box,
        body.dark-mode .block,
        body.dark-mode .example-box,
        body.dark-mode .quiz-item,
        body.dark-mode article {
            background-color: #2d2d2d !important;
            border-color: #3f3f3f !important;
            color: #e8e8e8 !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
        }

        body.dark-mode .def-box,
        body.dark-mode .case-study,
        body.dark-mode .grid-2 > div,
        body.dark-mode .grid-3 > div,
        body.dark-mode .challenge-item {
             background-color: #242424 !important;
             color: #e0e0e0 !important;
             border-color: #3f3f3f !important;
        }
        
        body.dark-mode h1, 
        body.dark-mode h2, 
        body.dark-mode h3, 
        body.dark-mode h4,
        body.dark-mode strong {
            color: #f5f5f5 !important;
        }
        
        /* Dark mode header backgrounds with better contrast */
        body.dark-mode .bg-blue, body.dark-mode .bg-sky, body.dark-mode .theme-blue .block-header { 
            background-color: #1e3a8a !important; 
            color: #fff !important;
        }
        body.dark-mode .bg-orange, body.dark-mode .theme-orange .block-header { 
            background-color: #9a3412 !important; 
            color: #fff !important;
        }
        body.dark-mode .bg-green, body.dark-mode .theme-green .block-header { 
            background-color: #064e3b !important; 
            color: #fff !important;
        }
        body.dark-mode .bg-pink, body.dark-mode .theme-pink .block-header { 
            background-color: #831843 !important; 
            color: #fff !important;
        }
        body.dark-mode .bg-purple, body.dark-mode .theme-purple .block-header { 
            background-color: #581c87 !important; 
            color: #fff !important;
        }
        body.dark-mode .bg-gray, body.dark-mode .theme-gray .block-header { 
            background-color: #374151 !important; 
            color: #fff !important;
        }
        body.dark-mode .theme-red .block-header {
            background-color: #7f1d1d !important;
            color: #fff !important;
        }
        
        /* Improve highlight color for dark mode */
        body.dark-mode .highlight {
            background-color: #854d0e !important;
            color: #fef3c7 !important;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.3) !important;
        }
        
        /* Better table styling in dark mode */
        body.dark-mode .comparison-table th, body.dark-mode table th {
            background-color: #1e293b !important;
            color: #f5f5f5 !important;
            border-color: #3f3f3f !important;
        }
        
        body.dark-mode .comparison-table td, body.dark-mode table td {
            border-color: #3f3f3f !important;
            background-color: #1a1a1a !important;
        }

        body.dark-mode table tr:nth-child(even) {
            background-color: #242424 !important;
        }
        
        /* Flow icons in dark mode */
        body.dark-mode .flow-icon {
            background: #60a5fa !important;
            color: #1a1a1a !important;
        }
        
        /* Model tags in dark mode */
        body.dark-mode .model-tag {
            background: #60a5fa !important;
            color: #1a1a1a !important;
        }
        
        /* Timeline improvements */
        body.dark-mode .timeline-item {
            border-left-color: #7c3aed !important;
        }
        
        body.dark-mode .timeline-item::before {
            background: #1a1a1a !important;
            border-color: #7c3aed !important;
        }
        
        /* Better link colors in dark mode */
        body.dark-mode a {
            color: #60a5fa !important;
        }
        
        body.dark-mode a:hover {
            color: #93c5fd !important;
        }
        
        /* Sub-list styling */
        body.dark-mode .sub-list {
            border-left-color: #3f3f3f !important;
            color: #c0c0c0 !important;
        }
        
        /* Block number styling */
        body.dark-mode .block-number {
            background: rgba(96, 165, 250, 0.2) !important;
            border-color: #60a5fa !important;
            color: #f5f5f5 !important;
        }
        
        /* Toggle button */
        body.dark-mode .toggle-btn {
            color: #c0c0c0 !important;
        }
        
        /* Homework box special styling */
        body.dark-mode .homework-box {
            border-color: #059669 !important;
            background-color: #242424 !important;
        }

        /* Navbar Layout */
        body {
            padding-top: var(--nav-height) !important; /* Push content down */
        }

        .main-navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: var(--nav-height);
            background: var(--nav-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--nav-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2rem;
            z-index: 9999;
            font-family: 'Segoe UI', sans-serif;
            transition: all 0.3s ease;
        }

        .nav-brand {
            font-weight: 700;
            font-size: 1.2rem;
            color: var(--nav-text);
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-links {
            display: flex;
            gap: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .nav-links li {
            margin: 0;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--nav-text);
            font-weight: 600;
            font-size: 0.95rem;
            transition: color 0.2s;
            position: relative;
            padding: 5px 0;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--nav-hover);
            transition: width 0.3s;
        }

        .nav-links a:hover, .nav-links a.active {
            color: var(--nav-hover);
        }

        .nav-links a:hover::after, .nav-links a.active::after {
            width: 100%;
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        /* Search Bar */
        .search-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        .search-input {
            padding: 0.5rem 1rem 0.5rem 2.2rem;
            border-radius: 20px;
            border: 1px solid var(--nav-border);
            background: rgba(255,255,255,0.1);
            color: var(--nav-text);
            font-size: 0.9rem;
            width: 150px;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            width: 250px;
            outline: none;
            border-color: var(--nav-hover);
            background: rgba(255,255,255,0.2);
        }

        .search-icon {
            position: absolute;
            left: 10px;
            color: var(--nav-text);
            opacity: 0.6;
            pointer-events: none;
        }

        /* Progress Bar */
        .progress-bar-container {
            position: fixed;
            top: var(--nav-height);
            left: 0;
            width: 100%;
            height: 4px;
            background: transparent;
            z-index: 9998;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(to right, #667eea, #764ba2);
            width: 0%;
            transition: width 0.1s ease;
        }

        /* Back to Top */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--nav-hover);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
            z-index: 1000;
        }

        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .back-to-top:hover {
            transform: translateY(-5px);
            background: #0056b3;
        }

        /* Print Button */
        .print-btn {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: var(--nav-text);
            transition: transform 0.3s;
        }
        .print-btn:hover {
            transform: scale(1.1);
            color: var(--nav-hover);
        }

        /* Dev Info Button */
        .dev-info-btn {
            width: 35px;
            height: 35px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            cursor: pointer;
            border: 2px solid rgba(255,255,255,0.2);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.3s;
            position: relative;
        }

        .dev-info-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }

        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .dev-modal {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            max-width: 450px;
            width: 90%;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0,0,0,0.25);
            transform: translateY(30px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            border: 1px solid rgba(0,0,0,0.05);
        }

        body.dark-mode .dev-modal {
            background: #1e1e1e;
            color: #fff;
            border-color: rgba(255,255,255,0.1);
        }

        .modal-overlay.active .dev-modal {
            transform: translateY(0);
        }

        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: #888;
            transition: color 0.2s;
        }
        .close-modal:hover { color: #f43f5e; }

        @media (max-width: 900px) {
            .search-input { width: 100px; }
            .search-input:focus { width: 180px; }
        }

        /* Burger Menu Styles */
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--nav-text);
            font-size: 1.8rem;
            padding: 5px;
            z-index: 10001;
            transition: transform 0.3s ease;
        }

        .menu-toggle:hover {
            color: var(--nav-hover);
        }

        @media (max-width: 768px) {
            .nav-brand span { 
                display: inline; 
                font-size: 0.9rem;
            }
            .main-navbar { 
                padding: 0 0.8rem; 
                justify-content: space-between;
                gap: 5px;
            }
            
            .menu-toggle {
                display: block;
                order: 3;
            }

            .nav-brand {
                order: 1;
            }

            .nav-actions {
                order: 2;
                margin-left: auto;
                margin-right: 15px;
            }

            .nav-links {
                position: fixed;
                top: var(--nav-height);
                left: 0;
                width: 100%;
                height: 0;
                background: var(--nav-bg);
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                overflow: hidden;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                border-bottom: 1px solid var(--nav-border);
                gap: 0;
                padding: 0;
            }

            .nav-links.active {
                height: auto;
                padding: 20px 0;
                max-height: 400px;
            }

            .nav-links li {
                width: 100%;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
            }

            .nav-links.active li {
                opacity: 1;
                transform: translateY(0);
                padding: 15px 0;
            }

            /* Delay for menu item animation */
            .nav-links.active li:nth-child(1) { transition-delay: 0.1s; }
            .nav-links.active li:nth-child(2) { transition-delay: 0.2s; }
            .nav-links.active li:nth-child(3) { transition-delay: 0.3s; }
            .nav-links.active li:nth-child(4) { transition-delay: 0.4s; }

            .nav-links a {
                font-size: 1.2rem;
                display: block;
                width: 100%;
                text-align: center;
            }
            
            .search-container { display: none; }
        }

        /* =========================================
           LOADING SCREEN
           ========================================= */
        #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 100000;
            transition: opacity 0.6s ease, visibility 0.6s;
        }

        body.dark-mode #loader-wrapper {
            background: #1a1a1a;
        }

        .loader-content {
            text-align: center;
            animation: fadeInScale 0.8s ease-out;
        }

        .loader-logo {
            font-size: 80px;
            color: var(--nav-hover);
            margin-bottom: 20px;
            display: block;
            animation: pulse 2s infinite;
        }

        .loader-name {
            font-size: 1.8rem;
            font-weight: 800;
            color: #2c3e50;
            margin-bottom: 5px;
            letter-spacing: -0.5px;
        }

        body.dark-mode .loader-name {
            color: #f5f5f5;
        }

        .loader-nickname {
            font-size: 1.1rem;
            color: var(--nav-hover);
            font-weight: 600;
            font-family: 'Courier New', Courier, monospace;
            background: rgba(102, 126, 234, 0.1);
            padding: 4px 12px;
            border-radius: 20px;
            display: inline-block;
        }

        .loader-bar-container {
            width: 200px;
            height: 4px;
            background: rgba(0,0,0,0.05);
            border-radius: 10px;
            margin-top: 30px;
            overflow: hidden;
            position: relative;
        }

        body.dark-mode .loader-bar-container {
            background: rgba(255,255,255,0.1);
        }

        .loader-bar {
            position: absolute;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, var(--nav-hover), transparent);
            animation: loadingMove 1.5s infinite linear;
        }

        @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes loadingMove {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .loader-hidden {
            opacity: 0;
            visibility: hidden;
        }

        /* Print Specific Styles */
        @media print {
            .main-navbar, .progress-bar-container, .back-to-top, .nav-dots, .nav-actions, .search-container, .toc-side-menu, .toc-trigger {
                display: none !important;
            }
            body { 
                padding-top: 0 !important; 
                background-image: none !important;
            }
            .section-block, .block, .card {
                break-inside: avoid;
                box-shadow: none !important;
                border: 1px solid #eee !important;
            }
            .share-area {
                display: block !important;
                break-inside: avoid;
                margin-top: 2rem;
                padding: 1rem;
                border: 1px solid #eee;
                border-radius: 12px;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .share-btn {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                border: 1px solid #ddd !important;
                color: white !important;
            }
            .share-btn.fb { background-color: #1877f2 !important; }
            .share-btn.tw { background-color: #1da1f2 !important; }
            .share-btn.wa { background-color: #25d366 !important; }
            
            .material-symbols-outlined {
                vertical-align: middle;
            }
        }
    `;
    document.head.appendChild(style);

    // --- 0. INJECT LOADING SCREEN ---
    const loaderHTML = `
        <div id="loader-wrapper">
            <div class="loader-content">
                <span class="material-symbols-outlined loader-logo">terminal</span>
                <div class="loader-name">Mahmoud Sabry Al-Khawass</div>
                <div class="loader-nickname">mr-coder-2027</div>
                <div class="loader-bar-container">
                    <div class="loader-bar"></div>
                </div>
            </div>
        </div>
    `;
    const loaderDiv = document.createElement('div');
    loaderDiv.innerHTML = loaderHTML;
    document.body.prepend(loaderDiv.firstElementChild);

    // Hide loader after page load (with small delay for effect)
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader-wrapper');
        setTimeout(() => {
            if (loader) loader.classList.add('loader-hidden');
            // Remove from DOM after transition
            setTimeout(() => loader?.remove(), 600);
        }, 1500);
    });

    // --- 2. INJECT HTML NAVIGATION ---
    const navHTML = `
        <a href="index.html" class="nav-brand" style="text-decoration: none; color: inherit;">
            <span class="material-symbols-outlined" style="font-size: 28px; color: var(--nav-hover);">school</span>
            <span>StudyPortal</span>
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
            <span class="material-symbols-outlined">menu</span>
        </button>
        <ul class="nav-links">
            <li><a href="index.html">Week 1</a></li>
            <li><a href="index1.html">Week 2</a></li>
            <li><a href="index2.html">Week 3</a></li>
            <li><a href="index3.html">Week 4</a></li>
        </ul>
        <div class="search-container">
            <span class="material-symbols-outlined search-icon">search</span>
            <input type="text" class="search-input" placeholder="Search topics..." id="siteSearch">
        </div>
        <div class="nav-actions">
            <button class="print-btn" title="Print as PDF" id="printBtn">
                <span class="material-symbols-outlined">print</span>
            </button>
            <button class="theme-switch" id="themeToggle" title="Toggle Dark Mode" style="background:none; border:none; cursor:pointer; color:var(--nav-text);">
                <span class="material-symbols-outlined" id="themeIcon">dark_mode</span>
            </button>
            <div class="dev-info-btn" id="devInfoBtn" title="Developer Info">
                <span class="material-symbols-outlined" style="font-size: 20px;">info</span>
            </div>
        </div>
    `;

    const navElement = document.createElement('nav');
    navElement.className = 'main-navbar';
    navElement.innerHTML = navHTML;
    document.body.insertBefore(navElement, document.body.firstChild);

    // Inject Progress Bar
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';
    progressBarContainer.innerHTML = '<div class="progress-bar" id="pageProgress"></div>';
    document.body.insertBefore(progressBarContainer, navElement.nextSibling);

    // Inject Back to Top
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
    backToTop.title = 'Back to Top';
    document.body.appendChild(backToTop);

    // --- 3. MODAL HTML ---
    const modalHTML = `
        <div class="dev-modal">
            <button class="close-modal">
                <span class="material-symbols-outlined">close</span>
            </button>
            <h2 style="margin-bottom: 0.5rem; font-weight: 800;">Developer Information</h2>
            <div style="font-size: 5rem; margin-bottom: 1rem; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); display: flex; justify-content: center;">
                <span class="material-symbols-outlined" style="font-size: 80px; color: var(--nav-hover);">terminal</span>
            </div>
            <h2 style="margin-bottom: 1rem; color: var(--nav-hover); font-size: 1.8rem; letter-spacing: -0.5px;">Mahmoud Sabry Al-Khawass</h2>
            <p style="margin-bottom: 2rem; line-height: 1.7; color: #555;" id="modalDesc">
                This academic platform was professionally architected and enhanced by 
                <strong>Mahmoud Sabry Al-Khawass</strong> to provide a premium e-learning experience.
            </p>
            <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem; border: 1px solid rgba(102, 126, 234, 0.2); text-align: left;">
                <strong style="display: block; margin-bottom: 10px; color: #444;">Technical Core:</strong>
                <ul style="list-style: none; padding: 0; font-size: 0.95rem; color: #666;">
                    <li style="margin-bottom: 5px; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined" style="font-size: 18px;">rocket_launch</span> 
                        Web Architecture & Optimization
                    </li>
                    <li style="margin-bottom: 5px; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined" style="font-size: 18px;">palette</span> 
                        Modern UI/UX Design Systems
                    </li>
                    <li style="margin-bottom: 5px; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined" style="font-size: 18px;">code</span> 
                        Software Engineering Solutions
                    </li>
                </ul>
            </div>
            <p style="font-size: 0.85rem; color: #999;">&copy; 2024-2025. All Rights Reserved.</p>
        </div>
    `;
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = modalHTML;
    document.body.appendChild(modalOverlay);

    // --- 4. LOGIC ---
    
    // Active Link Highlighting
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Dark Mode Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const active = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', active);
        themeIcon.textContent = active ? 'light_mode' : 'dark_mode';
    });

    // Modal Logic
    const devBtn = document.getElementById('devInfoBtn');
    const closeBtn = document.querySelector('.close-modal');
    
    function toggleModal() {
        modalOverlay.classList.toggle('active');
        if (document.body.classList.contains('dark-mode')) {
            document.getElementById('modalDesc').style.color = '#ccc';
        } else {
            document.getElementById('modalDesc').style.color = '#555';
        }
    }

    devBtn.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) toggleModal();
    });

    // Progress Bar Logic
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const pageProgress = document.getElementById("pageProgress");
        if (pageProgress) pageProgress.style.width = scrolled + "%";

        // Show/Hide Back to Top
        if (winScroll > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Back to Top Logic
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Print logic
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Burger Menu Logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggle.querySelector('.material-symbols-outlined');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            menuIcon.textContent = isActive ? 'close' : 'menu';
            
            // Toggle body scroll
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.textContent = 'menu';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.textContent = 'menu';
                document.body.style.overflow = '';
            }
        });
    }

    // Search logic (Internal Keyword Search)

    // SEO Meta Tags & Open Graph (OG) Tags for Social Media Sharing
    const metaTags = {
        'description': 'Professional E-Business Study Portal covering digital business models, strategies, e-procurement, and future trends.',
        'og:title': 'StudyPortal | Professional E-Business Study Material',
        'og:description': 'Unlock comprehensive e-business knowledge with our premium study portal. Master strategies, models, and future trends.',
        'og:image': 'https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-614.jpg', // Placeholder for professional look
        'og:url': window.location.href,
        'og:type': 'website',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'StudyPortal | E-Business Study Material',
        'twitter:description': 'Comprehensive E-Business curriculum and resources.',
        'twitter:image': 'https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-614.jpg'
    };

    Object.entries(metaTags).forEach(([key, value]) => {
        let tag = document.querySelector(`meta[name="${key}"], meta[property="${key}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            if (key.startsWith('og:')) {
                tag.setAttribute('property', key);
            } else {
                tag.setAttribute('name', key);
            }
            document.head.appendChild(tag);
        }
        tag.content = value;
    });
    
    // Add Favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>';
        document.head.appendChild(favicon);
    }

    // --- 5. DYNAMIC TABLE OF CONTENTS ---
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-side-menu';
    tocContainer.innerHTML = `<h4 style="margin-bottom: 10px; border-bottom: 2px solid var(--nav-hover); padding-bottom: 5px; display: flex; align-items: center; gap: 8px;"><span class="material-symbols-outlined">list</span> On This Page</h4><ul id="tocList" style="list-style: none; padding: 0;"></ul>`;
    
    // TOC Styles
    const tocStyle = document.createElement('style');
    tocStyle.textContent = `
        .toc-side-menu {
            position: fixed;
            left: -250px;
            top: 50%;
            transform: translateY(-50%);
            width: 220px;
            background: var(--nav-bg);
            backdrop-filter: blur(10px);
            border: 1px solid var(--nav-border);
            padding: 1.5rem;
            border-radius: 0 20px 20px 0;
            z-index: 999;
            transition: all 0.4s ease;
            box-shadow: 10px 0 30px rgba(0,0,0,0.1);
            max-height: 70vh;
            overflow-y: auto;
        }
        .toc-side-menu.active { left: 0; }
        .toc-trigger {
            position: fixed;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: var(--nav-hover);
            color: white;
            padding: 15px 8px;
            border-radius: 0 8px 8px 0;
            cursor: pointer;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }
        .toc-trigger span:not(.material-symbols-outlined) {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            font-size: 0.8rem;
            font-weight: bold;
            letter-spacing: 1px;
        }
        #tocList li { margin-bottom: 8px; font-size: 0.85rem; }
        #tocList a { text-decoration: none; color: var(--nav-text); transition: color 0.2s; display: block; }
        #tocList a:hover { color: var(--nav-hover); transform: translateX(5px); }
        
        @media (max-width: 1200px) {
            .toc-side-menu { width: 180px; }
            .toc-trigger { padding: 10px 5px; }
            .toc-trigger span:not(.material-symbols-outlined) { font-size: 0.7rem; }
        }

        @media (max-width: 480px) {
            .toc-trigger { top: 70%; } /* Move lower on very small screens to avoid overlap */
        }

        /* Share Area */
        .share-area {
            margin-top: 4rem;
            padding: 2rem;
            border-top: 2px solid var(--nav-border);
            text-align: center;
        }
        .share-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        .share-btn {
            padding: 10px 20px;
            border-radius: 30px;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            font-size: 0.9rem;
        }
        .share-btn:hover { transform: scale(1.05); }
        .fb { background: #1877f2; }
        .tw { background: #1da1f2; }
        .wa { background: #25d366; }
    `;
    document.head.appendChild(tocStyle);
    
    const tocTrigger = document.createElement('div');
    tocTrigger.className = 'toc-trigger';
    tocTrigger.innerHTML = '<span class="material-symbols-outlined">menu_open</span><span>CONTENTS</span>';
    document.body.appendChild(tocTrigger);
    document.body.appendChild(tocContainer);

    tocTrigger.addEventListener('click', () => tocContainer.classList.toggle('active'));

    const h2s = document.querySelectorAll('h2');
    const tocList = document.getElementById('tocList');
    if (tocList) {
        h2s.forEach((h2, idx) => {
            if (!h2.id) h2.id = 'heading-' + idx;
            const li = document.createElement('li');
            li.innerHTML = `<a href="#${h2.id}">${h2.innerText}</a>`;
            tocList.appendChild(li);
        });
    }

    // --- 6. SOCIAL SHARE AREA ---
    const shareContainer = document.createElement('div');
    shareContainer.className = 'share-area';
    shareContainer.innerHTML = `
        <h3>Share this Study Material</h3>
        <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.5rem;">Help your colleagues by sharing this comprehensive guide!</p>
        <div class="share-buttons">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="share-btn fb">
                <span class="material-symbols-outlined">share</span> Facebook
            </a>
            <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this awesome E-Business Study Material!" target="_blank" class="share-btn tw">
                <span class="material-symbols-outlined">chat</span> Twitter
            </a>
            <a href="https://api.whatsapp.com/send?text=Check out this awesome E-Business Study Material! ${encodeURIComponent(window.location.href)}" target="_blank" class="share-btn wa">
                <span class="material-symbols-outlined">send</span> WhatsApp
            </a>
            <button id="copyLinkBtn" class="share-btn" style="background: var(--pastel-gray); color: var(--nav-text);">
                <span class="material-symbols-outlined">content_copy</span> Copy Link
            </button>
            <button id="previewShareBtn" class="share-btn" style="background: var(--nav-hover); color: white;">
                <span class="material-symbols-outlined">visibility</span> Live Preview
            </button>
        </div>
    `;
    const container = document.querySelector('.container');
    if (container) container.appendChild(shareContainer);

    // Copy Link Logic
    const copyBtn = document.getElementById('copyLinkBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span class="material-symbols-outlined">check</span> Copied!';
                setTimeout(() => copyBtn.innerHTML = originalText, 2000);
            });
        });
    }

    // Preview Share Modal Logic (Designing a Social-like Card)
    const previewBtn = document.getElementById('previewShareBtn');
    if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            const previewModalHTML = `
                <div class="modal-overlay active" id="previewOverlay">
                    <div class="dev-modal" style="max-width: 550px; text-align: left; padding: 0; overflow: hidden; background: #1a1a1a; color: white;">
                        <div style="padding: 15px 20px; border-bottom: 1px solid #333; display: flex; justify-content: space-between; align-items: center;">
                            <h3 style="margin: 0; font-size: 1.1rem; color: #e4e6eb;">Create Post</h3>
                            <button id="closePreview" style="background: none; border: none; color: #b0b3b8; cursor: pointer; font-size: 1.5rem;">&times;</button>
                        </div>
                        <div style="padding: 15px 20px;">
                            <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 15px;">
                                <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--nav-hover); display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;">MS</div>
                                <div>
                                    <div style="font-weight: 600; color: #e4e6eb;">Mahmoud Sabry Al-Khawass</div>
                                    <div style="background: #333; font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; color: #b0b3b8;">
                                        <span class="material-symbols-outlined" style="font-size: 12px;">public</span> Public
                                    </div>
                                </div>
                            </div>
                            <div style="color: #e4e6eb; margin-bottom: 15px; font-size: 0.95rem;">Check out this awesome E-Business Study Material! 🎓🚀</div>
                            <div style="border: 1px solid #333; border-radius: 8px; overflow: hidden;">
                                <img src="${metaTags['og:image']}" style="width: 100%; height: 250px; object-fit: cover;">
                                <div style="padding: 12px; background: #242526;">
                                    <div style="font-size: 0.75rem; color: #b0b3b8; text-transform: uppercase;">${window.location.hostname}</div>
                                    <div style="font-weight: bold; color: #e4e6eb; font-size: 1.05rem; margin-top: 4px;">${metaTags['og:title']}</div>
                                    <div style="font-size: 0.9rem; color: #b0b3b8; margin-top: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${metaTags['og:description']}</div>
                                </div>
                            </div>
                            <button style="width: 100%; background: #0866ff; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; margin-top: 15px; cursor: pointer;">Post</button>
                        </div>
                    </div>
                </div>
            `;
            const div = document.createElement('div');
            div.innerHTML = previewModalHTML;
            document.body.appendChild(div);

            const close = div.querySelector('#closePreview');
            close.onclick = () => div.remove();
            div.querySelector('#previewOverlay').onclick = (e) => {
                if (e.target.id === 'previewOverlay') div.remove();
            };
        });
    }
});
