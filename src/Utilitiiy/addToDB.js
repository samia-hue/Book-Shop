const getStoreBook =() =>{
   const storedBookSTR = localStorage.getItem("readList")

   if(storedBookSTR){
    const storeBookData = JSON.parse(storedBookSTR)
    return storeBookData;
   }
   else{
    return [];
   }
}

const addToStoreDB = (id) =>{
    const storeBookData = getStoreBook();
    if(storeBookData.includes(id)){
        alert ("this id already exist")
    }
    else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList", data)
    }
}

export {addToStoreDB, getStoreBook};