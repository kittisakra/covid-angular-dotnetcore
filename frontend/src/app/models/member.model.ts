export class Member {
    username: string;
    password: string;
    position: string;
}

export class RegisterResponse {
    message: string;
}

export class LoginResponse {
    message: string;
    token: string;
}