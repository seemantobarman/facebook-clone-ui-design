import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

import { signOut, useSession } from "next-auth/client";

function Header() {
    const [session] = useSession();
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    height={40}
                    width={40}
                    layout="fixed"
                />
                <div className="flex hidden md:inline-flex ml-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        className="flex ml-2 item-center bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 sm:space-x-2">
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image
                    className="rounded-full"
                    onClick={signOut}
                    src={session.user.image}
                    height={40}
                    width={40}
                    layout="fixed"
                />

                <p className="font-semibold pr-3 whitespace-nowrap hidden lg:inline-flex">
                    {session.user.name}
                </p>
                <ViewGridIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
}

export default Header;
