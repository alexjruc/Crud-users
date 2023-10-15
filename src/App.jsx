import axios from "axios";
import "./App.css";
import { BASE_URL, DEFAULT_FORM_VALUES } from "./constants/user";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";

function App() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [idUserUpdate, setIdUserUpdate] = useState(null);

    const { handleSubmit, register, reset } = useForm();

    const submit = (usersData) => {
        if(idUserUpdate) {
            updateUser(usersData)
        }else {
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
    
    const deleteUser = (id) => {
        axios
        .delete(BASE_URL + `/users/${id}/`)
        .then(() => {
            getAllUsers();
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
        <main className="bg-black w-full min-h-screen text-white p-2">
            <Header handleOpenModal={handleOpenModal} />
            <UserList
                users={users}
                deleteUser={deleteUser}
                handleClickUpdateUser={handleClickUpdateUser}
            />
            <Modal
                isShowModal={isShowModal}
                handleCloseModal={handleCloseModal}
                handleSubmit={handleSubmit}
                register={register}
                submit={submit}
                idUserUpdate={idUserUpdate}
            />
        </main>
    );
}

export default App;
