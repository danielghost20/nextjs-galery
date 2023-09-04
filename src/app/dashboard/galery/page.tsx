import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/CloudinaryImage";

export default async function Galery() {
    try {
        const { resources } = await cloudinary.v2.api.resources();

        return (
            <section className="w-full min-h-screen gap-3 px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                {resources.map((image: any) => (
                    <div className="py-2" key={image.public_id}>
                        <CloudinaryImage URL={image.public_id} />
                    </div>
                ))}
            </section>
        );
    } catch (error) {
        console.log(error);
    }
}
