# PopX App

A React app built with Vite for the PopX intern/fresher assignment.

## Project Structure

```
popx-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Screen router
    ├── context/
    │   └── AppContext.jsx    # Global state (navigation + user data)
    ├── pages/
    │   ├── WelcomePage.jsx
    │   ├── LoginPage.jsx
    │   ├── CreateAccountPage.jsx
    │   └── AccountSettingsPage.jsx
    ├── components/
    │   ├── PhoneWrapper.jsx  # Centered mobile frame
    │   ├── FormField.jsx     # Reusable labeled input
    │   └── Button.jsx        # Reusable button with variants
    ├── styles/
    │   ├── global.css        # CSS reset + base
    │   └── theme.js          # Color & font tokens
    └── utils/
        └── validation.js     # Form validation logic
```

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Validation Rules

- **Phone**: digits only, exactly 10 digits
- **Email**: must end with `@gmail.com`
- **Full Name & Password**: required fields

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for free hosting.
