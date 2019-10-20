import * as moment from 'moment';

export class UtilsService {

    constructor() { }

    public static convertDate(date: string, locale: string) {
        moment().locale(locale);
        let newDate = moment(date).format('MM/DD/YYYY');
        if (newDate === "Invalid date") {
            //Moment.js date
            //https://github.com/moment/moment/issues/1407
            newDate = UtilsService.formatInvalidDate(date);
        }
        return newDate;
    }
    
    private static formatInvalidDate(date) {        
        //Moment.js had problems with "desember", "mai" and "oktober"
        //Workaround for this months
        //return in format MM/DD/YYYY        
        const dictionary = new Map();
        dictionary.set("oktober", "10");
        dictionary.set("mai", "05");
        dictionary.set("desember", "12");

        let dateParts = date.split(".").join("").split(" ");
        let day = dateParts[0];
        let month = dateParts[1];
        let year = dateParts[2];
        if (day.length === 1) { 
            day = "0" + day;
        }

        month = dictionary.get(dateParts[1]);
        return `${month}/${day}/${year}`;
    }
}