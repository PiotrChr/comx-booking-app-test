export class ProviderError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RdsProviderErrror';
    this.message = message || 'DB Pool creation failed';
  }
}
