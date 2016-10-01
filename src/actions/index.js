//actions
export const CHANGE_DATE = 'CHANGE_DATE';
export function changeDate(date) {
    return {
        type: CHANGE_DATE,
        date
    }
}

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export function changeKeyword(keyword) {
    return {
        type: CHANGE_KEYWORD,
        keyword
    }
}

export const GOT_EVENTS = 'GOT_EVENTS';
export function gotEvents(response) {
    return {
        type: GOT_EVENTS,
        response
    }
}
