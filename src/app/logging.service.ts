
export class LoggingService {
  logAccountStatusChange(status: string) {
    console.log('A server status changed, new status: '  + status);
  }
}
