import axios from 'axios'


export const chat=async(req,res)=>{
    const {username}=req.body
    try{
        const r=await axios.put('https://api.chatengine.io/users/',
            {username:username,secret:username,first_name:username},
            {headers:{"private-key":process.env.CHAT_PRIVETE_KEY}}
        )
        return res.status(r.status).json(r.data)
    }catch(error){
        console.error("Error in chat:", error.response.data);
        return res.status(error.response.status).json({ message: "Server error" });
    }
}