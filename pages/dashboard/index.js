import { useRouter } from "next/router";
import { useContext } from "react";
import DashboardItems from "../../components/Dashboard/DashboardItems";
import { AuthContext } from "../../context/AuthProvider";
import LayoutDashboard from "../../layout/LayoutDashboard";
import ProtectRoute from "../../layout/ProtectRoute";


const DashboardItem = () => {
    return (
      <>
      <title>Dashboard</title>
      <ProtectRoute>
        <LayoutDashboard>
        

          <DashboardItems></DashboardItems>
            
        </LayoutDashboard>
        </ProtectRoute>
        </>
    );
};

export default DashboardItem;