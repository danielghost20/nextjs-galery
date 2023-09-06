import cloudinary from 'cloudinary'
import CloudinaryImage from "@/components/CloudinaryImage";


export default async function Galery() {

    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .max_results(60)
        .execute()

    return (
        <section className="w-full min-h-screen gap-3 px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
            {result.resources.map((image: any) => (
                <div className="py-2" key={image.public_id}>
                    <CloudinaryImage URL={image.public_id} />
                </div>
            ))}
        </section>
    );
}
