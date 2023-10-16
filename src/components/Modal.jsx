import { EMAIL_VALIDATIONS, LAST_NAME_VALIDATIONS, NAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations";

const Modal = ({
    isShowModal,
    handleCloseModal,
    handleSubmit,
    register,
    submit,
    idUserUpdate,
    errors,
}) => {
    return (
        <section
            className={`bg-white/80 fixed top-0 w-full min-h-screen grid justify-center items-center ${
                isShowModal ? "visible opacity-100" : "invisible opacity-0"
            }} z-[20]`}
        >
            <form
                onSubmit={handleSubmit(submit)}
                action=""
                className="bg-[#3C3C3D] w-[min(100%,_280px)] px-10 py-2 rounded-2xl grid gap-2 sm:py-6 sm:gap-2 sm:w-[450px]"
            >
                <h2 className="text-center text-white font-semibold uppercase">
                    {idUserUpdate ? "Update user" : "New user"}
                </h2>
                <div className="grid gap-1">
                    <label className="text-[#8EFF8B] text-sm" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 sm:py-1"
                        autoComplete="off"
                        type="text"
                        name=""
                        id="name"
                        placeholder="Enter name"
                        {...register("first_name", NAME_VALIDATIONS)}
                    />
                    {errors.first_name && (
                        <span className="text-xs text-red-500">
                            {errors.first_name.message}
                        </span>
                    )}
                </div>
                <div className="grid gap-1">
                    <label
                        className="text-[#8EFF8B] text-sm"
                        htmlFor="last_name"
                    >
                        Last Name
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 sm:py-1"
                        autoComplete="off"
                        type="text"
                        name=""
                        id="last_name"
                        placeholder="Enter last name"
                        {...register("last_name", LAST_NAME_VALIDATIONS)}
                    />
                    {errors.last_name && (
                        <span className="text-xs text-red-500">
                            {errors.last_name.message}
                        </span>
                    )}
                </div>
                <div className="grid gap-1">
                    <label className="text-[#8EFF8B] text-sm" htmlFor="email">
                        Email adress
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 sm:py-1"
                        autoComplete="off"
                        type="email"
                        name=""
                        id="email"
                        placeholder="Enter email"
                        {...register("email", EMAIL_VALIDATIONS)}
                    />
                    {errors.email && (
                        <span className="text-xs text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="grid gap-1">
                    <label
                        className="text-[#8EFF8B] text-sm"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 sm:py-1"
                        autoComplete="off"
                        type="password"
                        name=""
                        id="password"
                        placeholder="Password"
                        {...register("password", PASSWORD_VALIDATIONS)}
                    />
                    {errors.password && (
                        <span className="text-xs text-red-500">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="grid gap-1">
                    <label
                        className="text-[#8EFF8B] text-sm"
                        htmlFor="birthday"
                    >
                        Birthday
                    </label>
                    <input
                        className="outline-none rounded bg-inherit border-[1px] text-[#E5E5E5] px-4 sm:py-1"
                        autoComplete="off"
                        type="date"
                        name=""
                        id="birthday"
                        {...register("birthday")}
                    />
                </div>
                <div className="grid pt-4">
                    <button
                        className="bg-[#CBFFDA] text-[#302F2F] rounded-md py-1.5"
                        type="submit"
                    >
                        {idUserUpdate ? "Save changes" : "Save user"}
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
