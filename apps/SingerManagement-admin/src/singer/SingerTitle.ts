import { Singer as TSinger } from "../api/singer/Singer";

export const SINGER_TITLE_FIELD = "name";

export const SingerTitle = (record: TSinger): string => {
  return record.name?.toString() || String(record.id);
};
