export class StorageError extends Error {
  constructor(string) {
    super(string);
    this.name = 'StorageError';
  }
}
