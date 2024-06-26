export class NodeInstanceError extends Error {
  fullInsIdsPath: string;
  nodeId: string;

  constructor(error: unknown, fullInsIdsPath: string, nodeId: string) {
    let errorMessage = "Unknown error";

    if (typeof error === "string") {
      errorMessage = error;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (error !== null && typeof error === "object") {
      errorMessage = JSON.stringify(error);
    } else {
      errorMessage = String(error);
    }

    super(`${errorMessage} (insId: ${fullInsIdsPath}, nodeId: ${nodeId})`);

    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.message = `${errorMessage} (insId: ${fullInsIdsPath}, nodeId: ${nodeId})`;

    // Capture the current stack trace
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack);

    this.fullInsIdsPath = fullInsIdsPath;
    this.nodeId = nodeId;
  }
}
