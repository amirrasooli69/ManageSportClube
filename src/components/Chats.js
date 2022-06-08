import React, { useState, useEffect, useContext } from 'react';
import {auth} from '../firebase';
import axios from 'axios';
import { ChatEngine } from 'react-chat-engine';

//Components
import Navbar from './Navbar';

//Style
import styles from './Chats.module.css';

//Context 
import { AuthContext } from '../contexts/AuthContextProvider';
import { useHistory } from 'react-router-dom';

const Chats = () => {
    
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    
    useEffect(() => {
        if(!user) {
            history.push('/');
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "066cfd47-5a22-4de3-a13a-ae238cf3da3d",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
            .then(avatar => {
                formdata.append("avatar", avatar, avatar.name)
                axios.post("https://api.chatengine.io/users/", formdata, {
                    headers: {
                        "private-key": "2fb542c7-4d12-416b-953a-4de7ddcf6520"
                    }
                })
                .then(() => setLoading(false))
                .catch(error => console.log(error))
            })

        })
    }, [user, history]);
    
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }
    if(!user || loading ) return "Loading..."
    
    return (
        <div className={styles.container}>
            <Navbar />

            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="066cfd47-5a22-4de3-a13a-ae238cf3da3d"
                userName= {user.email}
                userSecret= {user.uid}
            />
            
        </div>
    );
};

export default Chats;