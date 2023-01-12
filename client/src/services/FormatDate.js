export function formatDate(date) {
    const options = {
        day: "numeric",
        month: "long",
    };
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    return formatter.format(new Date(date));
}