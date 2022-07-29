import React, {useState, useEffect} from 'react';

import "./container.css"
import API from "../../api";

function AddConversationContainer({currentUser}) {
    const [list, setList] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.get('/getNewConversations')
                setList(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData().then()
    }, [])

    const handleClick = async (id) => {
        const post = {
            senderId: currentUser.id,
            receiverId: id
        }
        console.log(post)
        API.post('/createChat', post).then(() => {
            window.location.reload()
        })
    }
    return (
        <div>
            <div className="message-container">
                <div className="find-box shadow p-3 bg-white rounded text-center">
                    <p className="lead">Add new Conversation</p>
                    <hr/>
                    <div className="users-box text-start">
                        <div>
                            {list.map((c) => (
                                <div>
                                    <img
                                        className="user-image"
                                        src={c.image}
                                        alt=""
                                    />
                                    <span className="user-name">{c.nickname}</span>
                                    <i style={{cursor: "pointer"}}
                                       className=" mx-2 fas fa-plus-circle"
                                       onClick={() => handleClick(c.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddConversationContainer;