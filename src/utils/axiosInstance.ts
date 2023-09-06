import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dbj1bkxjt/resources',
    headers: {
        Authorization: `Basic ${Buffer.from('318471331893294:j49Pi5_bTGWMwDiHNfZspJV3CtY@dbj1bkxjt').toString('base64')}`
    }
})