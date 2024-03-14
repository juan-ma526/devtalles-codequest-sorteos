import { compareSync, genSaltSync, hashSync } from "bcrypt";

export const bcryptAdapter={

    hash:(password)=>{
        const salt=genSaltSync();

        return hashSync(password,salt);
    },

    compare:(password,hashed)=>{
        return compareSync(password,hashed);
    }
}