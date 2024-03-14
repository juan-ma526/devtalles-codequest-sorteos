import jwt from 'jsonwebtoken';

export const jwtAdapter={

    generateToken:async(payload,duration="2h",jwt_seed=process.env.TOKEN_SECRET)=>{

        console.log(payload);
        return new Promise((resolve,reject) => {
            jwt.sign(`${payload}`, jwt_seed ,(err, token) => {
              
              if ( err ) return reject(err);
              resolve(token)
      
            });
          })
    },

    validateToken:(token)=>{

      return new Promise( (resolve) => {

        jwt.verify( token, jwt_seed=process.env.TOKEN_SECRET, (err, decoded) => {
  
          if( err ) return resolve(null);
  
          resolve( decoded);
  
        });
      })
      
    }
}