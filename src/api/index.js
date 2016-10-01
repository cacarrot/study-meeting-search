//API
import $ from 'jquery';

//const
//利用：https://api.atnd.org/
//https://api.atnd.org/events/?format=jsonp&ymd=20160930&keyword=
const request_ATND = (condition) => {
    return {
        url: 'https://api.atnd.org/events',
        type: 'GET',
        data: {
            format: 'jsonp',
            ymd: condition.date,
            keyword: condition.keyword
        },
        dataType: "jsonp"
    };
};

//利用：https://connpass.com/about/api/
//https://connpass.com/api/v1/event/?callback=&format=jsonp&ymd=20160930&keyword=
const request_CONNPASS = (condition) => {
    return {
        url: 'https://connpass.com/api/v1/event/',
        type: 'GET',
        data: {
            format: 'json',
            ymd: condition.date,
            keyword: condition.keyword
        },
        dataType: "jsonp"
    }
};

//public
export function fetchEvents(condition, callback) {
    const requestList = [
        request_ATND(condition),
        request_CONNPASS(condition)
    ];

    const jqXHRList = [];

    for (let i = 0; i < requestList.length; i++) {
        jqXHRList.push($.ajax({
            url: requestList[i].url,
            type: requestList[i].type,
            data: requestList[i].data,
            dataType: requestList[i].dataType
        }));
    }

    const response = {
        atnd: [],
        connpass: []
    };

    $.when.apply($, jqXHRList)
        .done(function () {
            Array.prototype.push.apply(response.atnd, arguments[0][0].events);
            Array.prototype.push.apply(response.connpass, arguments[1][0].events);
            callback(response);
        })
        .fail(function (ex) {
            alert("Ajax通信に失敗しました");
            console.log(ex);
        });
}