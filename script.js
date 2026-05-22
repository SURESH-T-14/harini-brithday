// ==================== SCENE MANAGEMENT ====================

const loadingScene = document.getElementById('loadingScene');
const openingScene = document.getElementById('openingScene');
const cakeScene = document.getElementById('cakeScene');
const letterScene = document.getElementById('letterScene');
const videoScene = document.getElementById('videoScene');
const finalScene = document.getElementById('finalScene');
const noResponse = document.getElementById('noResponse');
const videoPopupOverlay = document.getElementById('videoPopupOverlay');

// Button elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const retryBtn = document.getElementById('retryBtn');
const cakeNextBtn = document.getElementById('cakeNextBtn');
const letterNextBtn = document.getElementById('letterNextBtn');
const videoNextBtn = document.getElementById('videoNextBtn');
const restartBtn = document.getElementById('restartBtn');
const popupStartBtn = document.getElementById('popupStartBtn');
const videoDownloadBtn = document.getElementById('videoDownloadBtn');

// Video element
const videoElement = document.getElementById('videoElement');
const driveVideoId = '13RvIErxrkGrePpxxtZd53Jqlwq_zjD99';
const driveVideoDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveVideoId}`;
const driveVideoPreviewUrl = `https://drive.google.com/file/d/${driveVideoId}/preview`;

// ==================== VIDEO DOWNLOAD ====================

if (videoDownloadBtn) {
    videoDownloadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = driveVideoDownloadUrl;
        link.target = '_blank';
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// ==================== HIDE/SHOW SCENES ====================
function hideScene(scene) {
    scene.classList.add('hidden');
    scene.classList.remove('active');
}

// Show scene
function showScene(scene) {
    scene.classList.remove('hidden');
    scene.classList.add('active');
}

// ==================== COUNTDOWN SCENE ====================

// Removed - skipping to cake

// ==================== CAKE SCENE ====================

function createPoppers() {
    const container = document.getElementById('poppersContainer');
    const colors = ['#FF1493', '#FFB6D9', '#FFC9E3', '#FF69B4', '#FFD700', '#FFA500'];
    
    // Create popper shower effect (80 particles falling from top)
    for (let i = 0; i < 80; i++) {
        const popper = document.createElement('div');
        popper.className = 'popper shower';
        popper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random position across width
        const startX = Math.random() * 100;
        
        // Random horizontal drift
        const randomDrift = (Math.random() - 0.5) * 400;
        
        // Random fall duration (1.5 - 2.5 seconds)
        const duration = 1.5 + Math.random() * 1;
        
        popper.style.setProperty('--drift', `${randomDrift}px`);
        popper.style.setProperty('--duration', `${duration}s`);
        
        popper.style.left = `${startX}%`;
        popper.style.top = '-30px';
        
        container.appendChild(popper);
        
        // Remove after animation
        setTimeout(() => popper.remove(), duration * 1000 + 100);
    }
}

function initiateCakeCountdown() {
    const countdownDisplay = document.getElementById('countdownDisplay');
    const cakeText = document.getElementById('cakeText');
    const cakeNextBtn = document.getElementById('cakeNextBtn');
    const flames = document.querySelectorAll('.flame');
    
    let count = 3;
    
    // Show countdown
    const countdownInterval = setInterval(() => {
        countdownDisplay.textContent = count;
        countdownDisplay.style.animation = 'none';
        setTimeout(() => {
            countdownDisplay.style.animation = 'countdownPulse 0.6s ease-in-out';
        }, 10);
        
        if (count === 0) {
            clearInterval(countdownInterval);
            
            // Extinguish flames and trigger poppers
            flames.forEach((flame, index) => {
                setTimeout(() => {
                    flame.style.animation = 'flameExtinguish 0.8s ease-out forwards';
                    flame.classList.add('extinguished');
                    
                    // Trigger poppers when first flame extinguishes
                    if (index === 0) {
                        createPoppers();
                    }
                }, index * 150);
            });
            
            // Hide countdown and show make a wish text
            setTimeout(() => {
                countdownDisplay.style.display = 'none';
                cakeText.style.transition = 'opacity 0.8s ease';
                cakeText.style.opacity = '1';
                cakeNextBtn.style.transition = 'opacity 0.8s ease';
                cakeNextBtn.style.opacity = '1';
            }, 700);
        }
        
        count--;
    }, 1000);
}

cakeNextBtn.addEventListener('click', () => {
    hideScene(cakeScene);
    setTimeout(() => {
        showScene(letterScene);
        // Ensure letter scrolls to top
        ensureLetterScrollTop();
        // Start typewriter effect
        setTimeout(() => {
            initiateTypewriterEffect();
        }, 400);
    }, 320);
});

// ==================== LETTER SCENE ====================

function initiateTypewriterEffect() {
    const letterContainer = document.querySelector('.letter-container');
    const letterLines = document.querySelectorAll('.letter-line');
    const typeSpeed = 30; // milliseconds per character
    const pauseBetweenLines = 200; // milliseconds between lines
    
    // Ensure scroll starts at top
    letterContainer.scrollTop = 0;
    
    let totalDelay = 0;
    
    letterLines.forEach((line, index) => {
        const originalText = line.textContent;
        line.textContent = '';
        line.classList.add('typewriter');
        
        // Remove any border or animation styles
        line.style.border = 'none';
        line.style.animation = 'none';
        
        // Delay each line
        setTimeout(() => {
            let charIndex = 0;
            
            const typeInterval = setInterval(() => {
                if (charIndex < originalText.length) {
                    line.textContent += originalText.charAt(charIndex);
                    charIndex++;
                    
                    // Keep scrolling to show first line at top
                    if (index === 0) {
                        letterContainer.scrollTop = 0;
                    }
                } else {
                    clearInterval(typeInterval);
                    line.classList.remove('typewriter');
                    line.style.border = 'none';
                    line.style.animation = 'none';
                }
            }, typeSpeed);
        }, totalDelay);
        
        totalDelay += originalText.length * typeSpeed + pauseBetweenLines;
    });
}

const letterContainer = document.querySelector('.letter-container');

letterNextBtn.addEventListener('click', () => {
    hideScene(letterScene);
    setTimeout(() => {
        showVideoPopup();
    }, 300);
});

// Scroll to top with multiple fallbacks
function ensureLetterScrollTop() {
    if (!letterContainer) return;
    
    letterContainer.scrollTop = 0;
    
    // Fallback: use setTimeout for layout recalculation
    setTimeout(() => {
        letterContainer.scrollTop = 0;
    }, 0);
    
    // Second fallback: requestAnimationFrame
    requestAnimationFrame(() => {
        letterContainer.scrollTop = 0;
    });
}

// ==================== VIDEO POPUP ====================

function showVideoPopup() {
    showScene(videoPopupOverlay);
}

popupStartBtn.addEventListener('click', () => {
    hideScene(videoPopupOverlay);
    setTimeout(() => {
        showScene(videoScene);
        // Let browser handle video - user will click play
    }, 300);
});

// ==================== VIDEO SCENE ====================

if (videoElement instanceof HTMLVideoElement) {
    videoElement.addEventListener('seeking', () => {
        console.log('Seeking to:', videoElement.currentTime);
    });

    videoElement.addEventListener('seeked', () => {
        console.log('Seeked to:', videoElement.currentTime);
    });

    videoElement.addEventListener('ended', () => {
        hideScene(videoScene);
        setTimeout(() => {
            showScene(finalScene);
            createConfetti();
        }, 300);
    });
}


videoNextBtn.addEventListener('click', () => {
    if (videoElement instanceof HTMLVideoElement) {
        videoElement.pause();
    }
    hideScene(videoScene);
    setTimeout(() => {
        showScene(finalScene);
        createConfetti();
    }, 300);
});

// ==================== FINAL SCENE ====================

restartBtn.addEventListener('click', () => {
    hideScene(finalScene);
    setTimeout(() => {
        showScene(openingScene);
        if (videoElement instanceof HTMLVideoElement) {
            videoElement.currentTime = 0;
        } else if (videoElement instanceof HTMLIFrameElement) {
            videoElement.src = driveVideoPreviewUrl;
        }
    }, 300);
});

// ==================== EVENT LISTENERS ====================

yesBtn.addEventListener('click', () => {
    hideScene(openingScene);
    setTimeout(() => {
        showScene(cakeScene);
        // Start cake countdown after showing scene
        setTimeout(() => {
            initiateCakeCountdown();
        }, 300);
    }, 300);
});

noBtn.addEventListener('click', () => {
    hideScene(openingScene);
    setTimeout(() => {
        showScene(noResponse);
    }, 300);
});

retryBtn.addEventListener('click', () => {
    hideScene(noResponse);
    setTimeout(() => {
        showScene(openingScene);
    }, 300);
});

// ==================== CONFETTI ANIMATION ====================

function createConfetti() {
    const confettiCount = 50;
    const colors = ['#FFB6D9', '#FFC9E3', '#FF8FC9', '#FF69B4', '#FFB6D9'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 100;
            animation: fall ${2 + Math.random() * 2}s linear forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Add confetti fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== INITIALIZATION ====================

window.addEventListener('load', () => {
    // Reset scroll positions for all containers on load
    if (letterContainer) {
        letterContainer.scrollTop = 0;
    }
    
    setTimeout(() => {
        hideScene(loadingScene);
        showScene(openingScene);
    }, 2000);
});
