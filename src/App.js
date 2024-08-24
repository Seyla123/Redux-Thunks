import UsersList from './Components/UsersList';
import SignUp from './Components/SignUp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
