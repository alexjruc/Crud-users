const DeleteModal = ({ isDeleteModal, handleCloseDeleteModal, deleteUser }) => {
    return (
        <section
            className={`bg-white/70 fixed left-0 top-0 w-full min-h-screen grid justify-center items-center z-20 ${
                isDeleteModal ? "visible opacity-100" : "invisible opacity-0"
            }} `}
        >
            <div className="bg-[#3C3C3D] w-[280px] text-center grid p-5 rounded-[2rem] gap-8 sm:w-[400px] sm:p-12">
                <h3>Are you sure you want to delete this user?</h3>
                <div className="grid gap-1">
                    <button onClick={() => deleteUser()}
                        type="button"
                        className="bg-red-400 w-3/5 mx-auto p-1.5 rounded-md"
                    >
                        Yes, delete
                    </button>
                    <button onClick={handleCloseDeleteModal} type="button">
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};
export default DeleteModal;
