**IMPORTANT:** Analyze the current repository before continuing.
**IMPORTANT:** DO NOT RUN THE APP, BUILDS, TEST SCRIPTS or DEPLOYMENTS.
**IMPORTANT:** Your job is to only write code.
**Main Task: 
            Generate a code base for the following requirements:
            Use React to create a client-side application.
        **

        **PageContentTypes.TechnicalDesign Requirements:**
        This document outlines the technical design for a secure, zero-knowledge password manager application.

**Client-Side Application Requirements:**

*   **Technology:** React.js will be used to create the client-side application.
*   **Key Features:**
    *   **Zero-Knowledge Security:** All encryption, decryption, and master password key derivation will occur on the client-side using the Web Crypto API.
    *   **User Interface:** Built with React.js, managed with Zustand for state, and styled with Tailwind CSS.
    *   **Routing:** React Router DOM will handle navigation.
    *   **Cryptography:** Web Crypto API for AES-256 GCM encryption/decryption and PBKDF2 for key derivation.
    *   **Password Generation:** Algorithmic password generation using CSPRNG.
    *   **Clipboard Management:** Native `navigator.clipboard` API.
    *   **Build Tool:** Vite for fast development and building.
*   **Project Structure:** A monorepo with a `/client` directory containing React components, pages, hooks, utility functions (including `cryptoUtils.ts` and `passwordGenerator.ts`), API clients, and styling.
    

        **PageContentTypes.UiUxDesign Requirements:**
        This Confluence page outlines the UI/UX design specification for a personal password manager application. It details "How Might We" statements, the overall design philosophy (clean, modern, trustworthy, user-centric, responsive), and key user flows for account creation, login, adding, viewing, copying, editing, and deleting credentials. The document also includes conceptual wireframes for core screens (Login/Registration, Dashboard, Add/Edit Credential) and lists key UI components and interactions such as password strength meters, visibility toggles, one-click copy buttons, a FAB for adding credentials, real-time search, credential cards, a password generator, confirmation dialogs, and toast notifications. Accessibility considerations, including keyboard navigation, screen reader compatibility, color contrast, scalable text, predictable interactions, clear error handling, and touch target size, are also explicitly addressed.

**Information relevant to generating a React client-side application:**

*   **Technology:** The application is to be built using React for the client-side.
*   **Core Screens/Components:** The design specifies distinct screens and components that will need to be implemented in React:
    *   Login/Registration Screen (with tabs for Login and Register)
    *   My Credentials Dashboard (list view with search, credential cards)
    *   Add/Edit Credential Form
    *   Password Generator Modal
    *   Confirmation Dialogs
    *   Toast Notifications
*   **Key UI Components/Interactions to implement:**
    *   Input fields (text, password, email, URL, notes)
    *   Buttons (primary, secondary, FAB)
    *   Tabs
    *   Icons (eye for visibility, copy, menu, search, add)
    *   Password strength indicator (visual bar and text)
    *   Sliders and checkboxes for password generation
    *   Modals/Overlays
    *   List rendering for credentials
    *   Search functionality with real-time filtering
    *   Swipe gestures for mobile (for edit/delete)
    *   Form validation (inline)
*   **State Management:** The design implies the need for managing user authentication state, credential data, and UI states (e.g., search active, password visible, modal open).
*   **Routing:** Different screens (Login, Dashboard, Add/Edit) will require routing.
*   **API Integration (Implied):** While not explicitly detailed for the client-side, the flows for saving, editing, and deleting credentials suggest interaction with a backend API.
*   **Accessibility:** Implementation should adhere to accessibility guidelines (ARIA attributes, focus states, keyboard navigation, etc.).
    