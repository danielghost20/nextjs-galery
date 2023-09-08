import { NextResponse } from "next/server";
import {v2 as cloudinary, UploadApiResponse} from 'cloudinary';

          
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

   const result: any = await new Promise ((resolve, reject) => {
     cloudinary.uploader.upload_stream({}, (err, result) => {
      if (err) {
        reject(err)
      } else {
          resolve(result)
        }
     }).end(buffer)
   })

    return NextResponse.json({
        message: 'imagen subida',
        status: 200,
        url : result.secure_url 
    })
}