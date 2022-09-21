import bcryptjs  from "bcryptjs";

const encrypt = async () =>{
 const hash = await bcryptjs.hash(passwordPlain, 5);
 return hash;
};

const compare = async (passwordPlain, hashPassword) =>{
return await bcryptjs.compare(passwordPlain, hashPassword);
};

export const methods = {
    encrypt,
    compare
  } ;