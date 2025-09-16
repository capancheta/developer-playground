**IMPORTANT:** Analyze the current repository before continuing.
**IMPORTANT:** DO NOT RUN THE APP, BUILDS, TEST SCRIPTS or DEPLOYMENTS.
**IMPORTANT:** Your job is to only write code.
**Main Task: 
            Generate a code base for the following requirements:
            Use React to build the client-side application.
        **

        **PageContentTypes.TechnicalDesign Requirements:**
        This document outlines the technical design for a secure, zero-knowledge password manager. The application will use a **React.js** client-side framework for the user interface. Key technologies include **Zustand** for state management, **Tailwind CSS** for styling, and the **Web Crypto API** for client-side encryption and key derivation, ensuring a zero-knowledge security model where sensitive data is never exposed to the server. The project will be structured as a monorepo with a **Node.js/Express.js** backend and **PostgreSQL** database. The implementation plan is divided into phases, starting with user authentication and progressing to secure credential storage, management, and finally, hardening and deployment.
    

        **PageContentTypes.UiUxDesign Requirements:**
        This Confluence page outlines the UI/UX design specification for a personal password manager application. The core requirements for generating a React client-side codebase are derived from the user flows and key UI components described.

**Key Requirements for React Codebase Generation:**

*   **User Authentication:** Implement screens and logic for user registration (including master password strength feedback) and login.
*   **Credential Management:**
    *   **Adding Credentials:** Develop a form for adding new credentials, including fields for name, username, password, URL, notes, and tags.
    *   **Password Generation:** Integrate a password generator component with configurable options (length, character types) that can populate the password field.
    *   **Viewing & Copying:** Display a list of credentials with masked passwords. Implement functionality to reveal passwords and one-click copy for username, password, and URL.
    *   **Editing Credentials:** Provide an interface to edit existing credential details.
    *   **Deleting Credentials:** Implement a confirmation dialog for deleting credentials.
*   **Navigation & Layout:**
    *   **Mobile-First Design:** Structure the application with a mobile-first approach, ensuring responsiveness for tablet and desktop.
    *   **Dashboard:** Create a "My Credentials" dashboard displaying credentials in a list or card format.
    *   **Search Functionality:** Implement real-time search filtering for credentials.
    *   **Floating Action Button (FAB):** Use a FAB for the primary action of adding new credentials.
*   **UI Components & Interactions:**
    *   **Master Password Strength Meter:** A dynamic visual indicator for password strength during registration.
    *   **Password Visibility Toggle:** An "eye" icon to show/hide password fields.
    *   **One-Click Copy Buttons:** Icons to copy data to the clipboard.
    *   **Credential Cards/Rows:** Components to display individual credential entries.
    *   **Password Generator Modal:** A modal for generating secure passwords.
    *   **Confirmation Dialogs:** Modals for critical actions like deletion.
    *   **Toast Notifications:** Temporary messages for user feedback.
*   **Accessibility:** Ensure keyboard navigation, screen reader compatibility, sufficient color contrast, scalable text, predictable interactions, clear error handling, and adequate touch target sizes.
*   **Aesthetics:** Employ a clean, modern, trustworthy, and user-centric design with a palette of cool blues, grays, and subtle greens.
    