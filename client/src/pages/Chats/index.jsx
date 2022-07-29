import React, {useState, useEffect} from 'react';
import API from "../../api";
import {useSelector} from "react-redux";
import {userSelector} from "../../store/slices/userSlice";

import ChatContainer from "../ChatContainer";
import AddConversationContainer from "../AddConversationContainer";
import Conversation from "../../components/Conversation";

import "./chats.css"


function Chats() {
    const {currentUser} = useSelector(userSelector)
    const [currentChat, setCurrentChat] = useState(null);
    const [list, setList] = useState([])
    const [clicked, setClicked] = useState(false)

    const handleSubmit = () => {
        setClicked(true)
    }

    const changeChat = (chat) => {
        setClicked(false)
        setCurrentChat(chat)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.get('/getChats/' + currentUser.id)
                setList(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData().then()
    }, [currentUser.id])

    return (
        <div>
            <div className="chats-container">
                <div className="left-box">
                    <button className="add-button" onClick={handleSubmit}>+</button>
                    {list.map((c) => (
                        <div onClick={() => changeChat(c)} key={c.id}>
                            <Conversation conversation={c} currentUser={currentUser}/>
                        </div>
                    ))}
                </div>
                <div className="mx-2">
                    {!clicked ? <>
                            <ChatContainer
                                currentChat={currentChat}
                                currentUser={currentUser}/> </> :
                        <AddConversationContainer currentUser={currentUser}/>}
                </div>
            </div>
        </div>
    );
}

export default Chats;