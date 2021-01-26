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

export const saveSessionData = (loginResponse: LoginResponse) => {

    localStorage.setItem('authData', JSON.stringify(loginResponse));

}