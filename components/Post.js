import Image from "next/image";

function Post(props) {
    const { name, message, email, timestamp, image, postImage } = props;
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-2xl shadow-md">
                <div className="flex items-center space-x-2">
                    <Image
                        className="rounded-full"
                        height={40}
                        width={40}
                        src={image}
                        alt="Profile Image"
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>
                <p className="pt-4">{message}</p>
                {postImage && (
                    <div className="relative mt-2 h-50 md:h-80">
                        <Image
                            className="rounded-t-xl"
                            src={postImage}
                            objectFit="cover"
                            layout="fill"
                            alt="Post Image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Post;
