/**
 * 1. DeepPartial
 * Make every property recursively optional.
 */
export type DeepPartial<T> = any; // TODO: Implement

/**
 * 2. EventBus
 * A type-safe event bus.
 * Generic T represents the Event Map: { 'login': { userId: string }, 'logout': void }
 */
export class EventBus<T extends Record<string, any>> {
  // Store listeners
  private listeners: any = {};

  on<K extends keyof T>(event: K, callback: (payload: T[K]) => void): void {
    // TODO: Implement
    throw new Error("Not implemented");
  }

  emit<K extends keyof T>(event: K, payload: T[K]): void {
    // TODO: Implement
    throw new Error("Not implemented");
  }
}

/**
 * 3. Type Guards
 * Implement a reliable check.
 */
export function isError(x: unknown): x is Error {
  // TODO: Implement
  throw new Error("Not implemented");
}
