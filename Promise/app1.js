const url3 ='chayakon/find.json'
const url1 = 'chayakon/find.json'

const consnect = true;
function  downloading1(url){
    return new Promise(function(resolve, reject){
        console.log(`Download ${url} `)
        setTimeout(()=>{
            if (consnect) {
                resolve(`download ${url} finished`)
            }else{
                reject(`error`);
            }
        },4000);
    })
};
downloading1(url3).then(function(result){
    console.log(result);
    downloading1(url1).then(function(result){
        console.log(result);
    })
})