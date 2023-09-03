import { useEffect, useState } from "react";


const reminders = (state = [], action) => {

    //  here we should replace all this data by data from backEnd

    const useShareState = () => {

        const [editProfile, setEditProfile] = useState(false);
        const [errorPassEdit, setHandlePassEdit] = useState(false);
        const [hidHomeIntro, sethidHomeIntro] = useState(false);
        const [bottleClassName, setBottleClassName] = useState("")


        const MessageOption = [
            { id: 1, option: "secret" },
            { id: 2, option: "confession" },
            { id: 3, option: "motivation" }

        ]
        const [userInfo, setUserInfo] = useState({
            userName: "Meery",
            email: "meeryawad@hotmail.com",
            photo: "",
            password: "12345",
            src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            country: ""


        })
        // useEffect(() => {

        //     localStorage.setItem('userInfo', JSON.stringify(userInfo)); //changed

        // }, []);

        // const user = JSON.parse(localStorage.getItem('userInfo')) //changed

        const [editProfileData, seteditProfileData] = useState({
            Password: userInfo.password,
            ConfirmPassword: userInfo.password,
            photo: "",
            src: userInfo.src

        });

        const [sendMessagesBox, setSendMessagesBox] = useState([
            {
                id: 1,
                messageText: 'Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice dayv Hello, hope you have a nice day Hello, hope you have a nice day',
                date: "25/4/2023",
                country: 'Syria',
                read: false
            },
            {
                id: 2,
                messageText: 'good night',
                date: "23/4/2023",
                country: 'Germany',
                read: false
            },
            {
                id: 3,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 4,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 5,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 6,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 7,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
        ]);

        const [receivedMessagesBox, setReceivedMessagesBox] = useState([
            {
                id: 1,
                messageText: 'Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice dayv Hello, hope you have a nice day Hello, hope you have a nice day',
                date: "25/4/2023",
                country: 'Syria',
                read: false
            },
            {
                id: 2,
                messageText: 'good night',
                date: "23/4/2023",
                country: 'Germany',
                read: false
            },
            {
                id: 3,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 4,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 5,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 6,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 7,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },

        ]);



        return {
            sendMessagesBox, setSendMessagesBox,
            receivedMessagesBox, setReceivedMessagesBox,
            MessageOption,
            userInfo, setUserInfo,
            editProfile, setEditProfile,
            editProfileData, seteditProfileData,
            errorPassEdit, setHandlePassEdit,
            hidHomeIntro, sethidHomeIntro,
            bottleClassName, setBottleClassName

        }
    }




    const data = {

        useShareState,
    }




    return data;

}

export default reminders