import CardUser from "./CardUser";

const UserList = ({users, deleteUser, handleClickUpdateUser}) => {
    
    return (
        <section className="max-w-3xl grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-4 p-2 mx-auto">
            {
                users.map((user) => (
                    <CardUser key={user.id} userInfo={user} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser}/>
                ))
            }
        </section>
    )
}
export default UserList