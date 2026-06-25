# Aesthetic Pomodoro Timer Widget for Notion

A responsive Pomodoro interval timer designed for dark-themed, earthy Notion workspaces. This widget provides structured study and rest intervals styled with classical typography, micro-tactile control toggles, and an antique forest laurel green color profile.

---

## Features
* **Dual-Interval Engine**: Alternates between 25-minute focused study sessions and 5-minute restorative rest break configurations.
* **Contextual Motto Display**: Updates the quote container automatically based on the active state string to inspire patience or rest.
* **Antique Forest Palette**: Employs a rich sage/laurel backdrop coupled with metallic gold highlights, drawing inspiration from Renaissance landscape backdrops.
* **Fluid Container Scaling**: Utilizes dynamic container width queries to ensure all buttons, timer digits, and text layouts scale proportionally to any allocated column block layout.
* **Anti-Flicker Engineering**: Blends with Notion container variables to prevent white loading flashes.

---

## Project Structure
Ensure your workspace directory contains these three files named exactly as shown:
```text
├── index.html   # Card canvas structure and button interactive nodes
├── style.css    # Responsive container properties, states, and typography formatting
└── script.js    # Time logic intervals, cycle switches, and frame matching algorithms
```

---

## Step-by-Step Setup Guide

### 1. Save Your Source Files
1. Copy the code blocks for index.html, style.css, and script.js provided into separate plain text files using any standard code editor (such as VS Code, Notepad, or TextEdit).
2. Save them into a dedicated directory on your system.

### 2. Host the Code Online via GitHub Pages
Because Notion requires an active internet URL link to register embed components, web hosting is necessary:
1. Navigate to GitHub.com and access your account profile.
2. Select the New button to instantiate a fresh project repository. Assign a title such as notion-pomodoro-widget.
3. Configure the visibility parameters to Public.
4. Finalize the repository creation.
5. Click the option to upload an existing file, then drag and drop index.html, style.css, and script.js into the staging field.
6. Commit the structural file updates.
7. Navigate to the repository Settings panel from the horizontal menu header, locate Pages in the lateral sidebar menu, and select it.
8. Locate Build and deployment, verify the deployment branch is locked to main (or master), and click Save.
9. Allow up to two minutes for structural builds, then refresh the dashboard interface. Copy the active live URL displaying at the header of the page.

---

## Integrating with Notion

1. Copy the live webpage URL destination string from your GitHub Pages portal.
2. Navigate directly to your active Notion canvas dashboard interface.
3. Select an empty line grid element space, type /embed, and choose the embed option module.
4. Insert your live repository deployment link into the input destination path bar.
5. Confirm the action to initialize the live viewport module.
6. Scale and organize the layout grid boundary handles to match your preferred workspace columns.

---

## Customization Variations

### Modifying the Canvas Palette
To alter the color tokens to match another classical painting aesthetic variation, modify the hex color keys at the absolute top of style.css:
```css
:root {
  --bg-dark: #191919;       /* Matches Notion canvas backgrounds */
  --card-bg: #131C16;       /* Antique Forest Green backdrop framework */
  --accent-gold: #D4B26F;   /* Updates structural borders and text titles */
  --muted-olive: #738A78;   /* Sets control borders and decorative dividing accents */
  --text-parchment: #ECE6DC; /* Controls clock text string brightness standards */
}
```

### Altering Time Durations
To configure different time limits (such as a 50-minute study interval and a 10-minute break), locate the variable settings inside script.js and alter the product value declarations:
```javascript
let timeLeft = 50 * 60; // Changes core study session duration to 50 minutes
// ...
timeLeft = 10 * 60;    // Changes core rest session duration to 10 minutes
```

---

## License
Permission is granted to modify, personalize, and integrate this script engine structure into your personal workspace environment layouts.
