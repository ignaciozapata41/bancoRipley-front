
export interface Avances{
    monto: number;
    numCuotas: number;
    cae: number;
    ctc: number;
}

export class User{
    rut: string;
    name: string;
    email: string;
    password: string;

    constructor(rut: string,name: string,email: string,password: string, ) {
        this.rut = rut;
        this.name = name;
        this.email = email;
        this.password = password;
      }    
}

export interface httpResponse{
    msg: string;
    data: any;
}

export interface menuOptions{
    icon: string;
    name: string;
    title: String;
}

export interface BankAccount{
    account_number: string;
    rut: string;
    amount: number;
    type: number;
}

export interface BankAccHistory{
    transferType: string;
    amount: number;
    origin: string;
    destination: string;
    createdAt: Date;
    outMovement: boolean;
}
