export interface ApiResponse<T> {
  successCodes: number[];
  message: string;
  statusCode: number;
  exceptions: unknown;
  content: T[];
}
