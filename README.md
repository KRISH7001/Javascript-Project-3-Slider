# 🐎 MUSTANG 360
### An Interactive Ford Mustang Image Slider

A smooth, auto-playing image slider that shows a classic Mustang from every angle.

> 🎥


https://github.com/user-attachments/assets/9f9e8195-ccb7-4c1f-a564-ac0ca3beb1ea


---

## 📌 About The Project

this is a JavaScript-based image slider that presents a Ford Mustang from five different views: front, rear corners, back and top.

It was built using **HTML, CSS and  JavaScript**, focusing on DOM manipulation, arrays and objects, event handling and timing functions. The slider loops forever, so the slides always move in the same direction: 1 → 2 → 3 → 4 → 5 → 1 → 2 → 3 → 4 → 5.

---



## ✨ Features

- **Automatic Slideshow:** Changes slides every 4 seconds.
- **Next & Previous Buttons:** Move between slides with the arrow buttons.
- **Keyboard Controls:** Use the left and right arrow keys.
- **Dot Navigation:** Click a dot to jump to any slide.
- **Infinite Smooth Loop:** After the last slide it slides on to the first, with no backward jump.
- **Responsive Layout:** The slider sits in the center of the page and adapts to phones and desktops.
- **Chrome-Style Design:** A silver border and charcoal background that match the photos.
- **Logo Watermark:** A faded full-screen logo in the background.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Project structure |
| CSS3 | Styling, layout and transitions |
| JavaScript | Slider logic and DOM manipulation |
| Font Awesome | Navigation arrow icons |
| Montserrat | Local fonts |

---

## 📂 Project Structure

```
Project-3/
│
├── css/
│   ├── all.min.css
│   └── slider.css
│
├── fonts/
│   └── Montserrat-*.ttf
│
├── images/
│   ├── front.png
│   ├── Rear-right-corner.png
│   ├── back.png
│   ├── Rear-left-corner.png
│   ├── top.png
│   └── mustang-logo.png
│
├── js/
│   └── slider.js
│
└── slider.html
```

---

## ⚙️ How It Works

The slider stores its images in a JavaScript **array of objects**, where each object holds an image path and a title:

```javascript
const slides = [
  { src: "images/front.png", title: "Front view" },
  { src: "images/Rear-right-corner.png", title: "Rear right view" }
  // ...
];
```

JavaScript then:

1. Builds the slides and navigation dots with the **DOM**.
2. Adds a copy of the last slide before the first and a copy of the first slide after the last.
3. Moves the slide track with `transform: translateX()` and a CSS transition.
4. Uses `setInterval()` for autoplay and `setTimeout()` to silently jump from the copy to the real slide, which makes the loop smooth.
5. Listens for **click** and **keydown** events for buttons, dots and arrow keys.

---


## 🎯 Learning Objectives

This project helped me practise:

- JavaScript arrays and objects
- DOM selection and manipulation
- Event listeners and event handling
- Functions and conditional statements
- `setInterval()`, `setTimeout()` and `clearInterval()`
- CSS transitions and responsive layouts
- Connecting HTML, CSS and JavaScript

---

## 👨‍💻 Author

**KRISH SAPARIYA**


