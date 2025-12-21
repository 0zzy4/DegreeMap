# Degree Planner - Design Document

## 1. Problem Statement

College students need to plan their 4-year course schedule but currently use:

- Excel spreadsheets (clunky, hard to visualize)
- Paper planners (can't easily rearrange)
- Mental planning (error-prone, forget requirements)

Students want to:

- Visualize their workload across all semesters
- Balance courses to avoid overloading
- Experiment with different course arrangements
- Track progress toward degree completion

## 2. Solution

A web app that allows students to:

- Add courses with name, code, credits, and type
- Move courses between semesters
- Color-code courses by type (major, minor, core, elective, etc.)
- See credit hours per semester & total count
- Store unscheduled courses in a Course Bank
- Account for AP/Transfer credits

## 3. User Stories

### Core Workflows

- As a student, I want to add a course to a specific semester
- As a student, I want to move a course to a different semester
- As a student, I want to delete a course I no longer plan to take
- As a student, I want to see credit hours per semester to avoid overloading
- As a student, I want to see my total credits to track degree progress
- As a student, I want a Course Bank to hold courses I plan to take but haven't scheduled yet

### Visual Organization

- As a student, I want to color-code courses by type (major/minor/elective/core)
- As a student, I want to see multiple years at once for long-term planning
- As a student, I want to track AP/Transfer credits separately

### Data Persistence

- As a student, I want my plan to save automatically so I don't lose my work

## 4. Features

### MVP (Week 1-2) - Single Plan Focus

- [ ] Course Bank section for unscheduled courses (table format)
- [ ] Year 0 (Pre-College): AP | Transfer | Summer sections
- [ ] Display 12 semesters in a grid (4 years × 3 semesters: Fall/Spring/Summer)
- [ ] Add course via modal (course code, name, credits, type, location)
- [ ] Edit course (click pencil icon, opens modal)
- [ ] Delete course (click trash icon)
- [ ] Move course between locations (autocomplete search)
- [ ] Show total credits per semester
- [ ] Show total credits in Course Bank
- [ ] Show total credits overall
- [ ] Save plan to localStorage
- [ ] Color-code courses by type with left border
- [ ] User-defined course types (add/edit/delete)

### Version 2 (Week 3-4)

- [ ] Drag-and-drop courses between semesters
- [ ] Warning if semester > 18 credits
- [ ] Add/remove semesters dynamically
- [ ] Export plan to PDF

### Version 3 (Future)

- [ ] Multiple saved plans
- [ ] User accounts/login
- [ ] Share plans with friends
- [ ] Course templates
- [ ] Prerequisite validation
- [ ] Grade calculator

## 5. Visual Design

**Figma Design:** [View Mockup](https://www.figma.com/design/vCE0h3zaJ1jcxneQziKNn4/Untitled?node-id=0-1&t=jKVW4j2yty02OZvW-1)

### Layout Overview

- **Course Bank**: Table format with Course Code, Course Name, Credits, and Actions columns
- **Year 0 (Pre-College)**: Three sections - AP | Transfer | Summer
- **Years 1-4**: Grid structure with 4 rows (years) × 3 columns (Fall/Spring/Summer per year)
- **Course Cards**: Include colored left border indicating course type, with hover actions

## 6. Data Structure

### Complete State Schema

```javascript
{
  // ═══════════════════════════════════════════════════════
  // ALL COURSES - Single source of truth (hashmap)
  // ═══════════════════════════════════════════════════════
  allCourses: {
    'uuid-1': {
      id: 'uuid-1',
      courseCode: 'CS 1301',
      name: 'Intro to Computing',
      credits: 3,
      typeId: 'type-uuid-101',
      location: 'fall-1'  // 'bank' | 'ap' | 'transfer' | 'summer-0' | semester-id
    },
    'uuid-2': {
      id: 'uuid-2',
      courseCode: 'CS 1331',
      name: 'Intro to OOP',
      credits: 3,
      typeId: 'type-uuid-101',
      location: 'bank'
    },
    'uuid-3': {
      id: 'uuid-3',
      courseCode: 'ENGL 1101',
      name: 'English Composition I',
      credits: 3,
      typeId: 'type-uuid-105',
      location: 'ap'
    }
  },

  // ═══════════════════════════════════════════════════════
  // COURSE BANK - Just IDs
  // ═══════════════════════════════════════════════════════
  courseBank: ['uuid-2'],

  // ═══════════════════════════════════════════════════════
  // SEMESTERS - Just IDs (Year 0 + Years 1-4)
  // ═══════════════════════════════════════════════════════
  semesters: [
    // Year 0 (Pre-College)
    {
      id: 'ap',
      name: 'AP',
      year: 0,
      term: 'ap',
      courseIds: ['uuid-3']
    },
    {
      id: 'transfer',
      name: 'Transfer',
      year: 0,
      term: 'transfer',
      courseIds: []
    },
    {
      id: '0-summer',
      name: 'Summer',
      year: 0,
      term: 'summer',
      courseIds: []
    },

    // Year 1
    {
      id: '1-fall',
      name: 'Fall',
      year: 1,
      term: 'fall',
      courseIds: ['uuid-1']
    },
    {
      id: '1-spring',
      name: 'Spring',
      year: 1,
      term: 'spring',
      courseIds: []
    },
    {
      id: '1-summer',
      name: 'Summer',
      year: 1,
      term: 'summer',
      courseIds: []
    },

    // Year 2
    {
      id: '1-fall',
      name: 'Fall',
      year: 2,
      term: 'fall',
      courseIds: []
    },
    {
      id: '2-spring',
      name: 'Spring',
      year: 2,
      term: 'spring',
      courseIds: []
    },
    {
      id: '2-summer',
      name: 'Summer',
      year: 2,
      term: 'summer',
      courseIds: []
    },

    // Year 3
    {
      id: '3-fall',
      name: 'Fall',
      year: 3,
      term: 'fall',
      courseIds: []
    },
    {
      id: '3-spring',
      name: 'Spring',
      year: 3,
      term: 'spring',
      courseIds: []
    },
    {
      id: '3-summer',
      name: 'Summer',
      year: 3,
      term: 'summer',
      courseIds: []
    },

    // Year 4
    {
      id: '4-fall',
      name: 'Fall',
      year: 4,
      term: 'fall',
      courseIds: []
    },
    {
      id: '4-spring',
      name: 'Spring',
      year: 4,
      term: 'spring',
      courseIds: []
    },
    {
      id: '4-summer',
      name: 'Summer',
      year: 4,
      term: 'summer',
      courseIds: []
    }
  ],

  // ═══════════════════════════════════════════════════════
  // COURSE TYPES - User-defined (hashmap)
  // ═══════════════════════════════════════════════════════
  courseTypes: {
    'type-uuid-101': { id: 'type-uuid-101', label: 'Major', color: 'blue' },
    'type-uuid-102': { id: 'type-uuid-102', label: 'Minor', color: 'green' },
    'type-uuid-103': { id: 'type-uuid-103', label: 'Core', color: 'purple' },
    'type-uuid-104': { id: 'type-uuid-104', label: 'Elective', color: 'gray' },
    'type-uuid-105': { id: 'type-uuid-105', label: 'Gen Ed', color: 'yellow' },
    'type-uuid-106': { id: 'type-uuid-106', label: 'Transfer/AP', color: 'orange' }
  }
}
```

## 7. Actions

### Course Management

**createCourse(courseCode, name, credits, typeId, location)**

```
- Generate new UUID for course
- Create course object: { id, courseCode, name, credits, typeId, location }
- Add to allCourses hashmap
- Add course ID to:
  - courseBank (if location='bank')
  - semester.courseIds (if location=semester-id)
```

**updateCourse(courseId, updates)**

```
- Update course properties in allCourses[courseId]
- If location changed:
  - Call moveCourse(courseId, newLocation)
- Otherwise:
  - Just update allCourses[courseId] with new values
```

**moveCourse(courseId, newLocation)**

```
- Get old location from allCourses[courseId].location
- Update allCourses[courseId].location = newLocation
- Remove courseId from old location:
  - If old location = 'bank': remove from courseBank array
  - Otherwise: remove from semester.courseIds
- Add courseId to new location:
  - If new location = 'bank': add to courseBank array
  - Otherwise: add to semester.courseIds
```

**deleteCourse(courseId)**

```
- Get location from allCourses[courseId].location
- Remove from allCourses hashmap
- Remove courseId from:
  - courseBank array (if location='bank')
  - semester.courseIds (if location=semester-id)
```

**searchCourses(query)**

```
- Search through allCourses by courseCode and name
- Filter where courseCode or name contains query (case-insensitive)
- Prioritize exact courseCode matches
- Return array of matching course objects
- Used for autocomplete dropdown when moving courses
```

### Course Type Management

**addCourseType(label, color)**

```
- Generate new UUID for type
- Add { id: uuid, label, color } to courseTypes hashmap
```

**updateCourseType(typeId, updates)**

```
- Update courseTypes[typeId] with new label/color
- All courses using this typeId automatically reflect changes
```

**deleteCourseType(typeId)**

```
- Check if any courses use this typeId
  - Search through Object.values(allCourses) for typeId
- If yes: prevent deletion (show error)
- If no: remove from courseTypes hashmap
```

## 8. User Workflows

### Adding a New Course

1. Click "+ Add Course" button (in Course Bank or semester)
2. Modal opens with form fields:
    - Course Code (required)
    - Course Name (required)
    - Credit Hours (required, number)
    - Type (dropdown, required)
    - Location (auto-set based on where button was clicked)
3. Click "Save"
4. `createCourse()` is called
5. Course appears in selected location
6. Modal closes

### Moving a Course

1. In target semester, click in input field or start typing
2. Type course code (e.g., "CS 13")
3. Autocomplete dropdown shows matching courses:

    ```
    CS 1301 - Intro to Computing (Currently in Fall 2022)CS 1332 - Data Structures (Currently in Course Bank)
    ```

4. Click on a course
5. `moveCourse()` is called
6. Course moves from old location to new location
7. Credit totals update automatically

### Editing a Course

1. Hover over course card
2. Click pencil (✏️) icon
3. Modal opens with pre-filled form
4. Edit any fields (code, name, credits, type)
5. Click "Save"
6. `updateCourse()` is called
7. Course card updates with new info
8. Modal closes

### Deleting a Course

1. Hover over course card
2. Click trash (🗑️) icon
3. (Optional) Confirmation dialog
4. `deleteCourse()` is called
5. Course removed from view
6. Credit totals update automatically

## 9. Helper Functions

All helper functions are **calculated, not stored in state**.

**getSemesterCredits(semester, allCourses)**

```javascript
/*
  Loop through semester.courseIds
  For each ID, get course from allCourses[id]
  Sum course.credits
  Return total
*/
```

**getCourseBankCredits(courseBank, allCourses)**

```javascript
/*
  Loop through courseBank array (course IDs)
  For each ID, get course from allCourses[id]
  Sum course.credits
  Return total
*/
```

**getTotalCredits(semesters, allCourses)**

```javascript
/*
  Loop through all semesters (excluding Year 0)
  Call getSemesterCredits for each
  Sum all semester totals
  Return grand total
*/
```

**getCourseTypeLabel(typeId, courseTypes)**

```javascript
/*
  Return courseTypes[typeId].label
*/
```

**getCourseTypeColor(typeId, courseTypes)**

```javascript
/*
  Return courseTypes[typeId].color
*/
```

**generateCourseId()**

```javascript
/*
  return uuidv4()
*/
```

**generateTypeId()**

```javascript
/*
  return uuidv4()
*/
```

## 10. localStorage Schema

```javascript
{
  version: 1,  // Schema version for future migrations
  lastSaved: '2024-12-20T16:45:00Z',  // ISO timestamp
  allCourses: { ... },  // Full courses hashmap
  courseBank: [ ... ],  // Array of course IDs
  semesters: [ ... ],  // Array of semester objects
  courseTypes: { ... }  // Course types hashmap
}
```

Save on every state change (debounced by 500ms).

## 11. Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **ID Generation**: UUID (npm package)
- **Storage**: localStorage (browser)

---
