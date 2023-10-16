import { IconUsersGroup } from "@tabler/icons-react";
import CardUser from "./CardUser";

const UserList = ({ users, handleClickUpdateUser, handleOpenDeleteModal }) => {
    console.log(users);
    return (
        <section className="max-w-3xl grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-4 p-2 mx-auto ">
            {users.length === 0 ? (
                <h3 className="h-[300px] text-center flex flex-col justify-center items-center">
                    <IconUsersGroup size={80} />
                    {`You don't have any users on your list. Create a new user`}
                </h3>
            ) : (
                users.map((user) => (
                    <CardUser
                        key={user.id}
                        userInfo={user}
                        handleClickUpdateUser={handleClickUpdateUser}
                        handleOpenDeleteModal={handleOpenDeleteModal}
                        
                    />
                ))
            )}
        </section>
    );
};
export default UserList;
