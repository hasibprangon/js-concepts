const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){

        resolve(1000)
    }
    else {

        reject('no data');  
    }
})
// console.log(getData + 'world');
getData
 .then(data => console.log(data + 15))
 .catch(err => console.error('ERR:', err))