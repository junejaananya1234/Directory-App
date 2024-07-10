import { useDispatch } from "react-redux";
import { setShowAdd } from "../../Redux/Slices/PersonSlice";

const Tabs = () => {
    const dispatch = useDispatch();
    const handleSwitch = () => {
        dispatch(setShowAdd());
    }
    return (
        <>
            <div className="w-[50%] flex gap-2 items-center">
                <button className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all text-sm" onClick={handleSwitch}>
                    Add New Person
                </button>
                <button  className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all text-sm" onClick={handleSwitch}>
                    Retrieve Information
                </button>
            </div>
        </>
    )
}
export default Tabs;