**IMPORTANT:** Analyze the current repository before continuing.
**IMPORTANT:** DO NOT RUN THE APP, BUILDS, TEST SCRIPTS or DEPLOYMENTS.
**IMPORTANT:** Your job is to only write code.
**Main Task: 
            Generate a code base for the following requirements:
            Use React to build a client-side application.
        **

        **PageContentTypes.TechnicalDesign Requirements:**
        This document outlines the technical design for a secure, zero-knowledge password manager application. The core requirement is to build a client-side application using **React.js**.

The application will employ a **Client-Server Architecture** with a **zero-knowledge security model**, meaning all sensitive data encryption and decryption, including master password key derivation, will occur exclusively on the client-side using the **Web Crypto API**. The backend will handle user authentication (storing salted hashes of master passwords) and store encrypted data blobs.

The proposed technology stack for the client-side application includes:
*   **Framework**: **React.js**
*   **State Management**: Zustand
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **Cryptography**: Web Crypto API (for AES-256 GCM and PBKDF2)
*   **Build Tool**: Vite
    

        **PageContentTypes.UiUxDesign Requirements:**
        This Confluence page outlines the UI/UX design specification for a client-side password manager application built with React.

**Key requirements for generating the code base include:**

*   **React Client-Side Application:** The application will be built using React.
*   **User Account Creation & Login:**
    *   Secure account creation with email and master password.
    *   Real-time master password strength indicator during registration.
    *   Email verification process.
    *   Login form with email and master password.
    *   "Forgot Master Password" functionality.
*   **Credential Management:**
    *   Intuitive process for adding new credential entries (Name, Username, Password, URL, Notes).
    *   **Password Generation:** A built-in password generator with options for length, character types (uppercase, lowercase, numbers, symbols), and exclusion of ambiguous characters.
    *   Categorization/tagging of credentials.
    *   Effortless viewing and copying of credentials (username, password, URL) with one-click copy buttons.
    *   Securely masked password fields with a visibility toggle.
    *   Editing and deleting existing credential entries.
    *   Search functionality to quickly locate specific credentials.
*   **Design Philosophy & Aesthetics:**
    *   Clean, modern, and minimalist design.
    *   Trustworthy and secure color palette (blues, grays, greens).
    *   User-centric and intuitive interactions.
    *   Responsive and adaptive design (mobile-first).
    *   Subtle animations for feedback.
*   **Key UI Components & Interactions:**
    *   Master Password Strength Meter.
    *   Password Visibility Toggle (Eye Icon).
    *   One-Click Copy Buttons.
    *   Floating Action Button (FAB) for adding new credentials.
    *   Real-time Search Filter.
    *   Credential Cards/Rows for list view.
    *   Password Generator Modal.
    *   Confirmation Dialogs for destructive actions (e.g., delete).
    *   Toast Notifications for feedback.
*   **Accessibility Considerations:**
    *   Keyboard navigation and focus states.
    *   Screen reader compatibility (ARIA attributes, alt text).
    *   Sufficient color contrast.
    *   Scalable text.
    *   Predictable interactions.
    *   Clear error handling.
    *   Adequate touch target sizes.
    