## Updated Readme for Website

### **Paper Shaper Dashboard**

Welcome to the **Paper Shaper Dashboard** — a streamlined and interactive platform that helps you design, customize, and manage paper templates with ease. Built with React, TypeScript, and Vite, the dashboard delivers a blazing-fast and responsive user experience.

### **Features**

- **Shape Your Paper**: Use our intuitive tools to design and modify your paper-based products seamlessly.
- **Paper Templates**: Choose from a wide range of customizable templates tailored to your needs.
- **Advanced Features**: Unlock professional tools for intricate paper design and advanced features.

### **Try the Demo**

Want to see how it works? Click the **Start Demo** button within the dashboard to explore the powerful capabilities of Paper Shaper.

---

### **Technologies Used**

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Authentication**: Context-based user authentication with session storage

---

### **Development Setup**

1. Clone the repository:

   ```bash
   git clone git@github.com:harshkushwaha7x/papershaper.git
   cd your-repo-folder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Visit the app at `http://localhost:5173`.

---

### **Code Highlights**

#### Dashboard Header

The header dynamically displays the user's profile picture and a logout button, fetched from the `AuthContext`:

```tsx
const authContext = useContext(AuthContext);
const { logout } = authContext || {};

const handleLogout = () => {
  if (logout) {
    logout();
    window.location.replace("/login");
  }
};
```

#### Feature Grid

A responsive grid showcases the primary features of the app using `Tailwind CSS`:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {features.map((feature) => (
    <div key={feature.title} className="bg-white p-8 rounded-xl shadow-xl">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
</div>
```

#### Demo Section

Encourages user engagement with a call-to-action button:

```tsx
<button
  className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
  onClick={() => navigate("/try-demo")}
>
  Start Demo
</button>
```

---

### **Get Involved**

Want to contribute? Fork the repo and submit a pull request. We welcome all contributions to make **Paper Shaper** even better!

---

### **License**

MIT License — Feel free to use and adapt this project for your needs.
