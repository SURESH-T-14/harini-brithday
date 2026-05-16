# 📁 Project File Reference

## File Structure Overview

```
birthday-surprise/
│
├── 📄 index.html                 ← Main HTML file (OPEN THIS)
├── 🎨 style.css                  ← All styling & animations
├── ⚙️ script.js                   ← All interactive logic
├── 📖 README.md                  ← Full documentation
├── 🚀 QUICK_START.md             ← Quick setup guide
├── ⚙️ CONFIG_GUIDE.md            ← Customization guide
├── 📁 FILE_REFERENCE.md          ← This file
│
└── 📁 assets/
    ├── 📁 images/
    │   ├── memory1.jpg
    │   ├── memory2.jpg
    │   ├── memory3.jpg
    │   ├── memory4.jpg
    │   ├── memory5.jpg
    │   ├── memory6.jpg
    │   ├── memory7.jpg
    │   ├── memory8.jpg
    │   ├── memory9.jpg
    │   ├── memory10.jpg
    │   ├── memory11.jpg
    │   ├── memory12.jpg
    │   ├── memory13.jpg
    │   ├── memory14.jpg
    │   ├── memory15.jpg
    │   └── README.md
    │
    ├── 📁 music/
    │   ├── background.mp3
    │   └── README.md
    │
    ├── 📁 sounds/ (Optional)
    │   ├── countdown.mp3
    │   ├── celebration.mp3
    │   ├── pop.mp3
    │   ├── confetti.mp3
    │   ├── balloons.mp3
    │   ├── candle-blow.mp3
    │   ├── transition.mp3
    │   ├── letter.mp3
    │   ├── final.mp3
    │   └── README.md
    │
    └── 📁 videos/
        ├── memory.mp4
        └── README.md (coming soon)
```

---

## Core Files Description

### 1. `index.html` - Main HTML Structure
**Size:** ~4 KB  
**Edit:** Rarely needed (unless adding elements)

**Contains:**
- All HTML markup for 7 scenes
- Scene structure and sections
- Embedded audio/video elements
- Modal and container definitions

**Key IDs to know:**
- `openingScene` - Opening screen
- `countdownScene` - Countdown timer
- `cakeScene` - Cake animation
- `balloonScene` - Balloon game
- `videoScene` - Memory video
- `letterScene` - Letter reveal
- `finalScene` - Final celebration

**When to edit:**
- Want to change opening/final messages
- Want to add new sections
- Want to modify button text

### 2. `style.css` - All Styling & Animations
**Size:** ~15 KB  
**Edit:** For design changes

**Contains:**
- CSS variables (colors, transitions)
- Responsive design rules
- All keyframe animations
- Glassmorphism effects
- Gradient styles
- Mobile breakpoints

**Key Sections:**
- `:root` - Color variables
- `@keyframes` - All animations
- `@media` - Responsive breakpoints
- `.scene` - Scene styling
- Individual component styles

**When to edit:**
- Change colors/theme
- Adjust animation speed
- Modify fonts
- Change layout/spacing
- Add new animations

### 3. `script.js` - All JavaScript Logic
**Size:** ~12 KB  
**Edit:** For content customization

**Contains:**
- Particle system (canvas-based)
- Scene management
- Timer/countdown logic
- Balloon game logic
- Audio handling
- Touch/keyboard events
- Animation sequences

**Key Variables to Edit:**
- `birthdayLetter` (~line 55) - EDIT THIS
- `balloonCaptions` (~line 35) - EDIT THIS
- `memoryPhotos` (~line 18) - File references
- `balloonColors` - Color wheel

**Key Functions:**
- `startExperience()` - Initialize experience
- `switchScene(scene)` - Change scenes
- `startCountdown()` - Timer logic
- `startCakeScene()` - Cake animation
- `startBalloonScene()` - Balloon game
- `startLetterScene()` - Letter reveal

**When to edit:**
- Customize letter text
- Update photo captions
- Change balloon count
- Modify timing
- Add sound effects
- Add keyboard shortcuts

---

## Asset Folders

### `assets/images/` - Memory Photos
**Required:** YES (15 photos)  
**Format:** JPG, PNG, or WebP  
**Size:** ~50-100KB each  

**Files needed:**
```
memory1.jpg
memory2.jpg
memory3.jpg
memory4.jpg
memory5.jpg
memory6.jpg
memory7.jpg
memory8.jpg
memory9.jpg
memory10.jpg
memory11.jpg
memory12.jpg
memory13.jpg
memory14.jpg
memory15.jpg
```

**Recommended dimensions:** 500x500px to 600x600px

### `assets/music/` - Background Music
**Required:** YES (1 file)  
**Format:** MP3 (or WAV/OGG)  
**Size:** ~2-5 MB  

**File needed:**
```
background.mp3
```

**Recommended duration:** 2+ minutes (loops)

### `assets/videos/` - Memory Video
**Required:** YES (1 file)  
**Format:** MP4  
**Size:** ~10-50 MB  

**File needed:**
```
memory.mp4
```

**Recommended duration:** 2-5 minutes

### `assets/sounds/` - Sound Effects (Optional)
**Required:** NO  
**Format:** MP3  
**Size:** ~50-200KB each  

**Files you can add:**
```
countdown.mp3      - Ticking sound
celebration.mp3    - Cheers
pop.mp3            - Balloon pop
confetti.mp3       - Party horn
balloons.mp3       - Whoosh
candle-blow.mp3    - Blowing sound
transition.mp3     - Transition sound
letter.mp3         - Emotional sound
final.mp3          - Happy sound
```

---

## Documentation Files

### `README.md` - Complete Documentation
- Full feature list
- Step-by-step setup
- Customization guide
- Troubleshooting section
- Browser compatibility
- Performance tips

### `QUICK_START.md` - Quick Setup
- 30-second setup
- 5-minute content addition
- Essential file paths
- Common fixes

### `CONFIG_GUIDE.md` - Customization Patterns
- How to customize letter
- How to customize captions
- Color themes
- Font options
- Template examples

### `FILE_REFERENCE.md` - This File
- File structure overview
- File descriptions
- Key variables and functions
- When to edit each file

---

## Key Variables & Their Locations

### Birthday Letter
**File:** `script.js`  
**Line:** ~55  
**Variable:** `birthdayLetter`  
**Type:** String (multi-line)

```javascript
const birthdayLetter = `Your message here...`;
```

### Memory Photo Captions
**File:** `script.js`  
**Line:** ~35  
**Variable:** `balloonCaptions`  
**Type:** Array (15 strings)

```javascript
const balloonCaptions = [
    'Caption 1',
    'Caption 2',
    // ... 15 total
];
```

### Memory Photos
**File:** `script.js`  
**Line:** ~18  
**Variable:** `memoryPhotos`  
**Type:** Array (15 strings)

```javascript
const memoryPhotos = [
    'assets/images/memory1.jpg',
    // ... 15 total
];
```

### Balloon Colors
**File:** `script.js`  
**Line:** ~30  
**Variable:** `balloonColors`  
**Type:** Array (5 colors)

```javascript
const balloonColors = ['red', 'pink', 'blue', 'yellow', 'purple'];
```

### Primary Color
**File:** `style.css`  
**Line:** ~8  
**Variable:** `--primary-color`  
**Type:** Hex color

```css
--primary-color: #ff6b9d;
```

---

## Functions Reference

### Scene Management
```javascript
switchScene(scene)           // Change to a scene
startExperience()            // Initialize experience
```

### Scenes
```javascript
startCountdown()             // Begin countdown
startCakeScene()             // Show cake animation
startBalloonScene()          // Show balloon game
startFinalScene()            // Show celebration
```

### Utilities
```javascript
getTimeToMidnight()          // Get time until 12 AM
updateTimer()                // Update timer display
playSound(soundName)         // Play sound effect
toggleMusic()                // Mute/unmute music
```

### Game Logic
```javascript
new Balloon(index, container)  // Create balloon
balloonSystem.pop()            // Pop balloon
showPhoto()                    // Show memory photo
endBalloonGame()              // Finish balloon game
```

### Animation
```javascript
particleSystem.createParticles()  // Create particles
particleSystem.createConfetti()   // Create confetti
typeoutText()                     // Typewriter effect
```

---

## Edit Workflow

### For Customization:
1. Open `script.js`
2. Find `birthdayLetter` (~line 55)
3. Replace with your message
4. Find `balloonCaptions` (~line 35)
5. Update all 15 captions
6. Save file

### For Design Changes:
1. Open `style.css`
2. Edit `:root` variables for colors
3. Modify animations/timings
4. Adjust responsive breakpoints
5. Save file

### For Content:
1. Add photos to `assets/images/`
2. Add music to `assets/music/`
3. Add video to `assets/videos/`
4. Update script.js variables
5. Test in browser

---

## Common Edit Locations Quick Reference

| What to Change | File | Line | Variable/Location |
|---|---|---|---|
| Birthday Letter | script.js | ~55 | `birthdayLetter` |
| Photo Captions | script.js | ~35 | `balloonCaptions` |
| Primary Color | style.css | ~8 | `--primary-color` |
| Secondary Color | style.css | ~9 | `--secondary-color` |
| Accent Color | style.css | ~10 | `--accent-color` |
| Animation Speed | style.css | ~12 | `--transition` |
| Opening Message | index.html | ~50 | `opening-title` |
| Font Family | style.css | ~18 | `font-family` |
| Countdown Quote | index.html | ~64-66 | `.quote` elements |
| Final Message | index.html | ~165 | `final-title` |

---

## Browser Developer Tools Tips

### Debug Missing Images
Open DevTools (F12) → Console → Check for 404 errors

### Check Animation Performance
DevTools → Performance → Record → Check for jank

### Test Responsive Design
DevTools → Device Toolbar → Test different screen sizes

### Check Colors
Inspect element → Find CSS variables or colors

### Monitor Audio
DevTools → Console → Check audio playback logs

---

## Performance Tips by File

### `index.html`
- Keep semantic structure
- Don't add inline styles
- Use CSS classes instead

### `style.css`
- Use CSS variables for consistency
- Optimize keyframe animations
- Test on mobile devices
- Remove unused styles

### `script.js`
- Use efficient selectors
- Cache DOM elements
- Minimize particle count if needed
- Test memory usage

### Media Files
- Compress images (https://imagecompressor.com/)
- Optimize audio (MP3 128kbps)
- Optimize video (H.264, ~2Mbps)

---

## File Sizes Reference

Typical project sizes:

| File | Size |
|------|------|
| index.html | ~4 KB |
| style.css | ~15 KB |
| script.js | ~12 KB |
| **Total Code** | **~31 KB** |
| 15 photos (compressed) | ~1.5 MB |
| background.mp3 | ~5 MB |
| memory.mp4 | ~20 MB |
| **Total Project** | **~26.5 MB** |

---

## Next Steps

1. **Read:** `QUICK_START.md` (5 minutes)
2. **Customize:** Use `CONFIG_GUIDE.md` (15 minutes)
3. **Test:** Open `index.html` in browser (5 minutes)
4. **Share:** Send link to friend (priceless!)

---

## Support Resources

- **Setup Help:** See `QUICK_START.md`
- **Customization:** See `CONFIG_GUIDE.md`
- **Full Docs:** See `README.md`
- **File Details:** See `FILE_REFERENCE.md` (this file)

---

**Everything you need is here! Happy customizing!** 🎉
