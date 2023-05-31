import { FC, useEffect, useState } from "react";
import axios from 'axios';

interface IData {
    name: string;
    age: number;
}


export const Dashboard: FC = () => {

    const [data, setData] = useState<IData>();

    useEffect(() => {
        axios.get<IData>('https://test.com')
        .then(({data}) => setData(data))
        .catch((error) => {
            if(axios.isAxiosError(error)) {
                console.log(error.response?.data);                
            }else {
                console.log(error);
            }

            return null;
        })
    }, []);

    return (
        <h1>Dashboard</h1>
    )
}