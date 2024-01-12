export const maxTextLength = (maxLength, text) => {
    return  text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text;
}