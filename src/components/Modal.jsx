const Modal = ({ isShowModal, handleCloseModal, handleSubmit, register, submit, idUserUpdate}) => {
    

    return (
        <section
            className={`bg-white/60 fixed top-0 w-full min-h-screen grid justify-center items-center ${
                isShowModal ? "visible opacity-100" : "invisible opacity-0"
            }}`}
        >
            <form
                onSubmit={handleSubmit(submit)}
                action=""
                className="bg-[#3C3C3D] w-[min(100%,_280px)] px-10 py-6 rounded-2xl grid gap-3 sm:w-[450px]"
            >
                <h2 className="text-center text-white font-semibold uppercase">
                    {
                        idUserUpdate ? "Update user" : "New user"
                    }
                </h2>
                <div className="grid gap-1">
                    <label className="text-[#8EFF8B] text-sm" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 py-1"
                        autoComplete="off"
                        type="text"
                        name=""
                        id="name"
                        placeholder="Enter name"
                        {...register("first_name")}
                    />
                </div>
                <div className="grid gap-1">
                    <label
                        className="text-[#8EFF8B] text-sm"
                        htmlFor="last_name"
                    >
                        Last Name
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 py-1"
                        autoComplete="off"
                        type="text"
                        name=""
                        id="last_name"
                        placeholder="Enter last name"
                        {...register("last_name")}
                    />
                </div>
                <div className="grid gap-1">
                    <label className="text-[#8EFF8B] text-sm" htmlFor="email">
                        Email adress
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 py-1"
                        autoComplete="off"
                        type="email"
                        name=""
                        id="email"
                        placeholder="Enter email"
                        {...register("email")}
                    />
                </div>
                <div className="grid gap-1">
                    <label
                        className="text-[#8EFF8B] text-sm"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 py-1"
                        autoComplete="off"
                        type="password"
                        name=""
                        id="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                </div>
                <div className="grid gap-1">
                    <label
                        className="text-[#8EFF8B] text-sm"
                        htmlFor="birthday"
                    >
                        Birthday
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 py-1"
                        autoComplete="off"
                        type="date"
                        name=""
                        id="birthday"
                        placeholder="Enter name"
                        {...register("birthday")}
                    />
                </div>
                <div className="grid pt-4">
                    <button
                        className="bg-[#CBFFDA] text-[#302F2F] rounded-md py-1.5"
                        type="submit"
                    >
                        {
                            idUserUpdate ? "Save changes" : "Save user"
                        }
                    </button>
                    <button
                        onClick={handleCloseModal}
                        className="bg-[#3C3C3D] text-white rounded-md"
                        type="button"
                    >
                        cancel
                    </button>
                </div>
            </form>
        </section>
    );
};
export default Modal;
