let is_ok = true;
let datos = (task) =>{
    return new Promise((resolve, reject) => {
        if(is_ok){
            setTimeout(()=>{
                resolve(task)
            }, 2000);
        }else{
            reject("error")
        }
    });
}

export default datos;