export function korDate() {
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const korNow = new Date(utcNow + koreaTimeDiff);

    return korNow;
}

export function timeFormatter(date: Date) {
    const year = date.getFullYear().toString();
    const month = addZeroString(date.getMonth() + 1);
    const day = addZeroString(date.getDate());
    const hour = addZeroString(date.getHours());
    const minute = addZeroString(date.getMinutes());
    const second = addZeroString(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

function addZeroString(value: number) {
    
    if (value < 10) {
        return "0" + value;
    }

    return value;
}