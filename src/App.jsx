import axios from "axios";
import "./App.css";
import { BASE_URL, DEFAULT_FORM_VALUES } from "./constants/user";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";
import DeleteModal from "./components/deleteModal";

function App() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [idUserUpdate, setIdUserUpdate] = useState(null);

    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [idUserDelete, setIdUserDelete] = useState(null);


    const { handleSubmit, register, reset, formState } = useForm();
    const { errors } = formState;
    console.log(errors);

    const submit = (usersData) => {
        if (idUserUpdate) {
            updateUser(usersData);
        } else {
            createNewUser(usersData);
        }
    };

    const handleOpenModal = () => {
        setIsShowModal(true);
    };

    const handleCloseModal = () => {
        setIsShowModal(false);
        reset(DEFAULT_FORM_VALUES);
        setIdUserUpdate(null);
    };

    const createNewUser = (data) => {
        axios
            .post(BASE_URL + "/users/", data)
            .then(() => {
                handleCloseModal();
                getAllUsers();
            })
            .catch((err) => console.log(err));
    };

    const handleOpenDeleteModal = (userToDelete) => {
        setIsDeleteModal(true);
        setIdUserDelete(userToDelete.id)
        console.log(userToDelete.id);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModal(false);
    };

    const deleteUser = () => {
        axios
            .delete(BASE_URL + `/users/${idUserDelete}/`)
            .then(() => {
                getAllUsers();
                handleCloseDeleteModal();
            })
            .catch((err) => console.log(err));
    };

    const handleClickUpdateUser = (userToUpdate) => {
        handleOpenModal();
        reset(userToUpdate);
        setIdUserUpdate(userToUpdate.id);
    };

    const updateUser = (data) => {
        axios
            .put(BASE_URL + `/users/${idUserUpdate}/`, data)
            .then(() => {
                handleCloseModal();
                getAllUsers();
            })
            .catch((err) => console.log(err));
    };

    const getAllUsers = () => {
        axios
            .get(BASE_URL + "/users/")
            .then(({ data }) => setUsers(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <main className="bg-black w-full min-h-screen text-white font-body">
            <img
                className="fixed right-0 bottom-0 w-[450px]"
                src="/green.png"
                alt="green elipse"
            />
            <img
                className="fixed left-0 bottom-0 w-[400px] h-[400px]"
                src="/violet.png"
                alt="violet elipse"
            />
            <Header handleOpenModal={handleOpenModal} />
            <UserList
                users={users}
                deleteUser={deleteUser}
                handleClickUpdateUser={handleClickUpdateUser}
                handleOpenDeleteModal={handleOpenDeleteModal}
            />
            <Modal
                isShowModal={isShowModal}
                handleCloseModal={handleCloseModal}
                handleSubmit={handleSubmit}
                register={register}
                submit={submit}
                idUserUpdate={idUserUpdate}
                errors={errors}
            />
            <DeleteModal
                deleteUser={deleteUser}
                isDeleteModal={isDeleteModal}
                handleCloseDeleteModal={handleCloseDeleteModal}
            />
        </main>
    );
}

export default App;
