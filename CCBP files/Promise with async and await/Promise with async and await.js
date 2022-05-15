const findItemAndCategory = ()=> {
    return new Promise((resolve,reject)=>{
        const martObj = mart.find((eachCategory)=> eachCategory.category===categoryOfItem);
        if(martObj !== undefined){
            const isItemFound = martObj.items.includes(item);
            if(isItemFound){
                resolve("Item Found");
            }else{
                reject("Item Not Found");
            }
        }else{
            reject("Category Not Found");
        }
    });
};
const myPromise = async()=>{
    try{
        const findItem = await findItemAndCategory();
        console.log(findItem);
    }catch(error){
        console.log(error);
    }
};
myPromise();