import { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
    const [session, loading] = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (event) => {
        event.preventDefault();
        if (!inputRef.current.value) {
            return;
        }

        db.collection("posts")
            .add({
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then((doc) => {
                if (imageToPost) {
                    const uploadTask = storage
                        .ref(`posts/${doc.id}`)
                        .putString(imageToPost, "data_url");
                    setImageToPost(null);
                    uploadTask.on(
                        "state_changed",
                        null,
                        (error) => console.log(error),
                        () => {
                            storage
                                .ref(`posts/${doc.id}`)
                                .getDownloadURL()
                                .then((url) => {
                                    db.collection("posts").doc(doc.id).set(
                                        {
                                            postImage: url,
                                        },
                                        { merge: true }
                                    );
                                });
                        }
                    );
                }
            });

        inputRef.current.value = "";
    };

    const addImageToPost = (event) => {
        const reader = new FileReader();

        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    height={40}
                    width={40}
                    layout="fixed"
                    src={session.user.image}
                />
                <form className="flex flex-1">
                    <input
                        ref={inputRef}
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        type="text"
                        placeholder={`Whats On Your Mind, ${session.user.name}?`}
                    />
                    <button
                        onClick={sendPost}
                        className="hidden"
                        type="submit"
                    />
                </form>

                {imageToPost && (
                    <div
                        onClick={() => setImageToPost(null)}
                        className="felx flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
                    >
                        <img
                            src={imageToPost}
                            alt="Selected Image"
                            className="h-10 object-contain"
                        />
                        <p className="text-xs sm:text-sm text-red-500 text-center">
                            Remove
                        </p>
                    </div>
                )}
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Live Video
                    </p>
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Feeling/Activity
                    </p>
                </div>

                <div
                    className="inputIcon"
                    onClick={() => filePickerRef.current.click()}
                >
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Photo/Video
                    </p>
                    <input
                        hidden
                        ref={filePickerRef}
                        type="file"
                        onChange={addImageToPost}
                    />
                </div>
            </div>
        </div>
    );
}

export default InputBox;
