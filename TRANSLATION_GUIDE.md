# Translation System Guide - FST Booking System

## Overview
A complete translation system has been implemented for the FST Booking System website, supporting both Indonesian (ID) and English (EN) languages.

## Features
- **Automatic Language Detection**: The system remembers the user's language preference using localStorage
- **Easy Language Switching**: Users can switch between Indonesian and English with a single click
- **Persistent Settings**: Language preference is saved and restored across sessions
- **Dynamic Content Updates**: All text updates instantly when the language is changed

## Files Added

### 1. Translation Core Files
- **`js/translations.js`** - Main translation system with:
  - All translations for Indonesian and English
  - Language management class
  - Automatic page update functionality
  
- **`css/language-switcher.css`** - Styling for the language switcher button

### 2. Updated Pages
The following pages have been updated with translation support:
- `index.html` - Home page
- `about-1.html` - About page
- `contact-1.html` - Contact page
- `booking-form.html` - Booking form page

## How It Works

### Language Switcher
A language switcher has been added to the navigation menu on all main pages:
```html
<li class="language-switcher">
    <button class="lang-btn" data-lang="id" onclick="changeLanguage('id')">ID</button>
    <span class="lang-separator">|</span>
    <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')">EN</button>
</li>
```

### Translation Attributes
Elements that need translation use the `data-translate` attribute:
```html
<h3 data-translate="reservation.title">Reservasi Ruangan</h3>
<label data-translate="reservation.date">Tanggal Reservasi</label>
<option data-translate="room.select">Pilih Ruangan</option>
```

### Available Translation Keys

#### Navigation
- `nav.home` - Home
- `nav.about` - About
- `nav.contact` - Contact

#### Reservation Form
- `reservation.title` - Room Reservation
- `reservation.date` - Reservation Date
- `reservation.start-time` - Start Time
- `reservation.end-time` - End Time
- `reservation.room-type` - Room Type
- `reservation.participants` - Number of Participants
- `reservation.purpose` - Purpose
- `reservation.button` - Reserve Button
- `reservation.hour` - Hour
- `reservation.minute` - Minute

#### Room Types
- `room.select` - Select Room
- `room.kelas-biasa` - Regular Classroom
- `room.kelas-besar` - Large Classroom
- `room.lab-mikro` - Microbiology Lab
- `room.lab-komputer` - Computer Lab
- `room.teater-besar` - Large Theater
- `room.teater-double` - Double Projector Theater
- `room.meeting` - Meeting Room

#### Participants
- `participants.select` - Select Number
- `participants.1-10` - 1-10 people
- `participants.11-25` - 11-25 people
- `participants.26-50` - 26-50 people
- `participants.50+` - 50+ people

#### Purpose
- `purpose.select` - Select Purpose
- `purpose.kuliah` - Lecture
- `purpose.seminar` - Seminar
- `purpose.rapat` - Meeting
- `purpose.presentasi` - Presentation
- `purpose.workshop` - Workshop
- `purpose.lainnya` - Other

#### About Page
- `about.title` - About FST
- `about.breadcrumb` - About FST UIN Jakarta
- `about.heading` - About FST UIN Jakarta
- `about.intro` - Introduction text
- `about.description` - Description text
- And many more...

## Adding Translations to New Pages

### Step 1: Add Required Files to HTML Head
```html
<link rel="stylesheet" href="css/language-switcher.css">
```

### Step 2: Add Language Switcher to Navigation
```html
<ul class="nav navbar-nav">
    <!-- Other nav items -->
    <li class="language-switcher">
        <button class="lang-btn" data-lang="id" onclick="changeLanguage('id')">ID</button>
        <span class="lang-separator">|</span>
        <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')">EN</button>
    </li>
</ul>
```

### Step 3: Add Translation Script Before Closing Body Tag
```html
<script src="js/custom.js"></script>
<script src="js/translations.js"></script><!-- TRANSLATION SYSTEM  -->
</body>
```

### Step 4: Add data-translate Attributes to Elements
```html
<!-- For text content -->
<h1 data-translate="your.key">Default Text</h1>

<!-- For labels -->
<label data-translate="form.label">Label Text</label>

<!-- For options -->
<option value="value" data-translate="option.key">Option Text</option>

<!-- For placeholders -->
<input type="text" placeholder="Placeholder" data-translate="input.placeholder">
```

## Adding New Translation Keys

To add new translations, edit `js/translations.js`:

```javascript
const translations = {
    id: {
        'your.new.key': 'Teks dalam Bahasa Indonesia',
        // ... other translations
    },
    en: {
        'your.new.key': 'Text in English',
        // ... other translations
    }
};
```

## JavaScript Functions

### Change Language
```javascript
changeLanguage('en'); // Switch to English
changeLanguage('id'); // Switch to Indonesian
```

### Toggle Language
```javascript
toggleLanguage(); // Switch between ID and EN
```

### Get Current Language
```javascript
const currentLang = languageManager.getLanguage(); // Returns 'id' or 'en'
```

### Get Translation
```javascript
const text = languageManager.translate('reservation.title');
```

## Default Language
The system defaults to Indonesian (`id`) if no language preference is saved.

## Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Uses localStorage for persistence
- Graceful fallback if translations are missing

## Customization

### Styling the Language Switcher
Edit `css/language-switcher.css` to customize:
- Button colors
- Hover effects
- Active state appearance
- Mobile responsiveness

### Changing Default Language
In `js/translations.js`, modify:
```javascript
this.currentLang = localStorage.getItem('language') || 'en'; // Change 'id' to 'en' for English default
```

## Testing
1. Open any page (index.html, about-1.html, etc.)
2. Click on "EN" in the navigation
3. All text should instantly change to English
4. Refresh the page - language preference should persist
5. Click on "ID" to switch back to Indonesian

## Future Enhancements
You can easily extend this system by:
1. Adding more languages (e.g., Arabic, French)
2. Adding more translation keys for additional content
3. Implementing automatic language detection based on browser settings
4. Adding a dropdown for more than 2 languages

## Support
If you need to add more pages or translations, follow the steps in "Adding Translations to New Pages" section above.

---
**Last Updated**: December 2024
**Version**: 1.0.0

