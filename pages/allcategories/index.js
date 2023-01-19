
import { AllCategories } from "../../components/AllCategories/AllCategories";
import Footer from "../../components/Footer/Footer";
const AllCategoriesComponent = () => {
    return (
        <div>
            <h3 className="mt-48 mb-20 text-center text-5xl font-semibold">Our All Events</h3>
            <AllCategories></AllCategories>
            <Footer></Footer>
        </div>
    );
};

export default AllCategoriesComponent;