import React from 'react';
import Layout1 from "../../template/Layout1";
import {useRouter} from "next/router";
import axios from "axios";
import useSWR from "swr";
import TodoList from "../../components/todolist";
import Pagination from "../../components/pagination";

const fetcher = async (page) => {
    const res = await axios.get(`http://localhost:8080/guest/todo/list`,{params:{page}})

    return res.data
}

const List = () => {

    const router = useRouter()

    const {page} = router.query||1

    const {data,error} = useSWR(page,fetcher)

    const movePage = (pageNum) =>{
        router.push({pathname:"./list",query:{page:pageNum}})
    }

    if (!data){
        return (
            <Layout1>
                <h1>Loading............</h1>
            </Layout1>
        )
    }

    console.log(data)

    return (
        <Layout1>
            <h1>Todos List</h1>
            <TodoList dtoList={data.dtoList}></TodoList>
            <Pagination{...data} movePage={movePage}></Pagination>
        </Layout1>
    );
};

export default List;