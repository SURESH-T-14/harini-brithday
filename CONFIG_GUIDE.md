# ⚙️ Configuration Guide

## Easy Customization Without Coding

This guide shows you exactly where to customize content without touching code.

---

## 1. CUSTOMIZE THE LETTER

**File:** `script.js`  
**Line:** Around line 55

### Find this:
```javascript
const birthdayLetter = `Today marks another beautiful year of your life...`;
```

### Replace with your own message:
```javascript
const birthdayLetter = `Dear [Friend's Name],

Today I want to tell you something I don't say enough - you're amazing.

From the day we met at [MEMORY], I knew you'd be someone special. Remember when we [SPECIFIC MEMORY]? That's just one of thousands of moments I'm grateful for.

You've been there through [GOOD TIMES AND CHALLENGES]. Your [QUALITY] has inspired me to be better. Your [QUALITY] makes every day brighter.

I love how you [SPECIFIC TRAIT]. I admire how you [ACCOMPLISHMENT]. I'm blessed to call you my best friend.

Thank you for all the laughs, the adventures, the 3 AM conversations, and just... being you.

Here's to another year of [SHARED INTERESTS/ACTIVITIES]. May we create even more memories together.

Happy Birthday to the best friend anyone could ask for!

With all my love,
[Your Name] ❤️`;
```

### Pro Tips:
- Keep it personal and specific
- Include shared memories
- Mention qualities you love about them
- Keep length 250-400 words
- Use line breaks for readability

---

## 2. CUSTOMIZE PHOTO CAPTIONS

**File:** `script.js`  
**Line:** Around line 35

### Find this:
```javascript
const balloonCaptions = [
    'First day of friendship',
    'Memories never fade…',
    // ... etc
];
```

### Replace with your own (exactly 15 captions):
```javascript
const balloonCaptions = [
    'The day we became best friends ✨',
    'Our legendary road trip 🚗',
    'Late night pizza and talks 🍕',
    'Beach day vibes 🏖️',
    'Concert night memories 🎸',
    'Coffee dates are our thing ☕',
    'That embarrassing moment 😂',
    'Supporting each other always 💪',
    'Movie marathon classics 🎬',
    'Spontaneous adventures 🗺️',
    'Through thick and thin 💙',
    'Making memories that last ✨',
    'Our crazy selfies 🤳',
    'Cheers to friendship 🥂',
    'Happy Birthday, best friend! 🎉'
];
```

### Format:
- Exactly 15 captions (one per photo)
- Keep captions 3-5 words
- Add emojis for personality
- Make them specific to your memories

---

## 3. CUSTOMIZE COLORS

**File:** `style.css`  
**Line:** Around line 8

### Find this:
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #a8d8ff;
    --accent-color: #ffd93d;
    --dark-bg: #0a0e27;
    --light-bg: #1a1f3a;
    --glow-color: rgba(255, 107, 157, 0.6);
}
```

### Color Themes

**Theme 1: Romantic Pink (Default)**
```css
--primary-color: #ff6b9d;
--secondary-color: #a8d8ff;
--accent-color: #ffd93d;
```

**Theme 2: Ocean Blue**
```css
--primary-color: #00d4ff;
--secondary-color: #0066cc;
--accent-color: #00ff88;
```

**Theme 3: Purple Magic**
```css
--primary-color: #d946ef;
--secondary-color: #ec4899;
--accent-color: #fbbf24;
```

**Theme 4: Sunset Gold**
```css
--primary-color: #f59e0b;
--secondary-color: #f97316;
--accent-color: #fbbf24;
```

**Theme 5: Mint Fresh**
```css
--primary-color: #10b981;
--secondary-color: #34d399;
--accent-color: #a78bfa;
```

---

## 4. CUSTOMIZE FONTS

**File:** `style.css`  
**Line:** Around line 18

### Find this:
```css
html, body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Replace with alternatives:

**Modern & Clean:**
```css
font-family: 'Arial', 'Helvetica', sans-serif;
```

**Elegant & Artistic:**
```css
font-family: 'Georgia', 'Garamond', serif;
```

**Creative & Fun:**
```css
font-family: 'Comic Sans MS', cursive;
```

**Premium & Professional:**
```css
font-family: 'Trebuchet MS', sans-serif;
```

---

## 5. CUSTOMIZE MESSAGES (In Scene)

### Opening Screen Message

**File:** `index.html`  
**Line:** Around line 50

```html
<h1 class="opening-title" id="openingTitle">Something Special is Waiting for You...</h1>
```

Change to:
```html
<h1 class="opening-title" id="openingTitle">Get ready for the best surprise ever...</h1>
```

### Countdown Messages

**File:** `index.html`  
**Lines:** Around 64-66

```html
<p class="quote active" id="quote1">A special moment is coming…</p>
<p class="quote" id="quote2">Memories never fade…</p>
<p class="quote" id="quote3">Get ready…</p>
```

### Video Section Message

**File:** `index.html`  
**Line:** Around 126

```html
<p class="video-intro-text" id="videoIntroText">One last surprise awaits...</p>
```

### Final Scene Message

**File:** `index.html`  
**Line:** Around 165

```html
<h1 class="final-title">Happy Birthday ❤️</h1>
```

---

## 6. ORGANIZE YOUR PHOTO FILES

### File Naming Convention
```
assets/images/
├── memory1.jpg
├── memory2.jpg
├── memory3.jpg
├── memory4.jpg
├── memory5.jpg
├── memory6.jpg
├── memory7.jpg
├── memory8.jpg
├── memory9.jpg
├── memory10.jpg
├── memory11.jpg
├── memory12.jpg
├── memory13.jpg
├── memory14.jpg
└── memory15.jpg
```

### Important:
- Use exactly these names: `memory1.jpg`, `memory2.jpg`, etc.
- Photos appear in order when balloons pop
- Each photo needs a matching caption

---

## 7. AUDIO SETUP

### Background Music File
**Path:** `assets/music/background.mp3`

**Best Practice:**
- Use royalty-free music (important!)
- ~2-3 minutes minimum
- Soft, emotional instrumental
- MP3 format

**Where to Find Music:**
- https://www.bensound.com/ (Free, high quality)
- https://incompetech.com/
- https://www.zapsplat.com/
- YouTube Audio Library

---

## 8. VIDEO SETUP

### Memory Video File
**Path:** `assets/videos/memory.mp4`

**Best Practice:**
- 2-5 minutes duration
- 1920x1080 or lower resolution
- MP4 format with H.264 codec
- Maximum 5MB file size

---

## 9. QUICK CUSTOMIZATION TEMPLATES

### Template: Letter for Creative Friend
```javascript
const birthdayLetter = `[Friend's Name],

Another year older, but twice as cool! 

I still remember when we first met at [PLACE] and bonded over [INTEREST]. From that moment, I knew you were something special.

Your creativity amazes me. Your passion inspires me. Your humor keeps me sane.

Thank you for being:
- My adventure buddy 🗺️
- My creative muse 🎨
- My emotional support 💙
- Simply the BEST friend 👑

Here's to creating more masterpieces together - of friendship, memories, and nonsense!

Happy Birthday to you!
[Your Name]`;
```

### Template: Letter for Adventurous Friend
```javascript
const birthdayLetter = `Hey [Friend's Name]!

Remember when we said we'd go on an epic adventure? We actually did - multiple times! 🎒

From [ADVENTURE 1] to [ADVENTURE 2], you've made life an incredible journey. You challenge me, inspire me, and always have my back.

Your courage is contagious. Your spirit is infectious. Your friendship is priceless.

Let's keep exploring:
- New places 🌍
- New experiences 🎪
- New memories 📸

I'm so grateful for you!

Happy Birthday! Here's to more adventures! 🚀
[Your Name]`;
```

### Template: Letter for Loyal Friend
```javascript
const birthdayLetter = `[Friend's Name],

Through every season - good, bad, and messy - you've been there.

I can't thank you enough for:
- Believing in me when I didn't 💪
- Making me laugh on hard days 😂
- Being my constant 💫
- Loving me as I am ❤️

Loyalty like yours is rare. Friendship like ours is precious.

Today we celebrate YOU - every wonderful thing about you, every memory we share, every laugh we've had.

You deserve the happiest birthday ever.

Thank you for being YOU.

Happy Birthday to my best friend!
[Your Name]`;
```

---

## 10. COMMON CUSTOMIZATION SCENARIOS

### Scenario: Partner's Birthday
Update letter to reflect romantic partnership while keeping emotional tone.

### Scenario: Family Member's Birthday
Adjust captions to family memories and letter to family-appropriate content.

### Scenario: Workplace Friend
Keep it professional but warm. Use office memories in captions.

### Scenario: Long Distance Friend
Emphasize how despite distance, your bond is strong. Reference video calls, visits, etc.

---

## VALIDATION CHECKLIST

Before sending to your friend:

```
Content Customization:
☐ Letter updated with personal message
☐ All 15 captions customized
☐ Opening message updated (optional)
☐ Countdown messages updated (optional)
☐ Final message updated (optional)

Files Added:
☐ 15 memory photos (memory1.jpg - memory15.jpg)
☐ Background music (background.mp3)
☐ Memory video (memory.mp4)

Visual Customization:
☐ Color theme selected
☐ Font style chosen (optional)

Testing:
☐ Tested on desktop browser
☐ Tested on mobile device
☐ Music plays correctly
☐ Video plays correctly
☐ Photos appear in correct order
☐ Letter displays correctly
```

---

## TROUBLESHOOTING CUSTOMIZATION

### Letter not showing?
- Check for syntax errors (extra quotes, missing backticks)
- Ensure the entire message is within backticks
- Verify no special characters break the text

### Captions not matching photos?
- Make sure you have exactly 15 captions
- Check order: first caption = memory1.jpg, etc.
- Verify no typos in caption array

### Colors not changing?
- Make sure you're editing inside `:root { }`
- Use valid hex color codes
- Clear browser cache (Ctrl+Shift+Delete)

### Music not playing?
- Check file name: `background.mp3` (exact match)
- Check file path: `assets/music/`
- Try different browser

---

## NEED MORE HELP?

- See `README.md` for comprehensive documentation
- See `QUICK_START.md` for quick setup guide
- Check browser console for errors (F12)

---

**Happy Customizing!** Your friend will love this personalized experience! 🎉
