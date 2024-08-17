import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUsers } from "../store/thunks/fetchUsers"
function UserList() {
  const dispatch = useDispatch();
  
  const {isLoading,data,error} = useSelector ((state)=>{
    return state.users;
  })

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if(isLoading){
    return <div>Loading...</div>
  } 

  if(error){
    return <div>Error... {error}</div>
  }
  return (
    <div>User List: {data.length}</div>
  )
}

export default UserList