function HeaderIcon(props) {
    const { Icon, active } = props;
    return (
        <div className="group cursor-pointer md:px-10 h-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl md:active:border-b-2 md:active:border-blue-500">
            <Icon
                className={`h-5 text-gray-500 md:h-7 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
                    active && "text-blue-500"
                }`}
            />
        </div>
    );
}

export default HeaderIcon;
