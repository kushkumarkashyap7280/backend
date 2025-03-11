const asyncHandler = (requestHandler)=>{
  (req, res, next) =>{
    promise.resolve(requestHandler(req, res, next))
    .catch((err)=>{ next(err); })
  }
}











// const asyncHandler =( fn) => async (req, res, next ) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     console.error(error);
//     res.status(error.code || 500).json({success : false, message: "Server Error" });
//   }
// } ;


export {asyncHandler};