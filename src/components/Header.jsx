const Header = ({ handleOpenModal }) => {
    return (
        <header className="py-12 grid place-items-center gap-4">
            <h1 className="text-[#8EFF8B] text-xl sm:text-2xl ">
                List of users
            </h1>
            <button
                onClick={handleOpenModal}
                className="bg-[#CBFFDA] w-2/3 text-[#302F2F] p-1.5 rounded hover:bg-green-300 transition-colors sm:w-[300px]"
            >
                Create new user
            </button>
        </header>
    );
};
export default Header;
