import React from 'react';
import Layout1 from "../../template/Layout1";
import axios from "axios";
import {useRouter} from "next/router";

const fetcher = async (post) => {
    const res = await axios.post(`http://localhost/posts/`,post)
    return res.data
}

const Add = () => {

    const router = useRouter()

    const sendPost = ()=>{
        const postObj = {title:"Test Next", author:"tester04"}
        fetcher(postObj).then(result=>{
            alert("success")
            router.push("./list")
        })
    }

    return (
        <Layout1>
            <button onClick={sendPost}>ADD</button>
        </Layout1>
    );
};

export default Add;