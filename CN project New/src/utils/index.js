export * from './constants';

export const setItemLocalStorage = ( key, value) =>{
     if(!key || !value){
       return console.log('got the value from ls');
     }
     const valueToStore = typeof value != 'string' ? JSON.stringify(value) : value
     
     return localStorage.setItem(key, valueToStore)
}

export const getItemLocalStorage = (key) =>{
  if(!key){
    return console.log('can not store in ls');
  }
  localStorage.getItem(key)
}

export const removeItemFromLocalStorage = ( key) =>{
  if(!key){
    return console.log('can not store in ls');
  }
  localStorage.removeItem(key)
}

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
};