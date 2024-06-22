import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "userId";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.userId?.toString() || String(record.id);
};
