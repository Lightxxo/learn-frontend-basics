# 🏗️ Final Project: The "Kanban Board" Capstone

> "Theory is nice. But can you build software that humans actually use?"

This project is your **proving ground**. You've spent 9 days learning the internals—the event loop, prototypes, async patterns, TypeScript, and even building your own mini-React. Now it's time to synthesize everything into a real, deployable application.

> [!IMPORTANT]
> **Create a New Repository for This Project!**
>
> We highly recommend building this in a **fresh repo** (e.g., `my-kanban-board`):
>
> - Keep your learning exercises separate in `learn-frontend-basics`
> - Your portfolio piece deserves its own clean repo for recruiters to see
> - Makes deployment and CI/CD setup cleaner
> - Link your deployed URL back here when you're done! 🎉

---

## 🎯 Project Overview

**Build**: A full-featured **Trello Clone** (Kanban Board).

**Goal**: A polished, drag-and-drop enabled project management tool deployed to production that demonstrates mastery of **every concept** you've learned.

### What You'll Demonstrate

| Day | Concept                     | How It's Applied in This Project               |
| --- | --------------------------- | ---------------------------------------------- |
| 1   | Event Loop, Debounce        | Auto-save typing, search filtering             |
| 2   | Deep Clone, Prototypes      | Copying board state, undo/redo snapshots       |
| 3   | Async Queue, Retry          | API calls with retry logic, rate-limited saves |
| 4   | TypeScript, Type Guards     | Fully typed state, discriminated unions        |
| 5   | Virtual DOM, Reconciliation | Understanding React's rendering model          |
| 6   | useState, Closures          | State management fundamentals                  |
| 7   | useEffect, Cleanup          | Side effects, subscriptions, timers            |
| 8   | useMemo, Caching            | Performance optimization, LRU patterns         |
| 9   | JWT, CSRF, RBAC             | Authentication flow, protected routes          |

---

## 📅 The Build Schedule (Days 10-15)

> **Important**: Each day has specific features that connect back to your learning. Don't skip the "Concept Application" sections—they're the whole point!

---

### 🔨 Day 10: Architecture & Setup

_"The foundation determines the height of the building."_

#### Tasks

- [ ] **Initialize Project**

  ```bash
  npm create vite@latest kanban-board -- --template react-ts
  cd kanban-board
  ```

- [ ] **Install Dependencies**

  ```bash
  npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
  npm install framer-motion
  npm install zustand           # or redux-toolkit, your choice
  npm install tailwindcss @tailwindcss/vite
  npm install clsx class-variance-authority     # for component variants
  ```

- [ ] **Configure TypeScript Strictly**

  ```json
  // tsconfig.json - enable strict mode
  {
    "compilerOptions": {
      "strict": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true
    }
  }
  ```

- [ ] **Set Up Directory Structure**
  ```
  src/
  ├── components/          # Reusable UI primitives
  │   ├── ui/              # Button, Input, Card, Modal
  │   └── board/           # BoardView, Column, TaskCard
  ├── features/
  │   ├── board/           # Board-specific logic & hooks
  │   └── auth/            # (Bonus) Auth logic
  ├── store/               # Zustand/Redux state management
  ├── hooks/               # Custom hooks (useDebounce, etc.)
  ├── types/               # TypeScript interfaces
  ├── utils/               # Helper functions (deepClone, etc.)
  └── lib/                 # Third-party wrappers
  ```

#### 📚 Concept Application: Day 4 TypeScript

Define your type system **before** writing any components:

```typescript
// src/types/board.ts

/** Unique identifier - using branded types for extra safety */
type TaskId = string & { readonly brand: unique symbol };
type ColumnId = string & { readonly brand: unique symbol };

/** Helper to create typed IDs */
const createTaskId = (id: string): TaskId => id as TaskId;
const createColumnId = (id: string): ColumnId => id as ColumnId;

interface Task {
  id: TaskId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  /** Optional fields for future features */
  labels?: string[];
  dueDate?: Date;
}

interface Column {
  id: ColumnId;
  title: string;
  taskIds: TaskId[]; // Order matters! First = top of column
}

/**
 * Normalized state structure (like Redux recommends)
 * This prevents nested updates and makes lookups O(1)
 */
interface BoardState {
  tasks: Record<TaskId, Task>;
  columns: Record<ColumnId, Column>;
  columnOrder: ColumnId[];
}

/**
 * Discriminated Union for Board Actions
 * (Apply your Day 4 EventBus learning here!)
 */
type BoardAction =
  | { type: "ADD_TASK"; payload: { columnId: ColumnId; content: string } }
  | {
      type: "MOVE_TASK";
      payload: {
        taskId: TaskId;
        fromColumn: ColumnId;
        toColumn: ColumnId;
        toIndex: number;
      };
    }
  | { type: "DELETE_TASK"; payload: { taskId: TaskId; columnId: ColumnId } }
  | { type: "REORDER_COLUMN"; payload: { fromIndex: number; toIndex: number } }
  | { type: "ADD_COLUMN"; payload: { title: string } }
  | { type: "RENAME_COLUMN"; payload: { columnId: ColumnId; title: string } };
```

> 💡 **Why Branded Types?** This prevents you from accidentally passing a `TaskId` where a `ColumnId` is expected. TypeScript will catch the error at compile time!

#### Deliverables

- [ ] Project initializes with `npm run dev`
- [ ] TypeScript strict mode enabled with no errors
- [ ] All type interfaces defined in `src/types/`
- [ ] Folder structure matches the blueprint

---

### 🎨 Day 11: The Design System (UI Kit)

_"Don't use Material UI or Chakra. Build your own."_

Why? Because you need to understand **component composition**, **variant management**, and **how design systems actually work**.

#### Tasks

- [ ] **Create Button Component with Variants**

  Use `class-variance-authority` (CVA) to manage variants—this is the industry standard:

  ```tsx
  // src/components/ui/Button.tsx
  import { cva, type VariantProps } from "class-variance-authority";
  import { clsx } from "clsx";

  const buttonVariants = cva(
    // Base styles applied to ALL buttons
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          primary: "bg-blue-600 text-white hover:bg-blue-700",
          secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
          ghost: "hover:bg-gray-100",
          danger: "bg-red-600 text-white hover:bg-red-700",
        },
        size: {
          sm: "h-8 px-3 text-sm",
          md: "h-10 px-4",
          lg: "h-12 px-6 text-lg",
          icon: "h-10 w-10", // For icon-only buttons
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
      },
    },
  );

  interface ButtonProps
    extends
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
  }

  export function Button({
    className,
    variant,
    size,
    isLoading,
    children,
    disabled,
    ...props
  }: ButtonProps) {
    return (
      <button
        className={clsx(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? <span className="mr-2 animate-spin">⏳</span> : null}
        {children}
      </button>
    );
  }
  ```

- [ ] **Create Card Component** (The Task Card Surface)

  ```tsx
  // src/components/ui/Card.tsx
  interface CardProps {
    children: React.ReactNode;
    className?: string;
    /** For drag overlay effects */
    isDragging?: boolean;
    /** For drop target highlighting */
    isOver?: boolean;
  }

  export function Card({ children, className, isDragging, isOver }: CardProps) {
    return (
      <div
        className={clsx(
          "rounded-lg border bg-white p-4 shadow-sm transition-all",
          isDragging && "rotate-3 scale-105 shadow-xl opacity-90",
          isOver && "ring-2 ring-blue-500",
          className,
        )}
      >
        {children}
      </div>
    );
  }
  ```

- [ ] **Create Auto-Resizing Textarea**

  ```tsx
  // src/components/ui/AutoTextarea.tsx
  import { useEffect, useRef } from "react";

  interface AutoTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onSubmit?: (value: string) => void;
  }

  export function AutoTextarea({ onSubmit, ...props }: AutoTextareaProps) {
    const ref = useRef<HTMLTextAreaElement>(null);

    // Auto-resize based on content
    useEffect(() => {
      const textarea = ref.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [props.value]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit?.(ref.current?.value || "");
      }
      if (e.key === "Escape") {
        ref.current?.blur();
      }
    };

    return (
      <textarea
        ref={ref}
        className="w-full resize-none rounded border-0 bg-transparent p-0 focus:ring-0"
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  }
  ```

- [ ] **Create Modal/Dialog Component**
- [ ] **Create Input Component**
- [ ] **Create IconButton Component**

#### 📚 Concept Application: Day 5 & 6

Your components should follow React's composition model. Think about:

- **Props drilling vs. Composition**: Use `children` over many props
- **Controlled vs. Uncontrolled**: Most inputs should be controlled
- **State colocation**: Keep state as close to where it's used as possible

#### Deliverables

- [ ] All UI primitives in `src/components/ui/`
- [ ] Each component has TypeScript props interface
- [ ] Variants managed with CVA or similar
- [ ] Components are accessible (proper ARIA, focus states)

---

### 🧠 Day 12: State Modeling (The Brain)

_"The shape of your state determines the complexity of your app."_

This is where your **Day 6 useState understanding** meets **real-world state management**.

#### Tasks

- [ ] **Create the Board Store**

  Using Zustand (recommended for its simplicity):

  ```typescript
  // src/store/boardStore.ts
  import { create } from "zustand";
  import { immer } from "zustand/middleware/immer";
  import { persist } from "zustand/middleware";
  import type {
    BoardState,
    Task,
    Column,
    TaskId,
    ColumnId,
  } from "@/types/board";

  interface BoardStore extends BoardState {
    // Actions
    addTask: (columnId: ColumnId, content: string) => void;
    moveTask: (
      taskId: TaskId,
      from: ColumnId,
      to: ColumnId,
      toIndex: number,
    ) => void;
    updateTask: (taskId: TaskId, updates: Partial<Task>) => void;
    deleteTask: (taskId: TaskId, columnId: ColumnId) => void;
    addColumn: (title: string) => void;
    deleteColumn: (columnId: ColumnId) => void;
    reorderColumns: (fromIndex: number, toIndex: number) => void;

    // Undo/Redo (Day 2 deepClone application!)
    history: BoardState[];
    historyIndex: number;
    undo: () => void;
    redo: () => void;
    pushToHistory: () => void;
  }

  // Helper: Generate unique IDs
  const generateId = () => crypto.randomUUID();

  export const useBoardStore = create<BoardStore>()(
    persist(
      immer((set, get) => ({
        // Initial state
        tasks: {},
        columns: {},
        columnOrder: [],
        history: [],
        historyIndex: -1,

        addTask: (columnId, content) => {
          const taskId = generateId() as TaskId;
          set((state) => {
            state.tasks[taskId] = {
              id: taskId,
              content,
              createdAt: new Date(),
              updatedAt: new Date(),
            };
            state.columns[columnId].taskIds.push(taskId);
          });
          get().pushToHistory();
        },

        moveTask: (taskId, from, to, toIndex) => {
          set((state) => {
            // Remove from source
            const fromTaskIds = state.columns[from].taskIds;
            const taskIndex = fromTaskIds.indexOf(taskId);
            fromTaskIds.splice(taskIndex, 1);

            // Add to destination
            state.columns[to].taskIds.splice(toIndex, 0, taskId);

            // Update timestamp
            state.tasks[taskId].updatedAt = new Date();
          });
          get().pushToHistory();
        },

        // ... more actions

        pushToHistory: () => {
          set((state) => {
            // Deep clone current state (Day 2!)
            const snapshot = {
              tasks: structuredClone(state.tasks),
              columns: structuredClone(state.columns),
              columnOrder: [...state.columnOrder],
            };
            // Truncate any "future" history if we're not at the end
            state.history = state.history.slice(0, state.historyIndex + 1);
            state.history.push(snapshot);
            state.historyIndex = state.history.length - 1;
          });
        },

        undo: () => {
          const { history, historyIndex } = get();
          if (historyIndex > 0) {
            const prevState = history[historyIndex - 1];
            set((state) => {
              state.tasks = prevState.tasks;
              state.columns = prevState.columns;
              state.columnOrder = prevState.columnOrder;
              state.historyIndex = historyIndex - 1;
            });
          }
        },

        redo: () => {
          const { history, historyIndex } = get();
          if (historyIndex < history.length - 1) {
            const nextState = history[historyIndex + 1];
            set((state) => {
              state.tasks = nextState.tasks;
              state.columns = nextState.columns;
              state.columnOrder = nextState.columnOrder;
              state.historyIndex = historyIndex + 1;
            });
          }
        },
      })),
      {
        name: "kanban-board-storage", // localStorage key
      },
    ),
  );
  ```

#### 📚 Concept Application: Day 2 (Deep Clone)

**Undo/Redo requires deep cloning!** Every time the user makes a change, you snapshot the state. When they undo, you restore from that snapshot.

```typescript
// You can use structuredClone (modern) or your own deepClone from Day 2
const snapshot = structuredClone(currentState);

// Or if you need to handle circular refs, Dates, RegExp:
const snapshot = deepClone(currentState); // Your Day 2 implementation!
```

#### 📚 Concept Application: Day 4 (Type Guards)

When loading from localStorage, the data is `unknown`. Use type guards!

```typescript
function isValidBoardState(data: unknown): data is BoardState {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.tasks === "object" &&
    typeof obj.columns === "object" &&
    Array.isArray(obj.columnOrder)
  );
}

// Usage when loading
const saved = localStorage.getItem("board");
if (saved) {
  const parsed = JSON.parse(saved);
  if (isValidBoardState(parsed)) {
    // TypeScript now knows `parsed` is BoardState!
    loadState(parsed);
  }
}
```

#### Deliverables

- [ ] Board store created with all CRUD actions
- [ ] Undo/Redo working with state snapshots
- [ ] State persists to localStorage
- [ ] Type guards validate loaded data

---

### 🎯 Day 13: Drag & Drop (The Hard Stuff)

_"This is where 50% of developers give up. Don't be that developer."_

You'll use `@dnd-kit` because it's the most modern, accessible, and flexible DnD library.

#### Tasks

- [ ] **Set Up DnD Context**

  ```tsx
  // src/features/board/BoardView.tsx
  import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragStartEvent,
    type DragEndEvent,
    type DragOverEvent,
  } from "@dnd-kit/core";
  import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

  export function BoardView() {
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 5, // 5px movement required to start drag
        },
      }),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      }),
    );

    const handleDragStart = (event: DragStartEvent) => {
      const { active } = event;
      const task = findTaskById(active.id as TaskId);
      setActiveTask(task);
    };

    const handleDragOver = (event: DragOverEvent) => {
      // Handle moving between columns
      const { active, over } = event;
      if (!over) return;

      const activeId = active.id as TaskId;
      const overId = over.id;

      // Find which columns these belong to
      const activeColumn = findColumnByTaskId(activeId);
      const overColumn =
        findColumnById(overId as ColumnId) ||
        findColumnByTaskId(overId as TaskId);

      if (activeColumn && overColumn && activeColumn.id !== overColumn.id) {
        moveTaskToColumn(activeId, activeColumn.id, overColumn.id);
      }
    };

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveTask(null);

      if (!over || active.id === over.id) return;

      // Reorder within column
      reorderTask(active.id as TaskId, over.id as TaskId);
    };

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto p-4">
          {columnOrder.map((columnId) => (
            <Column key={columnId} column={columns[columnId]} />
          ))}
        </div>

        {/* The floating drag preview */}
        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    );
  }
  ```

- [ ] **Make Columns Sortable**

  ```tsx
  // src/components/board/Column.tsx
  import { useDroppable } from "@dnd-kit/core";
  import {
    SortableContext,
    verticalListSortingStrategy,
  } from "@dnd-kit/sortable";

  interface ColumnProps {
    column: Column;
  }

  export function Column({ column }: ColumnProps) {
    const { setNodeRef, isOver } = useDroppable({
      id: column.id,
    });

    return (
      <div
        ref={setNodeRef}
        className={clsx(
          "w-72 flex-shrink-0 rounded-lg bg-gray-100 p-2",
          isOver && "ring-2 ring-blue-500",
        )}
      >
        <h2 className="mb-2 font-bold">{column.title}</h2>

        <SortableContext
          items={column.taskIds}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {column.taskIds.map((taskId) => (
              <SortableTaskCard key={taskId} taskId={taskId} />
            ))}
          </div>
        </SortableContext>

        <AddTaskButton columnId={column.id} />
      </div>
    );
  }
  ```

- [ ] **Make Tasks Draggable**

  ```tsx
  // src/components/board/SortableTaskCard.tsx
  import { useSortable } from "@dnd-kit/sortable";
  import { CSS } from "@dnd-kit/utilities";

  export function SortableTaskCard({ taskId }: { taskId: TaskId }) {
    const task = useBoardStore((state) => state.tasks[taskId]);

    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: taskId });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1,
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <TaskCard task={task} />
      </div>
    );
  }
  ```

#### 📚 Concept Application: Day 7 (useEffect Cleanup)

DnD libraries often need cleanup! If you add event listeners, remove them:

```typescript
useEffect(() => {
  // Subscribe to keyboard shortcuts for DnD
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isDragging) {
      cancelDrag();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  // CLEANUP! (Day 7)
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [isDragging]);
```

#### Deliverables

- [ ] Tasks can be reordered within a column
- [ ] Tasks can be moved between columns
- [ ] Visual feedback during drag (overlay, highlighting)
- [ ] Keyboard navigation works (accessibility!)

---

### ⚡ Day 14: Polish & Performance

_"The difference between amateur and professional is polish."_

#### Tasks

- [ ] **Implement Debounced Auto-Save**

  Apply your Day 1 debounce learning!

  ```typescript
  // src/hooks/useDebounce.ts
  import { useEffect, useRef } from 'react';

  export function useDebouncedCallback<T extends (...args: unknown[]) => void>(
    callback: T,
    delay: number
  ) {
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  // Usage in TaskCard for inline editing
  function TaskCard({ task }: { task: Task }) {
    const updateTask = useBoardStore((state) => state.updateTask);

    // Debounce saves while user is typing
    const debouncedSave = useDebouncedCallback((content: string) => {
      updateTask(task.id, { content });
    }, 500);

    return (
      <AutoTextarea
        value={task.content}
        onChange={(e) => debouncedSave(e.target.value)}
      />
    );
  }
  ```

- [ ] **Implement Optimistic Updates with Rollback**

  Apply your Day 3 retry pattern!

  ```typescript
  // src/hooks/useOptimisticUpdate.ts
  import { useState, useCallback } from "react";

  interface UseOptimisticUpdateOptions<T> {
    onMutate: () => T; // Optimistic update
    onSuccess?: () => void;
    onError: (snapshot: T) => void; // Rollback
  }

  export function useOptimisticUpdate<T>(
    mutationFn: () => Promise<void>,
    options: UseOptimisticUpdateOptions<T>,
  ) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = useCallback(async () => {
      setIsLoading(true);
      setError(null);

      // Take a snapshot before mutation
      const snapshot = options.onMutate();

      try {
        await mutationFn();
        options.onSuccess?.();
      } catch (e) {
        // ROLLBACK! Restore the snapshot
        options.onError(snapshot);
        setError(e instanceof Error ? e : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    }, [mutationFn, options]);

    return { mutate, isLoading, error };
  }
  ```

- [ ] **Add Framer Motion Animations**

  ```tsx
  import { AnimatePresence, motion, Reorder } from "framer-motion";

  // Animate task cards when they move
  <motion.div
    layout
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.2 }}
  >
    <TaskCard task={task} />
  </motion.div>;
  ```

- [ ] **Implement useMemo for Expensive Computations**

  Apply your Day 8 learning!

  ```typescript
  // Memoize column task lookup
  const columnTasks = useMemo(
    () => column.taskIds.map((id) => tasks[id]).filter(Boolean),
    [column.taskIds, tasks],
  );

  // Memoize search/filter results
  const filteredTasks = useMemo(() => {
    if (!searchQuery) return tasks;
    return Object.values(tasks).filter((task) =>
      task.content.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [tasks, searchQuery]);
  ```

- [ ] **Add Dark Mode**

  ```typescript
  // src/hooks/useDarkMode.ts
  export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
      // Check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
      // Listen for system preference changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return { isDark, toggle: () => setIsDark(!isDark) };
  }
  ```

#### 📚 Concept Application: Day 3 (AsyncQueue)

If you're syncing to a backend API, rate-limit your requests:

```typescript
// Use your AsyncQueue from Day 3 to limit concurrent saves
const saveQueue = new AsyncQueue(2); // Max 2 concurrent saves

const saveTask = async (task: Task) => {
  await saveQueue.add(() => api.updateTask(task));
};
```

#### 📚 Concept Application: Day 8 (useMemo/useCallback)

**WARNING**: Don't over-memoize! Only use `useMemo` when:

1. The computation is actually expensive (array mapping over 100+ items)
2. The value is passed to memoized child components

```typescript
// ❌ DON'T: Memoizing simple operations
const doubledCount = useMemo(() => count * 2, [count]);

// ✅ DO: Memoizing expensive filtering
const filteredItems = useMemo(
  () => items.filter((item) => complexFilterLogic(item)),
  [items],
);
```

#### Deliverables

- [ ] Auto-save debounced (no rapid API calls)
- [ ] Optimistic updates with rollback on error
- [ ] Smooth animations for all movement
- [ ] Dark mode with system preference detection
- [ ] Performance profiled with React DevTools

---

### 🚀 Day 15: Deployment & Documentation

_"If it's not deployed, it doesn't exist."_

#### Tasks

- [ ] **Pre-Deployment Checklist**

  ```bash
  # Run type check
  npm run typecheck

  # Run linter
  npm run lint

  # Build for production
  npm run build

  # Preview the build locally
  npm run preview
  ```

- [ ] **Deploy to Vercel**

  ```bash
  npm i -g vercel
  vercel
  # Follow the prompts
  ```

  Or use the Vercel Dashboard for GitHub integration.

- [ ] **Write the README Case Study**

  Your README should explain your architectural decisions:

  ```markdown
  # Kanban Board

  A Trello-inspired project management tool built to demonstrate mastery of
  modern frontend concepts.

  ## 🚀 Live Demo

  [https://your-kanban.vercel.app](https://your-kanban.vercel.app)

  ## 🏗️ Architecture Decisions

  ### Why Zustand over Redux?

  [Explain your reasoning]

  ### State Normalization

  [Explain why tasks/columns are normalized]

  ### Undo/Redo Implementation

  [Explain your deep clone approach]

  ## 🧪 Concepts Applied

  | Concept           | Where It's Used         |
  | ----------------- | ----------------------- |
  | Debounce          | Auto-save in TaskCard   |
  | Deep Clone        | Undo/Redo snapshots     |
  | Type Guards       | localStorage validation |
  | useEffect Cleanup | DnD keyboard listeners  |
  | useMemo           | Filtered task lists     |

  ## 📚 What I Learned

  [Reflection on the build process]
  ```

- [ ] **Set Up Basic CI (Bonus)**

  ```yaml
  # .github/workflows/ci.yml
  name: CI
  on: [push, pull_request]

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        - run: npm run typecheck
        - run: npm run lint
        - run: npm run build
  ```

#### Deliverables

- [ ] Production build succeeds with no errors
- [ ] App deployed to Vercel/Netlify
- [ ] README includes architecture explanation
- [ ] (Bonus) CI pipeline passes

---

## 🧱 Detailed Specifications

### Data Structure Reference

```typescript
// Branded types for compile-time safety
type TaskId = string & { readonly brand: unique symbol };
type ColumnId = string & { readonly brand: unique symbol };

interface Task {
  id: TaskId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  labels?: string[];
  dueDate?: Date;
}

interface Column {
  id: ColumnId;
  title: string;
  taskIds: TaskId[]; // Order matters!
}

interface BoardState {
  tasks: Record<TaskId, Task>; // Normalized
  columns: Record<ColumnId, Column>; // Normalized
  columnOrder: ColumnId[]; // Display order
}
```

### Functional Requirements

| Feature               | Requirement                                    | Concept Applied                    |
| --------------------- | ---------------------------------------------- | ---------------------------------- |
| **Create Task**       | Click "Add Task" → Focus input → Enter to save | useState, controlled inputs        |
| **Inline Edit**       | Click task → Editable textarea → Auto-save     | Debounce (Day 1)                   |
| **Delete Task**       | Hover → Show trash icon → Confirm delete       | Optimistic UI (Day 3)              |
| **Drag & Drop**       | Reorder within column                          | DnD library                        |
| **Cross-Column Move** | Drag task to different column                  | State normalization                |
| **Undo/Redo**         | Ctrl+Z / Ctrl+Shift+Z                          | Deep Clone (Day 2)                 |
| **Persist State**     | Refresh → State preserved                      | localStorage + Type Guards (Day 4) |
| **Search/Filter**     | Filter tasks by content                        | useMemo (Day 8)                    |

### Visual Requirements

| Requirement         | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| **Drag Overlay**    | When dragging, show a semi-transparent copy that follows cursor with slight rotation |
| **Drop Indicators** | Column highlights when valid drop target                                             |
| **Responsive**      | Mobile: Horizontally scrollable columns with snap-scroll                             |
| **Dark Mode**       | Respect system `prefers-color-scheme`                                                |
| **Animations**      | Smooth transitions for add/remove/move using Framer Motion                           |
| **Loading States**  | Skeleton loaders or spinners during async operations                                 |

---

## 🏆 Bonus Challenges (For Overachievers)

These are **not required** but will seriously impress:

### 1. Implement Column Reordering

Drag entire columns to reorder them.

### 2. Add Labels System

Tasks can have colored labels. Filter by label.

### 3. Implement Real-Time Sync

Use Firebase or Supabase to sync between browser tabs.

### 4. Add Due Dates

Tasks can have due dates. Sort by due date. Show overdue indicator.

### 5. Keyboard-Only Navigation

Full accessibility: Tab through cards, Enter to edit, Arrow keys to move.

### 6. Authentication (Day 9 Application)

```typescript
// Apply your JWT/CSRF learning
interface AuthState {
  user: User | null;
  token: string | null;
}

// Protect the board - only logged-in users can access
// Role-based access - viewers can't delete
```

---

## 🔍 Self-Review Checklist

Before submitting your project, verify:

### TypeScript

- [ ] No `any` types (except in rare, documented cases)
- [ ] Strict mode enabled
- [ ] All functions have return types

### React Patterns

- [ ] No direct DOM manipulation
- [ ] useEffect has cleanup where needed
- [ ] useMemo/useCallback used appropriately (not everywhere!)
- [ ] Proper key props on lists

### State Management

- [ ] State is normalized (no nested updates)
- [ ] Undo/Redo works correctly
- [ ] No stale closure bugs

### Accessibility

- [ ] All interactive elements are keyboard accessible
- [ ] Focus management is logical
- [ ] Color is not the only differentiator

### Performance

- [ ] React DevTools shows minimal re-renders
- [ ] No memory leaks from uncleared intervals/listeners
- [ ] Bundle size is reasonable (< 500KB gzipped)

---

## 🌐 Deployment Guide (Free Tier)

Your project isn't complete until it's **live on the internet**. Here are step-by-step guides for the most popular free hosting platforms.

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?** Built by the Next.js team, optimized for React, instant deploys, generous free tier.

#### Step-by-Step:

1. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create my-kanban-board --public --source=. --push
   # Or use: git remote add origin <your-repo-url> && git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up with GitHub
   - Click **"Add New..." → "Project"**
   - Import your `my-kanban-board` repository
   - Vercel auto-detects Vite settings—just click **"Deploy"**

3. **Get your live URL**
   - Vercel gives you: `https://my-kanban-board.vercel.app`
   - Every push to `main` auto-deploys! ✨

#### Environment Variables (if needed):

```bash
# In Vercel Dashboard → Settings → Environment Variables
VITE_API_URL=https://your-api.com
```

---

### Option 2: Netlify

**Why Netlify?** Great UI, easy rollbacks, form handling, generous free tier.

#### Step-by-Step:

1. **Push code to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up with GitHub
   - Click **"Add new site" → "Import an existing project"**
   - Select your repository

3. **Configure build settings**

   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy!**
   - Netlify gives you: `https://my-kanban-board.netlify.app`
   - You can add a custom domain for free

---

### Option 3: GitHub Pages

**Why GitHub Pages?** No extra accounts needed, directly from your repo.

#### Step-by-Step:

1. **Install gh-pages**

   ```bash
   npm install -D gh-pages
   ```

2. **Update `vite.config.ts`**

   ```typescript
   export default defineConfig({
     base: "/my-kanban-board/", // Your repo name
     plugins: [react()],
   });
   ```

3. **Add deploy script to `package.json`**

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repo **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
   - Your URL: `https://yourusername.github.io/my-kanban-board/`

---

### Option 4: Railway (If you need a backend later)

**Why Railway?** Free tier includes databases, easy backend deployment.

#### Step-by-Step:

1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Click **"New Project" → "Deploy from GitHub repo"**
3. Select your repository
4. Railway auto-detects and deploys
5. Your URL: `https://my-kanban-board.up.railway.app`

---

### Sharing Your Project

Once deployed, you have a **live URL** you can share anywhere:

- 📧 **Email**: Include in job applications
- 💼 **LinkedIn**: Add to Featured section
- 📝 **Resume**: Link under Projects
- 🐦 **Twitter/X**: Share your build journey
- 💬 **Discord**: Post in #share-your-work channels

#### Pro Tips:

1. **Custom Domain** (Optional): Buy a cheap domain (~$10/year) and point it to your deployment for extra professionalism

2. **Add Open Graph Tags** for nice social previews:

   ```html
   <!-- In index.html -->
   <meta property="og:title" content="Kanban Board - by Your Name" />
   <meta
     property="og:description"
     content="A Trello-inspired project management tool"
   />
   <meta property="og:image" content="https://your-domain.com/preview.png" />
   ```

3. **Take a Screenshot** of your deployed app and add it to your README

---

### Free Tier Limits (You probably won't hit these)

| Platform         | Bandwidth       | Builds         | Sites      |
| ---------------- | --------------- | -------------- | ---------- |
| **Vercel**       | 100GB/month     | 6000 min/month | Unlimited  |
| **Netlify**      | 100GB/month     | 300 min/month  | Unlimited  |
| **GitHub Pages** | 100GB/month     | Unlimited      | 1 per repo |
| **Railway**      | $5 credit/month | —              | 3 projects |

---

## 📝 Reflection Questions

After completing the project, answer these in your README:

1. **What was the hardest part?** (Most say Drag & Drop)
2. **What would you do differently?** (Architecture decisions)
3. **What concept "clicked" during the build?** (Aha moments)
4. **What would you add with more time?** (Future features)

---

**Good luck, and happy building! 🎉**

_Remember: A finished, deployed project speaks louder than 100 half-finished repos._
