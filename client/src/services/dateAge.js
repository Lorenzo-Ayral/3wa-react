export function formatDate(date) {
    const options = {
        day: "numeric",
        month: "long",
    };
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    return formatter.format(new Date(date));
}

export function calculateAge(age) {
    const birthdate = new Date(age);
    const ageDifMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default calculateAge;