/**
 * Error thrown for deterministic failures (client errors, malformed
 * responses) that should NOT be retried. Network errors and 429/5xx are
 * retried automatically by the client.
 */
export class AmbralError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AmbralError";
  }
}
