

document.addEventListener('DOMContentLoaded', function() {
    

    
    const cards = document.querySelectorAll('.artists-card, .card');
    
    cards.forEach(card => {
        const playButton = card.querySelector('.play');
        
        if (playButton) {
            playButton.style.opacity = '0';
            playButton.style.transition = 'opacity 0.3s ease';
            
            card.addEventListener('mouseenter', () => {
                playButton.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', () => {
                playButton.style.opacity = '0';
            });
            
            playButton.addEventListener('click', (event) => {
                event.stopPropagation();
                // Simpler alert message
                alert('🎵 Play button clicked! (Demo)');
                
                playButton.style.backgroundColor = '#1ed760';
                setTimeout(() => {
                    playButton.style.backgroundColor = '#1fdf64';
                }, 200);
            });
        }
    });


    // Create Playlist Button
    const createPlaylistBtn = document.querySelector('.box button');
    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', () => {
            alert('✨ Create Playlist (Demo Feature)');
        });
    }

    // Browse Podcasts Button
    const allButtons = document.querySelectorAll('.box button');
    const browsePodcastsBtn = allButtons[1];
    if (browsePodcastsBtn) {
        browsePodcastsBtn.addEventListener('click', () => {
            alert('🎙️ Browse Podcasts (Demo Feature)');
        });
    }

    // Sign Up Button
    const signUpBtn = document.querySelector('.nav-buttons button:first-child');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            alert('📝 Sign Up (Demo Feature)');
        });
    }

    // Log In Button
    const logInBtn = document.querySelector('.nav-buttons button:last-child');
    if (logInBtn) {
        logInBtn.addEventListener('click', () => {
            alert('🔐 Log In (Demo Feature)');
        });
    }

    // Language Selector
    const langBtn = document.querySelector('.lang');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            alert('🌐 Language Settings (Demo Feature)');
        });
    }

    // "Show all" Links
    const showAllLinks = document.querySelectorAll('.heading-right-data span.grey');
    showAllLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert('📋 Show All (Demo Feature)');
        });
    });

    // Footer Links - Prevent navigation but don't show alerts
    const footerLinks = document.querySelectorAll('.footer a, .left-footer a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // No alert - just prevent navigation
        });
    });

    // Navigation Arrows
    const navArrows = document.querySelectorAll('.nav .arr');
    navArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.getAttribute('src')?.includes('less-than')) {
                alert('◀️ Back (Demo)');
            } else {
                alert('▶️ Forward (Demo)');
            }
        });
    });

    // Smooth Scrolling
    const rightPanel = document.querySelector('.right');
    if (rightPanel) {
        rightPanel.style.scrollBehavior = 'smooth';
    }

    // Remove keyboard shortcuts for now (can cause false positives)
    
    // Mini Player
    function createMiniPlayer() {
        if (document.querySelector('.mini-player')) return;
        
        const miniPlayer = document.createElement('div');
        miniPlayer.className = 'mini-player';
        miniPlayer.innerHTML = `
            <div style="background: #1f1f1f; padding: 10px 20px; border-radius: 10px; margin: 10px; display: flex; align-items: center; gap: 15px; border: 1px solid #333;">
                <div style="width: 40px; height: 40px; background: #333; border-radius: 5px;"></div>
                <div>
                    <div style="font-weight: bold; font-size: 14px;">Spotify Clone</div>
                    <div style="font-size: 12px; color: #b3b3b3;">Click any play button</div>
                </div>
            </div>
        `;
        
        const rightPanel = document.querySelector('.right');
        if (rightPanel) {
            rightPanel.appendChild(miniPlayer);
        }
    }
    
    createMiniPlayer();

    console.log('Spotify Clone loaded successfully!');
});
