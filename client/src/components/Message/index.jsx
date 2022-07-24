import "./message.css";
import moment from "moment"

export default function Message({ message, own }) {
    const timeAgo = moment(message.createdAt).fromNow()

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <p className="messageText my-2">{message.text}</p>
            </div>
            <div className="messageBottom">{timeAgo}</div>
        </div>
    );
}