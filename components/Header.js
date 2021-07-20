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

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md flex-shrink">
            {/* Left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    height={40}
                    width={40}
                />
                <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        className="flex item-center ml-2 bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
        </div>
    );
}

export default Header;