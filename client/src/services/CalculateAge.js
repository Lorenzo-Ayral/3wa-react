function calculateAge(age) {
    const birthdate = new Date(age);
    const ageDifMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default calculateAge;