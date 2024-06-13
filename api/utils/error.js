export const errorHandler= (statusCode,message)=>{
    const error=new Error();
    errpr.statusCode=statusCode;
    error.message=message;
    return error;
}