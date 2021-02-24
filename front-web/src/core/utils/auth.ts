import jwtDecode from 'jwt-decode'
export const CLIENT_ID = 'dscatalog';
export const CLIENTE_SECRET = 'dscatalog123';

type LoginResponse = {

    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName:string; 
    id: number;

}

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN'

type AcessToken = {
    exp:number;
    user_name:string;
    authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {

    localStorage.setItem('authData', JSON.stringify(loginResponse));

}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') ?? '{}';

    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () =>{
    const sessionData = getSessionData();

    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AcessToken;
}

export const isTokenValid = () =>{
    const {exp} = getAccessTokenDecoded();

    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () =>{
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid
  //"authData tem que esta no localStorage"
  // access_token não pode estar espirado

}

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if(routeRoles.length === 0){
        return true;
    }
    const {authorities} = getAccessTokenDecoded();
    return routeRoles.some(role => authorities.includes(role));
}