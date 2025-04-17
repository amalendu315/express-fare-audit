import { FareAudit } from "../../models/fare-audit-model";

type Subscriber = (log: FareAudit) => Promise<void>;

class EnrichmentQueue {
  private subscribers: Subscriber[] = [];

  // Call this to push a new log to the queue
  write(log: FareAudit): void {
    for (const subscriber of this.subscribers) {
      setTimeout(() => {
        subscriber(log).catch((err) =>
          console.error(`[Queue] Error processing log ${log.id}:`, err)
        );
      }, 0);
    }
  }

  // Call this once in app start to hook the queue to a worker
  subscribe(callback: Subscriber) {
    this.subscribers.push(callback);
  }
}

export const enrichmentQueue = new EnrichmentQueue();
