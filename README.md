# NX-Counting-App

✨ This is Virginia Tech's Echolab [Counting app research project](https://github.com/echo-lab/Counting-App) but within an [NX](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) workspace.

A counting and early math learning app built with React and Node.js, designed for preschoolers to practice counting, number recognition, and basic arithmetic through interactive games and activities.
New
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
  
   `git clone <repository-url>
   cd NX-Counting-App`
   

2. Install dependencies:
   `npm install`

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Ask an admin for the `.env.local` file code
   - Run the command `npx nx-cloud login`. This will take you to a page requesting you to sign in. Create an NX cloud account and rerun the command again.
     
4. Start the development servers:
   - in one terminal, run `npx nx serve backend`
   - in another terminal, run `npx nx serve frontend`

## Note

We have upgraded the voice agent to **Gemini** to improve user experience in another branch, but that version is not deployed yet. The current deployed version uses Google Cloud text-to-speech system.
