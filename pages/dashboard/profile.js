import { useState } from "react";
import UpdateProfile from "../../components/Profile/UpdateProfile";
import UserProfile from "../../components/Profile/UserProfile";
import LayoutDashboard from "../../layout/LayoutDashboard";
const profile = () => {
    const [changeLayout, setChangeLayout] = useState(false)

    return (
        <LayoutDashboard>
            {
                !changeLayout ? <UserProfile show={setChangeLayout} /> : <UpdateProfile hide={setChangeLayout} />
            }
        </LayoutDashboard>
    );
};

export default profile;