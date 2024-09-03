import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const View = () => {
    const[data,changeData]=useState(
        [
      ]
      )
      const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{changeData(response.data)
            
        }
        )
    }
        useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Header></Header>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        {data.map(
  (value,index)=>{
    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <div class="card-header">
                                        Task : {value.id}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID : {value.id}</li>
                                        <li class="list-group-item">Titile : {value.title}</li>
                                        {value.completed ? (<p className='text-success'>Task Completed</p>):(<p className='text-danger'>Task Not Completed</p>)}
                                    </ul>
                                </div>
                            </div>
                             }
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View