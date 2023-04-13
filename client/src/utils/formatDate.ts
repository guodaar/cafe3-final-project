export const formatDate = (date: string): string => {
  const dateString = new Date(date);
  const formattedDate = dateString
    .toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Vilnius",
    })
    .replace(/\//g, "-");

  return formattedDate;
};
