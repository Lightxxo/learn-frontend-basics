# 🏗️ Final Project: The "Kanban Board" Capstone

> "Theory is nice. But can you build software that humans actually use?"

## 🎯 Objective

Build a full-featured **Trello Clone** (Kanban Board) using the patterns you learned (React, DnD, TypeScript, State Management).

**Goal**: A polished, drag-and-drop enabled project management tool deployed to production.

---

## 📅 The Build Schedule (Days 10-15)

### Day 10: Setup & Architecture

- [ ] **Initialize**: `npm create vite@latest final-project -- --template react-ts`.
- [ ] **Dependencies**: `npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities framer-motion tailwindcss`.
- [ ] **Directory Structure**:
  - `src/features/board/...` (Board logic)
  - `src/features/auth/...` (Auth logic)
  - `src/components/...` (UI Kit)
  - `src/store/...` (Global State)

### Day 11: The Design System (UI Kit)

Don't use Material UI or Chakra. Build your own based on Tailwind.

- [ ] **Button**: Variants (primary, ghost, danger).
- [ ] **Card**: The base surface for tasks.
- [ ] **Input/Textarea**: Auto-resizing text areas for task titles.
- **Requirement**: Use `cva` or `clsx` for managing conditional class names.

### Day 12: State Modeling (The Brain)

- [ ] **Interfaces**: Define `Column`, `Task`, `Id`.
- [ ] **Store**: Create a `BoardStore` (use Zustand or Redux Toolkit, or your own Observable from Day 6!).
- [ ] **Actions**: `moveTask(taskId, fromCol, toCol, index)`, `addColumn(title)`, `deleteTask(id)`.

### Day 13: Drag & Drop (The Hard Stuff)

- [ ] **Columns**: Make columns droppable.
- [ ] **Tasks**: Make tasks draggable.
- [ ] **Sortable**: Use `@dnd-kit/sortable` to allow reordering within a column.
- **Challenge**: Handle drag _between_ columns (Task A moves from "Todo" to "Done").

### Day 14: Polish & Performance

- [ ] **Optimistic UI**: When dragging, the UI should update _instantly_. If the API fails (mocked), revert.
- [ ] **Local Storage**: Persist the board state to `localStorage` so it survives refresh.
- [ ] **Animations**: Use `framer-motion` for smooth layout transitions when items move.

### Day 15: Deployment

- [ ] **Build**: Run `npm run build` and check for type errors.
- [ ] **Deploy**: Push to Vercel/Netlify.
- [ ] **Readme**: Write a case study in your project's `README.md` explaining your architectural choices.

---

## 🧱 Detailed Specifications

### 1. Data Structure Reference

```typescript
type Id = string | number;

interface Task {
  id: Id;
  content: string;
}

interface Column {
  id: Id;
  title: string;
  taskIds: Id[]; // Order matters!
}

interface BoardData {
  tasks: Record<Id, Task>; // Normalized data
  columns: Record<Id, Column>;
  columnOrder: Id[];
}
```

### 2. Functional Requirements

- **Create**: User can click "Add Task" to create a new item. Focus should automatically go to the input.
- **Edit**: Clicking a task changes it to an editable textarea (Inline Editing).
- **Delete**: Hovering a task shows a "Trash" icon.
- **Drag**:
  - Users can reorder tasks within a column.
  - Users can move tasks between columns.
  - (Bonus) Users can reorder Columns.

### 3. Visual Requirements

- **Glassmorphism**: Use a subtle drag overlay (when dragging, the item lifts up and becomes semi-transparent).
- **Responsive**: On mobile, columns should be a horizontally scrollable list (Snap scroll).
- **Dark Mode**: Support system preference.

## 🚀 Recommendation

We highly recommend creating a **New Repository** for this project (e.g., `my-kanban-board`).

- Keep your learning exercises in `learn-frontend-basics`.
- Build your portfolio piece in its own repo so recruiters see it clearly.
- Link your final deployed URL back here when done!
