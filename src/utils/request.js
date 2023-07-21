import axios from 'axios';
export const post = (url,data={}) =>{
    return new Promise((resolve,reject)=>{
        axios.post(url,data,{
            baseURL:'https://www.fastmock.site/mock/dbfb6a8f6ecf6fdaacb2fd3235b1c244',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            resolve(response.data);

        },err=>{
            reject(err);
        });
    });
}