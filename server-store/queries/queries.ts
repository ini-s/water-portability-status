export const getPageFromQuery = (page?: string | string[]) => {
  if (!page) return 1;

  if (Array.isArray(page)) {
    return Number(page[0]);
  }

  return Number(page);
};

export const getLocationFromQuery = (location?: string | string[]) => {
  if (!location) return "iwaya";

  if (Array.isArray(location)) {
    return location[0];
  }

  return location;
};

export const getStartDateFromQuery = (start_date?: string | string[]) => {
  if (!start_date) return undefined;

  if (Array.isArray(start_date)) {
    return start_date[0];
  }

  return start_date;
};

export const getEndDateFromQuery = (end_date?: string | string[]) => {
  if (!end_date) return undefined;

  if (Array.isArray(end_date)) {
    return end_date[0];
  }

  return end_date;
};

export const getSizeFromQuery = (size?: string | string[]) => {
  if (!size) return 10;

  if (Array.isArray(size)) {
    return Number(size[0]);
  }

  return Number(size);
};
