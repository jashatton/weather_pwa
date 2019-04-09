export function logError(message, error) {
  console.log(`${message} - error: ${error ? error.message : "error was supplied"}`, error);
}
