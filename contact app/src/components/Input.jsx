import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
const Input = () => {
  const [contact, setContact] = useState([]);

  async function getContact() {
    try {
      const contactRef = collection(db, "contacts");
      const contactSnapshort = await getDocs(contactRef);
      const contactList = contactSnapshort.docs.map((dos) => {
        dos;
      });
      console.log(contactList);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getContact();
  }, []);
  return (
    <div className="flex relative items-center px-4">
      <FiSearch className="text-white text-3xl absolute ml-1 " />
      <input
        type="text"
        placeholder="Search Contect"
        className="text-white pl-9 bg-transparent border flex-grow border-white outline-none rounded-md h-10"
      />
      <div>
        <AiFillPlusCircle className="text-white text-4xl mx-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Input;
