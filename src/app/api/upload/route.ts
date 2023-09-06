import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from 'path'
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.API_CLOUD_NAME, 
  api_key: process.env.API_CLOUD_KEY, 
  api_secret: process.env.API_CLOUD_KEY_SECRET 
});

export async function POST (request: any) {
    const data = await request.formData()
    const file = data.get('file')

    if(!file) {
       return NextResponse.json('no se ha subido imagen aun', {status: 400})
    } 

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

   const result = await new Promise ((resolve, reject) => {

     cloudinary.uploader.upload_stream({}, (err, result) => {

      if (err) {
        reject(err)
      }
      resolve(result)
     }).end(buffer)
   })

   console.log(result)
    return NextResponse.json({
        message: 'imagen subida',
        status: 200
    })
}