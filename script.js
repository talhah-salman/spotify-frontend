
// Wait for the HTML document to fully load before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    

    // Makes play buttons appear when hovering over cards
    
    // Select all cards that contain music items
    const cards = document.querySelectorAll('.artists-card, .card');
    
    // Loop through each card and add hover effects
    cards.forEach(card => {
        // Find the play button inside each card
        const playButton = card.querySelector('.play');
        
        // Only proceed if the card has a play button
        if (playButton) {
            // Initially hide the play button (set opacity to 0)
            playButton.style.opacity = '0';
            playButton.style.transition = 'opacity 0.3s ease';
            
            // When mouse enters the card, show the play button
            card.addEventListener('mouseenter', () => {
                playButton.style.opacity = '1';
            });
            
            // When mouse leaves the card, hide the play button
            card.addEventListener('mouseleave', () => {
                playButton.style.opacity = '0';
            });
            
            // Add click functionality to play buttons
            playButton.addEventListener('click', (event) => {
                // Stop the click from affecting the card (prevents bubbling)
                event.stopPropagation();
                
                // Get card information for the alert message
                const cardTitle = card.querySelector('div:nth-child(3)')?.textContent || 'this item';
                alert(`🎵 Now playing: ${cardTitle}\n(This is a demo - Spotify would start playing here)`);
                
                // Visual feedback - briefly change button color
                playButton.style.backgroundColor = '#1ed760';
                setTimeout(() => {
                    playButton.style.backgroundColor = '#1fdf64';
                }, 200);
            });
        }
    });


    // Makes the "Create Playlist" button interactive

    
    // Find the create playlist button
    const createPlaylistBtn = document.querySelector('.box button');
    
    if (createPlaylistBtn) {
        // Add click functionality
        createPlaylistBtn.addEventListener('click', () => {
            // Create a simple dialog box
            const playlistName = prompt('🎵 Create your new playlist!\n\nEnter a name for your playlist:', 'My New Playlist');
            
            if (playlistName) {
                // If user entered a name and clicked OK
                alert(`✅ Success! "${playlistName}" has been created.\n(This is a demo feature)`);
            } else if (playlistName === '') {
                // If user clicked OK but didn't enter anything
                alert('⚠️ Please enter a playlist name next time!');
            }
            // If user clicked Cancel, do nothing
        });
    }


    // Makes the "Browse podcasts" button interactive

    
    // Find all buttons and get the second one (Browse podcasts)
    const allButtons = document.querySelectorAll('.box button');
    const browsePodcastsBtn = allButtons[1]; // Second button
    
    if (browsePodcastsBtn) {
        browsePodcastsBtn.addEventListener('click', () => {
            alert('🎙️ Opening Podcasts...\n(This would show podcast recommendations in a real app)');
        });
    }


    // Makes the Sign up button interactive

    
    const signUpBtn = document.querySelector('.nav-buttons button:first-child');
    
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            alert('📝 Welcome to Spotify Clone!\n\nThis is a demo sign-up page.\nIn a real app, you would create an account here.');
        });
    }


    // Makes the Log in button interactive

    
    const logInBtn = document.querySelector('.nav-buttons button:last-child');
    
    if (logInBtn) {
        logInBtn.addEventListener('click', () => {
            alert('🔐 Demo Login\n\nUsername: demo@spotify.com\nPassword: ********\n(This is just a preview!)');
        });
    }

    // Makes the language button interactive

    
    const langBtn = document.querySelector('.lang');
    
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            alert('🌐 Language Settings\n\nAvailable languages:\n• English\n• Spanish\n• French\n• German\n• Hindi\n\n(This is a demo - language would change in a real app)');
        });
    }


    // Makes all "Show all" links interactive

    
    const showAllLinks = document.querySelectorAll('.heading-right-data span.grey');
    
    showAllLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Get the section title from the preceding h2
            const sectionTitle = link.previousElementSibling?.textContent || 'this section';
            alert(`📋 Showing all items in "${sectionTitle}"\n(This would expand to show more content in a real app)`);
        });
    });


    // Makes footer links interactive

    
    const footerLinks = document.querySelectorAll('.footer a, .left-footer a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the link from actually navigating
            const linkText = link.textContent.trim();
            alert(`📄 You clicked on: "${linkText}"\n(This would open the legal/privacy page in a real app)`);
        });
    });

  
    // Makes the back/forward arrows interactive

    
    const navArrows = document.querySelectorAll('.nav .arr');
    
    navArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.getAttribute('src')?.includes('less-than')) {
                alert('◀️ Going back to previous page... (Demo)');
            } else {
                alert('▶️ Going forward to next page... (Demo)');
            }
        });
    });


    // This shows how you could add search functionality

    
    // This is a placeholder for future search functionality
    console.log('🎵 Spotify Clone loaded successfully! Ready for music.');


    // Makes the right panel scroll smoothly

    
    const rightPanel = document.querySelector('.right');
    if (rightPanel) {
        rightPanel.style.scrollBehavior = 'smooth';
    }


    // Adds some keyboard shortcuts for power users

    
    document.addEventListener('keydown', (event) => {
        // Press 'P' to simulate play/pause
        if (event.key === 'p' || event.key === 'P') {
            alert('⏯️ Play/Pause (Demo)');
        }
        // Press 'M' to simulate mute
        if (event.key === 'm' || event.key === 'M') {
            alert('🔇 Mute/Unmute (Demo)');
        }
        // Press '?' to show help
        if (event.key === '?' || (event.key === '/' && event.shiftKey)) {
            alert('🎮 Keyboard Shortcuts:\n• P = Play/Pause\n• M = Mute\n• ? = This help menu');
        }
    });


    // Shows a mini player at the bottom when something is playing

    
    // This function creates a mini player that appears when you click play
    function createMiniPlayer() {
        // Check if mini player already exists
        if (document.querySelector('.mini-player')) return;
        
        // Create mini player element
        const miniPlayer = document.createElement('div');
        miniPlayer.className = 'mini-player';
        miniPlayer.innerHTML = `
            <div style="background: #1f1f1f; padding: 10px 20px; border-radius: 10px; margin: 10px; display: flex; align-items: center; gap: 15px; border: 1px solid #333;">
                <div style="width: 40px; height: 40px; background: #333; border-radius: 5px;"></div>
                <div>
                    <div style="font-weight: bold; font-size: 14px;">Now Playing</div>
                    <div style="font-size: 12px; color: #b3b3b3;">Click any play button to start</div>
                </div>
                <div style="margin-left: auto; display: flex; gap: 15px;">
                    <span style="cursor: pointer;">⏮️</span>
                    <span style="cursor: pointer;">⏯️</span>
                    <span style="cursor: pointer;">⏭️</span>
                </div>
            </div>
        `;
        
        // Add it to the bottom of right panel
        const rightPanel = document.querySelector('.right');
        if (rightPanel) {
            rightPanel.appendChild(miniPlayer);
        }
    }
    
    // Call this function to add the mini player
    createMiniPlayer();

    // Update mini player when play is clicked
    document.querySelectorAll('.play').forEach(playBtn => {
        playBtn.addEventListener('click', function() {
            const miniPlayerTitle = document.querySelector('.mini-player div:nth-child(2) div:first-child');
            const miniPlayerSubtitle = document.querySelector('.mini-player div:nth-child(2) div:last-child');
            
            if (miniPlayerTitle && miniPlayerSubtitle) {
                // Find the card that contains this play button
                const parentCard = this.closest('.artists-card, .card');
                if (parentCard) {
                    const songTitle = parentCard.querySelector('div:nth-child(3)')?.textContent || 'Unknown Song';
                    miniPlayerTitle.textContent = '▶️ Now Playing: ' + songTitle;
                    miniPlayerSubtitle.textContent = 'Music is playing...';
                }
            }
        });
    });

    // Welcome message when page loads
    console.log('%c🎵 Spotify Clone - Interactive Demo', 'font-size: 20px; color: #1fdf64; font-weight: bold;');
    console.log('All interactive features are ready! Try clicking around.');
});
