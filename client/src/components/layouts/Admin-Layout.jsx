import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";



export const AdminLayout = () => {

 const { user, loading } = useAuth();

// console.log("user data",user)

if(loading){
return <h1>Loading...</h1>
}

if (!user.isAdmin) {
  
  return <Navigate to="/" />;
}

  return (
    <>
      <header>
    

        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"><FaUser/> Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/service"><FaRegListAlt /> Services</NavLink>
              </li>
              <li>
                <NavLink to="/"><FaHome /> Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* This will render the nested routes (AdminUsers, AdminContacts) */}
      <Outlet />
    </>
  );
};
