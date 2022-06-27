import React from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import useSWR from "swr";
import Layout1 from "../../template/Layout1";
import Link from "next/link";

const fetcher = async (id) => {

    const res = await axios.get(`http://localhost/posts/${id}`)
    return res.data

}

const PostRead = () => {

    const router = useRouter()
    const {pid} = router.query

    const {data, error} = useSWR(pid, fetcher)

    console.log(data, error)

    if (!data) {
        return (
            <Layout1>
                <h1>Loading.........</h1>
            </Layout1>
        )
    }

    const {id,title,author} = data

    return (
        <Layout1>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{author}</h1>
            <div>
                <button><Link href={{pathname:"/posts/list"}}>List</Link></button>
            </div>
        </Layout1>
    );
};

export default PostRead;