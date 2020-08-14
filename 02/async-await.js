const myAsyncFun = async()=>{
    try{
        const result = await Promise.resolve('Async function');
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
myAsyncFun();