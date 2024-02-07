export interface WindowSize{
    width:number;
    height: number;
}

export interface IUser{
    _id : string;
    email: string;
    fullName : string;
    answerOne : string;
    answerTwo : string;
    answerThree :string;
    
}

export interface LoginUserParams{
    email: string;
    password: string;
}