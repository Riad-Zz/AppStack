# AppStack  

<p align="center">
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router_DOM-F2311E?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/></a>
  <a href="https://daisyui.com/"><img src="https://img.shields.io/badge/DaisyUI-Latest-FF69B4?style=for-the-badge" alt="DaisyUI"/></a>
  <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/></a>
</p>

A modern, responsive web application that simulates an **App Store experience**, built with **React**, **React Router**, **TailwindCSS**, and **DaisyUI**.  
It features smooth navigation, live search, install tracking via local storage, and dynamic data visualization — designed for both performance and aesthetic precision.

---

## 🌐 Live Demo  
[https://projectappstack.netlify.app/](https://projectappstack.netlify.app/)  

## 📂 Repository  
[https://github.com/Riad-Zz/AppStack.git](https://github.com/Riad-Zz/AppStack.git)

---

## 📖 Overview  

**AppStack** provides a complete single-page experience where users can explore apps, view details, install or uninstall them, and track their activity — all in a polished, real-world interface.  
The project focuses on **state management, routing, and UI consistency**, integrating animations, toasts, and responsive layouts.

---

## ✨ Features  

### General  
- Fully functional **SPA** using React Router  
- Smooth route transitions with a loading animation  
- LocalStorage integration for persistent app installations  
- 404 error page for invalid routes  
- Works flawlessly on reload after deployment  

### Home Page  
- Central banner with title, text, and action buttons  
- State summary cards displaying key app statistics  
- “Top Apps” grid with 8 featured apps  
- “Show All” navigation button  

### All Apps Page  
- Displays all apps from JSON data  
- Live, case-insensitive search filter  
- Sort by download count (High → Low / Low → High)  
- “No App Found” message for unmatched queries  

### App Details Page  
- App image, title, company name, downloads, rating, and description  
- “Install” button that switches to “Installed” after click  
- Toast notification on installation success  
- Review data visualized using **Recharts**

### My Installation Page  
- Displays all installed apps stored in LocalStorage  
- “Uninstall” option removes app from UI and storage  
- Toast message on uninstall  
- Sorting by downloads  

---

## 🧰 Tech Stack  

| Technology | Description |
|-------------|--------------|
| <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="24"/> **React** | Core library for UI development |
| <img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" width="24"/> **React Router DOM** | SPA navigation and route handling |
| <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" width="24"/> **TailwindCSS** | Utility-first CSS framework for styling |
| <img src="https://daisyui.com/favicon.ico" width="24"/> **DaisyUI** | TailwindCSS component library for ready-made UI |
| <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" width="24"/> **JavaScript (ES6)** | Core scripting language |
| <img src="https://recharts.org/en-US/favicon.ico" width="24"/> **Recharts** | Chart library for review visualization |
| ☁️ **Netlify / Cloudflare / Vercel** | Deployment platforms |

---

## ⚙️ Installation & Setup  

```bash
# Clone the repository
git clone https://github.com/Riad-Zz/AppStack.git

# Navigate to the folder
cd AppStack

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```
