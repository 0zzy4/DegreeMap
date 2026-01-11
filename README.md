# DegreeMap

A web application for visualizing and planning your college degree course schedule across multiple years and semesters.

Built by a Georgia Tech CS student to help fellow students plan their degree requirements visually.

**Live Demo**: [https://degreemap.vercel.app](https://degreemap.vercel.app)

## Features

- **Multi-Year Planning**: Organize courses across multiple academic years
- **Semester Organization**: Plan courses for Fall, Spring, and Summer semesters
- **Course Bank**: Store and manage courses before placing them in specific semesters
- **Course Management**: Add, edit, and delete courses with detailed information
- **Credit Tracking**: Automatically calculates and displays credit hours per year, per semester, and total
- **Auto-Save**: All changes automatically saved to browser localStorage

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router and React 19
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS 4 for utility-first, responsive styling
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for global state management
- **Data Persistence**: localStorage via Zustand persist middleware
- **UI Components**: Custom components with responsive design

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0zzy4/DegreeMap.git
cd degree-map
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Root layout component
│   └── globals.css       # Global styles
├── components/       # React components
│   ├── Year.tsx          # Year container component
│   ├── Semester.tsx      # Semester component
│   ├── SemesterGrid.tsx  # Grid layout for all years
│   ├── CourseBank.tsx    # Course storage component
│   ├── CourseTile.tsx    # Individual course card
│   └── ui/               # UI components
├── store/            # Zustand state management
│   └── courseStore.ts    # Course state and actions
└── types/            # TypeScript type definitions
    └── Course.ts         # Course interface
```

## Data Persistence

All course data is automatically saved to your browser's localStorage under the key `course-storage`. Your data will persist across browser sessions, but note that:

- Data is stored locally in your browser
- Clearing browser data will remove your saved courses
- Data is not synchronized across different browsers or devices

## Roadmap
- [ ] Course type color coding (Core, Major, Elective)
- [ ] Drag-and-drop course reordering

## License

Private project - All rights reserved

## Contributing

Found a bug or have a suggestion? [Open an issue](https://github.com/0zzy4/DegreeMap/issues)