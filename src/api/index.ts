import http from "./http";

interface Ilogin {
username: string,
password: string,
code: string,
captchaKey:string;
    
}

export const loginApi = (data: Ilogin) => {
    return http.post("/user/login", data);
}

export const menuApi = () => {
    return http.get("user/menus");
}