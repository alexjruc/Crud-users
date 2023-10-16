import { IconMail, IconUserEdit } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconCake } from "@tabler/icons-react";

const CardUser = ({ userInfo, handleClickUpdateUser, handleOpenDeleteModal }) => {
    
    return (
        <article className=" bg-white/60 grid gap-4 rounded-xl z-10">
            <div className="grid p-2 gap-1">
                <h3 className="flex gap-2 justify-center items-center text-black text-2xl border-b p-2 capitalize">
                    <IconUserCircle />
                    {userInfo.first_name} {userInfo.last_name}
                </h3>
                <p className="flex gap-2 justify-start items-center text-red-500 text-sm">
                    <IconMail />{" "}
                    <span className="text-white">{userInfo.email}</span>
                </p>
                <p className="flex gap-2 justify-start items-center text-red-500 text-sm">
                    <IconCake />{" "}
                    <span className="text-white">{userInfo.birthday}</span>
                </p>
            </div>
            <div className="flex gap-4 justify-end p-2">
                <button
                    onClick={() => handleClickUpdateUser(userInfo)}
                    className="bg-white text-[#5e5d5d] p-1.5 rounded-md"
                >
                    <IconUserEdit size={20} />
                </button>
                <button
                    onClick={() => handleOpenDeleteModal(userInfo)}
                    className="bg-red-500 text-white p-1.5 rounded-md"
                >
                    <IconTrash size={20} />
                </button>
            </div>
        </article>
    );
};
export default CardUser;
