import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/navbar/navbar";
import Tabs from "../Components/Tabs/tabs";
import AddInfo from "../Components/AddInfo/AddInfo";
import RetrieveInfo from "../Components/RetrieveInfo/RetrieveInfo";

const LandingPage = () => {
    const showAdd = useSelector((state) => state.person.showAdd);
    const infos = useSelector((state) => state.person.infos);

    useEffect(() => {
        localStorage.setItem('infos', JSON.stringify(infos));
    }, [infos]);

    return (
        <>
            <div className="w-full flex flex-col gap-10 items-center">
                <Navbar />
                <Tabs />
                {
                    showAdd ? <AddInfo /> : <RetrieveInfo />
                }
            </div>
        </>
    );
}
export default LandingPage;
