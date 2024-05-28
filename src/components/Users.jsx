import React from 'react'
import { Outlet, useLocation, useParams,Link } from 'react-router-dom'

export default function Users() {
    const{id,name} = useParams();
    let queryparameters = useLocation();
    let queryParams = new URLSearchParams(queryparameters.search);
    let category = queryParams.get('category');
    let posts = queryParams.get('posts');
  return (
    <div>
      <h1>User Id : {id}</h1>
      <h1>Name : {name}</h1>
      <h1>Posts : {posts}</h1>
      <h1>Category : {category}</h1>
        <Outlet/>
     <button><Link to="orders">Orders</Link></button>
            <button><Link to="profile">Profile</Link></button>
    </div>
  )
}
export function Orders() {

    return <>
        <h1>This is User Orders Component</h1>
    </>

}
export function Profile() {

    return <>
        <h1>This is User Profile Component</h1>
    </>

}