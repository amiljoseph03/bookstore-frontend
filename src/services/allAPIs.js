import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// Function to call API endpoints
//1 Register User 
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

// login 
export const loginUserAPI = async (reqBody) => {
  return await commonAPI('POST', `${serverURL}/api/login`, reqBody, {});
};