import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ImageProps = {
    image: string
}
export default function AvatarUser({ image }: ImageProps) {
    return (
        <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}