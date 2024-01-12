export const getCurrentDateTime = () => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "numeric",
        minute: "numeric"
    });

    return formatter.format(new Date());
}

