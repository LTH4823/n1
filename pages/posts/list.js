import React from 'react';
import Layout1 from "../../template/Layout1";
import useSWR from 'swr';
import axios from "axios";
import {useRouter} from "next/router";


const fetcher = async () => {
    const res = await axios.get("http://localhost/posts")

    return res.data
}

const List = () => {

    const {data, error} = useSWR({},fetcher)
    const router = useRouter()

    console.log(data, error)

    if (!data){
        return (
            <Layout1>
                <h1>Loading.........................</h1>
            </Layout1>
        )
    }

    const moveRead=(id)=>{
        alert(id)
        router.push(`./${id}`)
    }

    return (
        <Layout1>
            <h1>Post List</h1>
            <ul>
                {data.map( ({id,title,author})=> <li key={id} onClick={()=>moveRead(id)}>{id}---{title}---{author}</li>)}
            </ul>
        </Layout1>
    );
};

export default List;