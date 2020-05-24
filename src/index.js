import getJson from './request/request';

console.dir(Promise)

getJson('one.json').then(res => console.log(res), rej => console.log(rej))
getJson('two.json').then(res => console.log(res), rej => console.log(rej))

getJson('one.json').then(res => {
    console.log(res);
    return getJson('three.json')
}).then(res => {
    console.log(res);
    return res;
}).then(res => console.log(res)).finally(() => console.log('finally'))

const request = [
    getJson('one.json'),
    getJson('two.json'),
    getJson('three.json')
];

Promise.all(request).then(res => console.log(1, res)).catch(err => console.log(2,err))
Promise.race(request).then(res => console.log(3, res)).catch(err => console.log(4,err));

const data = {
    a: 1
};

Promise.resolve(data).then(v => console.log(v));

Promise.reject(data).then(v => {}).catch(v => console.log('v.',v));

// Promise.allSettled(request).then(v => console.log(v)) // es2020
// Promise.any()
// Promise.try()