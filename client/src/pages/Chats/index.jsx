import React, {useState, useEffect} from 'react';
import API from "../../api";
import {useSelector} from "react-redux";
import {userSelector} from "../../store/slices/userSlice";

import ChatContainer from "../ChatContainer";
import Conversation from "../../components/Conversation";

import "./chats.css"


function Chats() {
    const {currentUser} = useSelector(userSelector)
    const [currentChat, setCurrentChat] = useState(null);
    const [list, setList] = useState([])


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
                <div className="div left-box">
                    {list.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={currentUser}/>
                        </div>
                    ))}
                </div>
                <div className="div mx-2">
                    <ChatContainer currentChat={currentChat} currentUser={currentUser}/>
                </div>
            </div>
        </div>
    );
}

export default Chats;