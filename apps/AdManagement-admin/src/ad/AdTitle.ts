import { Ad as TAd } from "../api/ad/Ad";

export const AD_TITLE_FIELD = "name";

export const AdTitle = (record: TAd): string => {
  return record.name?.toString() || String(record.id);
};
