import { useSelector, useDispatch } from "react-redux";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { addEmptyInfo, setShowAdd, updateInfo, deleteInfo } from "../../Redux/Slices/PersonSlice";

const AddInfo = () => {
    const dispatch = useDispatch();
    const infos = useSelector((state) => state.person.infos);

    const handleInputChange = (e, index, field) => {
        const { value } = e.target;
        dispatch(updateInfo({ index, field, value }));
    };

    const addRow = () => {
        dispatch(addEmptyInfo());
    };

    const handleDelete = (index) => {
        dispatch(deleteInfo(index));
    };

    return (
        <>
            <div className="w-[70%] flex flex-col border border-solid border-blue-800 border-opacity-30">
                <p className="p-4 border-r border-b border-solid border-opacity-30 border-blue-800 w-[20%] flex items-center justify-center cursor-pointer">
                    Add New Person
                </p>
                <div className="w-full items-center justify-center flex">
                    <table className="w-[98%] m-4 border border-solid border-black">
                        <thead className="bg-blue-400">
                            <tr className="text-start text-white">
                                <td className="p-2 border-r border-black border-solid w-10">
                                    Name
                                </td>
                                <td className="p-2 border-r border-black border-solid">
                                    Date Of Birth
                                </td>
                                <td className="p-2 border-r border-black border-solid">
                                    Aadhar Number
                                </td>
                                <td className="p-2 border-r border-black border-solid">
                                    Mobile Number
                                </td>
                                <td className="p-2 border-r border-black border-solid">
                                    Age
                                </td>
                                <td className="p-2">
                                    Actions
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {infos.map((info, index) => (
                                <tr key={index} className="text-start text-black">
                                    <td className="p-2 border-r bg-gray-50 border-black border-solid ">
                                        <input
                                            className="text-black bg-white p-2 focus:outline-none w-24"
                                            value={info.name}
                                            onChange={(e) => handleInputChange(e, index, 'name')}
                                        />
                                    </td>
                                    <td className="p-2 border-r bg-gray-50 border-black border-solid">
                                        <input
                                            className="text-black bg-white p-2 focus:outline-none w-full"
                                            type="date"
                                            value={info.dob}
                                            onChange={(e) => handleInputChange(e, index, 'dob')}
                                        />
                                    </td>
                                    <td className="p-2 border-r bg-gray-50 border-black border-solid">
                                        <input
                                            className="text-black bg-white p-2 focus:outline-none w-full"
                                            type="number"
                                            value={info.aadharNumber}
                                            onChange={(e) => handleInputChange(e, index, 'aadharNumber')}
                                        />
                                    </td>
                                    <td className="p-2 border-r bg-gray-50 border-black border-solid">
                                        <input
                                            className="text-black bg-white p-2 focus:outline-none w-full"
                                            type="number"
                                            value={info.mobileNumber}
                                            onChange={(e) => handleInputChange(e, index, 'mobileNumber')}
                                        />
                                    </td>
                                    <td className="p-2 border-r bg-gray-50 border-black border-solid">
                                        <input
                                            className="text-black bg-white p-2 focus:outline-none w-14"
                                            type="number"
                                            value={info.age}
                                            onChange={(e) => handleInputChange(e, index, 'age')}
                                        />
                                    </td>
                                    <td className="p-6 flex gap-2 items-center justify-center">
                                        <FaSave className="text-2xl hover:text-blue-400 text-blue-700 cursor-pointer transition-all"
                                            onClick={() => handleSave(index)}
                                        >
                                            Save
                                        </FaSave>
                                        <MdDelete className="text-2xl text-rose-600 hover:text-red-500 cursor-pointer transition-all" onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </MdDelete>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center m-4 w-full items-end ml-[40%]">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2"
                        onClick={addRow}>
                        Add Row
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddInfo;
