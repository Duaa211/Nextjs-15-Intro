<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GRB-Workspace/Nextjs-15-Intro.git">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" width="90" height="90">
  </a>

<h2 align="center">Next.js 15 Intro</h2>

  <p align="center">
    A quick-start project demonstrating the new features and best practices of Next.js 15, including React Server Components, file-based routing, layouts, server actions, data fetching, and Clerk authentication.
    <br />
    <br />
    <strong>
      Next.js 15 Note:
      <a href="https://drive.google.com/file/d/1YWuDfpHDHyjStMxx2Kab5XxOyR21goeE/view?usp=sharing" target="_blank">
        Next.js 15 Crash Course
      </a>
    </strong>
    <br />
    <br />
    ·
    <a href="https://github.com/GRB-Workspace/Nextjs-15-Intro/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/GRB-Workspace/Nextjs-15-Intro/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
      <ul>
        <li><a href="#core-features">Core Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    <li><a href="#getting-started">Getting Started</a></li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-setup">Installation & Setup</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#references">References</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

---

## About The Project

**Next.js 15 Intro** is a sample repository showcasing the latest features and best practices of Next.js 15. It demonstrates how to effectively utilize **React Server Components**, **file-based routing**, **layouts**, **route handlers**, **server actions**, **data fetching strategies**, and **authentication with Clerk**.

This repository is designed for developers who want a quick yet comprehensive guide to jump-start their Next.js 15 projects.

### Core Features

- **React Server Components (RSC)**
    - Default server-side rendering for better performance and SEO.
    - Client-side interactivity enabled via `"use client";` directive.

- **File-Based Routing**
    - Organize routes within the `app` folder.
    - Automatic route creation for each `page.tsx`.

- **Layouts**
    - Create reusable layouts to share common UI elements (headers, footers, etc.).
    - Nested layouts for more granular control.

- **Route Handlers**
    - Custom RESTful endpoints using `route.ts` files.
    - Ideal for handling form submissions, database interactions, or API requests.

- **Server Actions**
    - “use server” directive to handle server-side logic.
    - Cache revalidation (`revalidatePath`) for dynamic content updates.

- **Data Fetching**
    - Server components for secure, high-performance data retrieval.
    - Client components for real-time or highly interactive data fetching.

- **Authentication with Clerk**
    - Simple sign-in, sign-up, and session management.
    - Protect routes with Clerk middleware and read user data with server/client hooks.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Built With

- **[Next.js 15](https://nextjs.org/)** – Core framework
- **React** – Front-end library for building user interfaces
- **TypeScript** – Type-safe development
- **[Clerk](https://clerk.com/)** – Authentication service
- **Node.js** – Backend runtime environment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

Follow these instructions to clone, set up, and run the **Next.js 15 Intro** project locally.

### Prerequisites

- **Node.js** (v20+ recommended)
- **npm** or **yarn** (latest version preferred)
- **Git** (to clone the repository)

### Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GRB-Workspace/Nextjs-15-Intro.git
   cd Nextjs-15-Intro
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**

   Visit `http://localhost:3000` to explore the sample Next.js 15 project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Project Structure

Below is a simplified view of the core folders and files:

```plaintext
.
├── app/
│   ├── (auth)/
│   │   ├── forgot-password/
│   │   ├── login/
│   │   └── register/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   └── first-post/
│   │       └── page.tsx
│   ├── mock-users/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── users-client/
│   │   └── page.tsx
│   ├── users-server/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── src/
│   ├── middleware.ts
│   └── ...
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

- **`app/`** – Houses all routes (`page.tsx`) and nested layouts (`layout.tsx`).
- **`(auth)/`** – Example authentication routes (login, register, forgot password).
- **`users-server/`** & **`users-client/`** – Demonstrates server vs. client component usage.
- **`middleware.ts`** – Clerk authentication middleware configuration.
- **`.env.local`** – Store environment variables (keys, secrets) locally.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Resources

Here are some helpful links and resources used throughout this project:

- **[Next.js Official Tutorial](https://nextjs.org/learn)**  
  Comprehensive guide for beginners and experienced developers alike.

- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**  
  Free fake REST API for testing and prototyping.

- **[MockAPI](https://mockapi.io/)**  
  Another excellent tool for generating mock APIs.

- **[Clerk](https://clerk.com/)**  
  Simple and secure authentication for your Next.js apps.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## References

- **YouTube Video:** [Next.js 15 Crash Course](https://youtu.be/_EgI9WH8q1A?si=fGSrVzbUua29yi-2)  
  A video walkthrough highlighting Next.js 15 quick walkthrough and new features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact

- **Repository Link:** [Nextjs-15-Intro](https://github.com/GRB-Workspace/Nextjs-15-Intro.git)
- **Email:** [grbulegoda@gmail.com](mailto:grbulegoda@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">
  <p>
    &copy; 2025 Gayanuka Bulegoda
  </p>
</div>

---

