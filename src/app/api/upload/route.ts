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

    // SAVE FILE
    const filePath = path.join(process.cwd(), 'public', file.name)
    await writeFile(filePath, buffer)

    const response = await cloudinary.uploader.upload(filePath)

    return NextResponse.json({
        message: 'imagen subida',
        status: 200,
        url: response.secure_url
    })
}