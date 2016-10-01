import moment from 'moment';

export class DateUtil {
    static today(pattern = 'YYYYMMDD') {
        return moment(new Date()).format(pattern);
    }

    static format(date, pattern) {
        return moment(date).format(pattern);
    }
}