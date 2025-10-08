const getInstalled = () => {
    const localInstalled = localStorage.getItem("installed") ;
    if(localInstalled){
        const allInstalled = JSON.parse(localInstalled) ;
        return allInstalled ;
    }else{
        return [] ;
    }
}

const setInstalled = (id) => {
    const allInstalled = getInstalled() ;
    if(allInstalled.includes(id)){
        alert("Alreasy exist") ;
    }else{
        allInstalled.push(id) ;
        const FinalInstalled = JSON.stringify(allInstalled) ;
        localStorage.setItem("installed",FinalInstalled) ;
        console.log(FinalInstalled) ;
    }
} 

const getInfo = (id) => {
    const allInstalled = getInstalled() ;
    if(allInstalled.includes(id)){
        return true ;
    }else{
        return false ;
    }
} 

const removedInstalled = (id) => {
    const allsaved = getInstalled() ;
    const update =  allsaved.filter(itm => itm !== id) ;
    localStorage.setItem("installed",JSON.stringify(update)) ;
    // console.log(update) ;
}

export {getInstalled,setInstalled,getInfo,removedInstalled} ;