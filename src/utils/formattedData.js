export const formatDate = (dateInput) => {
  // Memastikan dateInput adalah objek Date
  const date = new Date(dateInput);

  // Menggunakan toLocaleDateString dengan opsi yang diinginkan
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatDateWithoutDay = (dateInput) => {
  // Memastikan dateInput adalah objek Date
  const date = new Date(dateInput);

  // Menggunakan toLocaleDateString dengan opsi yang diinginkan
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
