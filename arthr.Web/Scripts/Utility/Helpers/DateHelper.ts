import * as moment from 'moment';

const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

const dateConverter = (date: Date | moment.Moment | string, displayOnFail?: string) => {

    const dateToMoment = (targetDate: Date | moment.Moment | string): moment.Moment => {

        if (targetDate instanceof Date) {
            return moment(targetDate);
        }

        if (typeof targetDate === 'string') {
            return moment(targetDate);
        }

        return targetDate as moment.Moment;
    };

    const dateAsMoment = dateToMoment(date);

    const dateIsInvalid = !dateAsMoment || !dateAsMoment.isValid();
    const displayOnFailValue = displayOnFail || '';

    return {
        to12HrTimeDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('hh:mm a');
        },
        to24HrTimeDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('HH:mm');
        },
        toDayOfWeekDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('dddd');
        },
        toIsoFormatDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('YYYY-MM-DD');
        },
        toJsDate: (): Date => {

            if (dateIsInvalid) {
                return null;
            }

            return dateAsMoment.toDate();
        },
        toLongDateAnd24HrTimeDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('DD/MM/YYYY dddd HH:mm');
        },
        toMomentDate: (): moment.Moment => {

            if (dateIsInvalid) {
                return null;
            }

            return dateAsMoment;
        },
        toMonthNameDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('MMMM');
        },
        toShortMonthYearDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('MMM YYYY');
        },
        toStandardDateAnd12HrTimeDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('DD/MM/YYYY hh:mm a');
        },
        toStandardDateAnd24HrTimeDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('DD/MM/YYYY HH:mm');
        },
        toStandardDateDisplay: (): string => {

            if (dateIsInvalid) {
                return displayOnFailValue;
            }

            return dateAsMoment.format('DD/MM/YYYY');
        }
    };
};

const stringToDate = (value: string | Date): Date => {

    if (typeof value === "string") {
        const newDate = new Date(value);

        if (newDate.getFullYear() === 1) {

            return null;
        }

        return new Date(value);
    }

    return value;
};

const dateHelper = {
    dateConverter,
    stringToDate
};

export {
    dateHelper as DateHelper
}
