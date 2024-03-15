/*
getting data from firestore:
- https:firebase.google.com/docs/firestore/query-data/get-data
*/

import React, { useState, useEffect } from 'react';

import { db } from "../test/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

export default function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const q = query(collection(db, "messages"), where("senderID", "==", 1));

                const querySnapshot = await getDocs(q);
                const fetchedMessages = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMessages(fetchedMessages);
                console.log(fetchedMessages);
            } catch (error) {
                console.error('Error fetching messages: ', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h1>Messages:</h1>
            <ul>
                {messages.map((message) => (
                    <li key={message.messageID}>
                        {message.senderID}: {message.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}
