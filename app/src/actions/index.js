import moment from 'moment';

moment.locale("fr");

/**
 * postMessage action
 *
 * @param {String} - Author name
 * @param {String} - Message text
 * @return {Object} - Action
 */
export const postMessage = (author, text) => {
    return {
        type: 'POST_MESSAGE',
        message: {author, text, date: moment().format("D MMMM YYYY HH:mm")}
    }
}
