import { Request, Response } from "express";
export const postSementicSearch = async (req: Request, res: Response) =>{
  const{input} = req.body
  // console.log( input);
  const response = await fetch('http://localhost:8000/search', {
    method : "POST",
    headers :{
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({text : input})
  })
  const data = await response.json();
  console.log(data);
  res.status(200).json({mes :"connected"})
}
