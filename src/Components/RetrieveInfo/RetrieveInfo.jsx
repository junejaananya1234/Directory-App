import { useState } from "react";
import { useSelector } from "react-redux";

const RetrieveInfo = () => {
    const [searchVal, setSearchVal] = useState("");
    const [found, setFound] = useState(null); 
    const infos = useSelector((state) => state.person.infos);

    const handleSearch = () => {
        if (!searchVal || searchVal.length !== 12) {
            alert("Invalid Aadhar Number");
            return;
        }

        const info = infos.find((info) => info.aadharNumber === searchVal);
        if (info) {
            setFound(info);
        } else {
            setFound(null); 
        }
    };
    return (
        <>
             <div className="w-[70%] flex flex-col border border-solid border-blue-800 border-opacity-30 gap-4">
                <p className="p-4 border-r border-b border-solid border-opacity-30 border-blue-800 w-[20%] flex items-center justify-center cursor-pointer">
                    Retrieve Information
                </p>
                <div className="flex items-center w-[30%] justify-between gap-4 m-2">
                    <input className="border border-blue-800 border-solid w-[90%] p-2 focus:outline-none border-opacity-30" type="number" value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}>
                    
                    </input>
                    <button className="bg-blue-500 text-center p-2 text-white w-24" onClick={handleSearch}>Find</button>
                </div>
                {
                    found ? (<div className="w-[30%] border border-solid border-blue-800 border-opacity-30 m-2 p-4 flex flex-col justify-center">
                                <p className="font-bold">Name: <span className="font-normal">{found.name}</span></p>
                                
                                <p className="font-bold">Date Of Birth: <span className="font-normal">{found.dob}</span></p>
                                
                                <p className="font-bold">Aadhar Card: <span className="font-normal">{found.aadharNumber}</span></p>
                                
                                <p className="font-bold">Mobile Number: <span className="font-normal">{found.mobileNumber}</span></p>
                                
                                <p className="font-bold">Age: <span className="font-normal">{found.age}</span></p>

                             </div>
                        ) : (<div className="w-full flex items-center justify-center text-[30px]">No Data</div>)
                }
            </div>
        </>
    )
}
export default RetrieveInfo;