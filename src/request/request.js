import $ from 'jquery';

const getJson = (url = '', options = {}) => {
    const {
        type = 'GET'
    } = options;

    const promise = new Promise((res, rej) => {
        $.ajax({
            url,
            type,
            success: (data = {}) => {
                if (data.success) {
                res(data);
                } else {
                rej(data);
                }
            },
            error: (err = {}) => {
                rej(err);
            }
        })  
    })
    return promise;
}

export default getJson;