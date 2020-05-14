export interface JwtResponse {
    user: {
        id: string,
        name: string,
        email: string,
        access_token: string,
        expires_in: string
    },
    provider: {
        id: string,
        name: string,
        owner: string,
        email:string,
        access_token:string,
        expires_in:string
    }
    menu: {
        id: string,
        item_name: string,
        
    }
}
