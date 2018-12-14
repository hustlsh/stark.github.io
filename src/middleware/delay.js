const delay = store => next => action =>{
    if(!action.delay){
        return next(action);
    }
    const timeId = setTimeout(()=>next(action), action.delay)
    return function cancel(){
        clearTimeout(timeId);
    }
}
export default delay;