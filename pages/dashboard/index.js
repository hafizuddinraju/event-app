import { useRouter } from "next/router";
import { useContext } from "react";
import DashboardItems from "../../components/Dashboard/DashboardItems";
import { AuthContext } from "../../context/AuthProvider";
import LayoutDashboard from "../../layout/LayoutDashboard";


const DashboardItem = () => {
    return (
        <LayoutDashboard>
        

          <DashboardItems></DashboardItems>
            
        </LayoutDashboard>
    );
};

export default DashboardItem;