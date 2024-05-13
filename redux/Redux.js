console.log("Basic Redux")

let RXstate = {
    post : 0,
    name : "Hello",
    age : 22
}

function Reducer (state,action) {
    if(action.type === "ADD"){
        return {...state,post : state.post + 1}
    }else if(action.type === "DDD"){
        return {...state,post : state.post - 1}
    }else if(action.type === "DDDIN"){
        return {...state,post : state.post + action.payload}
    }
    return state
}

console.log(RXstate);
RXstate = Reducer(RXstate,{type:"ADD"})
console.log(RXstate);
RXstate = Reducer(RXstate,{type:"ADD"})
console.log(RXstate);
RXstate = Reducer(RXstate,{type:"ADD"})
console.log(RXstate);
RXstate = Reducer(RXstate,{type:"ADD"})
console.log(RXstate);
RXstate = Reducer(RXstate,{type:"DDDIN",payload: 10})
console.log(RXstate);
RXstate = Reducer(RXstate,{type:"DDDIN",payload: 1})
console.log(RXstate);
