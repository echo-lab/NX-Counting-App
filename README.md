# NX-Counting-App

✨ This is Virginia Tech's Echolab [Counting app research project](https://github.com/echo-lab/Counting-App) but within an [NX](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) workspace.

A counting and early math learning app built with React and Node.js, designed for preschoolers to practice counting, number recognition, and basic arithmetic through interactive games and activities.

## Features

- **Interactive Counting Games**: Touch-based counting exercises with visual feedback and audio cues.
- **Multiple Game Modes**:
  - Touch Training: Tap cookies to count and hear numbers.
  - Animation Training: Watch animations and count objects.
  - Baseline Training: Compare quantities and choose the correct tray.
  - Practice Mode: Free-play counting activities.
- **Audio Support**:
  - Text-to-Speech (TTS) for instructions and feedback.
  - Sound effects for interactions (trills, circling sounds).
  - Audio unlock on first user gesture for iOS/iPad compatibility.
- **Progress Tracking**: Save user answers and touch data for analysis.
- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Accessibility**: Alt text for images, keyboard navigation, and screen reader support.

## Why Nx?

We chose Nx as our workspace tool for several reasons:

- **Monorepo Management**: Nx allows us to manage both the frontend (React) and backend (Node.js/Express) in a single repository, simplifying development and deployment.
- **Build Optimization**: Nx's intelligent build system only rebuilds what has changed, making development faster and CI/CD more efficient.
- **Code Sharing**: Easy sharing of types, utilities, and configurations between frontend and backend.
- **Scalability**: As the project grows, Nx makes it easy to add new apps, libraries, and tools without restructuring the codebase.
- **Developer Experience**: Built-in generators, linting, testing, and caching out of the box.
- **CI/CD Integration**: Nx Cloud provides distributed task execution and remote caching, speeding up builds in CI.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (for data storage)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd NX-Counting-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your MongoDB connection string and other required variables

4. Start the development servers:
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start individually
   npm run start:frontend
   npm run start:backend
   ```
