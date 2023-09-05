import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ImageProps = {
    image: string | null | undefined
}
export default function AvatarUser({ image }: ImageProps) {
    return (
        <Avatar>
            <AvatarImage src={image ? image : 'https://github.com/shadcn.png'} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}