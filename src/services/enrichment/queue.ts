import { FareAudit } from "../../models/fare-audit-model";

type Subscriber = (log: FareAudit) => Promise<void>;

class EnrichmentQueue {
  private subscribers: Subscriber[] = [];

  // Call this to push a new log to the queue
  async write(log: FareAudit): Promise<void> {
    for (const subscriber of this.subscribers) {
      await subscriber(log);
    }
  }

  // Call this once in app start to hook the queue to a worker
  subscribe(callback: Subscriber) {
    this.subscribers.push(callback);
  }
}

export const enrichmentQueue = new EnrichmentQueue();
