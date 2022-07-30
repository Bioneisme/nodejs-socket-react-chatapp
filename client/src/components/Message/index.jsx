import React from "react";
import moment from "moment-timezone"

import "./message.css";

export default function Message({ message, own, image, ownImage }) {
    const timeAgo = moment(moment(message.createdAt).tz('UTC')).fromNow()

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src={own? ownImage : image}
                    alt=""
                />
                <p className="messageText my-2">{message.text}</p>
            </div>
            <div className="messageBottom">{timeAgo}</div>
        </div>
    );
}