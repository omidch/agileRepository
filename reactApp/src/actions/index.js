export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";


export function logIn(to) {
    return{
        type: LOG_IN,
        payload: to
    }
}

export function logOut(){
    return {
        type: LOG_OUT,
        payload: ""
    }
}