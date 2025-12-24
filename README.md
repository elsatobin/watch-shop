# 🛍️ Devita Watchs – E-Commerce Frontend (Next.js)

A modern, scalable **e-commerce frontend application** built with **Next.js (App Router)**, focused on performance, SEO, and a smooth user experience.

This project represents a **real-world frontend architecture**, demonstrating how production-grade React / Next.js applications are structured and built.

---

## 🚀 Live Demo

🔗 [https://devita-watchs.vercel.app](https://devita-watchs.vercel.app)] 



---

## 🧩 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript (ES6+)
- **UI Library:** Material UI (MUI v5)
- **State Management:** React Context API + `useReducer`
- **Forms & Validation:** Formik + Yup
- **Animations:** Framer Motion
- **HTTP Requests:** Fetch API
- **Notifications:** Notistack
- **Styling & UX:** MUI Theme, Dark Mode
- **Code Quality:** ESLint
- **Image Optimization:** `next/image`
- **Version Control:** Git & GitHub

---

## ✨ Features

### 🛒 E-Commerce Functionality
- Product listing and product details pages
- Shopping cart with quantity management
- Wishlist (favorites) feature
- Product variations support
- Cart and wishlist persistence using `localStorage`

### ⚙️ State Management
- Global state handled using **Context API + useReducer**
- Centralized logic for cart, wishlist, and UI state
- Scalable and predictable state updates

### 🧠 Forms & Validation
- Fully validated forms using **Formik & Yup**
- Schema-based validation
- Clear error messages and user feedback

### 🎨 UI / UX
- Fully responsive and mobile-first layout
- Dark mode with dynamic theme switching
- Skeleton loaders and loading states
- Modals, dialogs, tooltips, and confirmations

### 🎞️ Animations & Interactions
- Smooth UI animations using **Framer Motion**
- Animated drawers and transitions
- Enhanced user interactions

### 🔍 SEO & Performance
- Dynamic routing with App Router
- Server-side data fetching
- Dynamic metadata using `generateMetadata`
- Code splitting and lazy loading using `next/dynamic`
- Optimized images with Next.js Image
- Custom loading and 404 pages

---

## 📁 Project Structure
```
├── public/ # Static assets
├── src/
│   ├── app/ # Next.js App Router pages & layouts
│   │   ├── page.tsx # Home page
│   │   ├── loading.tsx # Global loading UI
│   │   ├── not-found.tsx # Custom 404 page
│   │   ├── about/ # About page
│   │   ├── shop/ # Shop pages
│   │   ├── contact/ # Contact page
│   │   └── ... # Other routes (products, blogs)
│   ├── components/ # Reusable and feature-based components
│   │   ├── Shop/
│   │   ├── Cart/
│   │   ├── Blogs/
│   │   └── Helpers/
│   ├── context/ # Global state management
│   └── ... # Utilities and helpers
├── .env # Environment variables
├── .eslintrc.json # ESLint configuration
├── jsconfig.json # Path aliases
├── next.config.js # Next.js configuration
└── package.json # Dependencies and scripts
```


<!-- <details>
<summary>public/</summary>

- Static assets
</details>

<details>
<summary>src/</summary>

<details>
<summary>app/</summary>

- page.tsx - Home page  
- loading.tsx - Global loading UI  
- not-found.tsx - Custom 404 page  

<details>
<summary>about/</summary>
- About page
</details>

<details>
<summary>shop/</summary>
- Shop pages
</details>

<details>
<summary>contact/</summary>
- Contact page
</details>

- ... - Other routes (products, blogs)
</details>

<details>
<summary>components/</summary>

<details>
<summary>Shop/</summary>
</details>

<details>
<summary>Cart/</summary>
</details>

<details>
<summary>Blogs/</summary>
</details>

<details>
<summary>Helpers/</summary>
</details>
</details>

<details>
<summary>context/</summary>
- Global state management
</details>

- ... - Utilities and helpers
</details>

<details>
<summary>Root Files</summary>

- .env - Environment variables  
- .eslintrc.json - ESLint configuration  
- jsconfig.json - Path aliases  
- next.config.js - Next.js configuration  
- package.json - Dependencies and scripts
</details> -->


---

## 🧪 Code Quality & Best Practices

- ESLint rules applied to enforce clean and consistent code
- Clear separation of concerns (UI / logic / state)
- Reusable components and scalable architecture
- Readable, maintainable, and production-ready codebase

---

## 📦 Installation & Setup

bash
# Clone the repository
git clone https://github.com/e-mustafa/devita-watchs.git

# Navigate to project directory
cd devita-watchs

# Install dependencies
npm install

# Run development server
npm run dev

Open your browser at:
http://localhost:3000


## 🎯 What This Project Demonstrates

- Real-world usage of **Next.js App Router**
- Scalable frontend architecture
- Solid understanding of **React state management**
- Clean and user-friendly **UI/UX implementation**
- Performance, SEO, and accessibility awareness
- Production-ready development practices

---

## 👨‍💻 Author

**Mustafa Abutabl**  
Frontend Developer (React / Next.js)

- **GitHub:** [https://github.com/e-mustafa](https://github.com/e-mustafa)  
- **Email:** [eng.mustafa@hotmail.com](mailto:eng.mustafa@hotmail.com)  
- **Portfolio:** [https://e-mustafa.github.io/portfolio/](https://e-mustafa.github.io/portfolio/)

---

⭐ If you find this project useful or interesting, feel free to **star the repository**!

