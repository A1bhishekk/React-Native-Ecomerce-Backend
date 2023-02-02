

export const getMyProfile=(req,res,next)=>{
    res.send({
        name: "Abhishek Sahani",
        email: "sahniak56@gmail.com"
    })
}