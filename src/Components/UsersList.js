import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import { signUp } from "../store/thunks/signUp";
function UserList() {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  try {
    useEffect(() => {
      dispatch(fetchUsers());
      console.log("this data : ", data);
    }, [dispatch,signUp]);

    
  } catch (error) {
    console.log("error", error);
  }
  
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error... {error}</div>;
  }
  
  return <div>
    <h3>This is title </h3>
    <div>
    {data.map((item)=>{
      return <div className="bg-slate-300 m-4" key={item.id}>
        <h3>{item.name}</h3>
        <h3>{item.email}</h3>
        <h3>{item.role}</h3>
      </div>
      
    })}
    </div>
  </div>;
}

export default UserList;
