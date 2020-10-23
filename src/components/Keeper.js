import React from "react";
import { AiFillPlusCircle, AiFillRightCircle } from "react-icons/ai";
import KeeperList from "./KeeperList";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";

const getLocalData = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};
export default function Keeper() {
  const [notes, setNotes] = React.useState({
    id: "",
    titel: "",
    notiz: ""
  });
  const [list, setList] = React.useState(getLocalData());
  const [isEditing, setEditing] = React.useState(false);
  const [editID, setEditId] = React.useState(null);
  const [warnung, setWarnung] = React.useState({
    show: false,
    type: "",
    msg: ""
  });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setNotes((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!notes.titel || !notes.notiz) {
      showAlert(true, "red", "Bitte beide Felder ausfüllen");
    } else if (notes.titel && notes.notiz && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, titel: notes.titel, notiz: notes.notiz };
          }
          return item;
        })
      );
      setEditing(false);
      setEditId(null);
      setNotes({ id: "", titel: "", notiz: "" });
      showAlert(true, "blue", "Eingabe wurde geändert!");
    } else {
      const newNote = { id: uuidv4(), titel: notes.titel, notiz: notes.notiz };
      setList([...list, newNote]);
      setNotes({ id: "", titel: "", notiz: "" });
    }
  };
  const clearAll = () => {
    showAlert(true, "red", "Alles wurde gelöscht!");
    setList([]);
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setWarnung({ show, type, msg });
  };

  const removeItem = (id) => {
    const newList = list.filter((note) => note.id !== id);
    setList(newList);
  };
  const editItem = (id) => {
    console.log("ändern");
    setEditing(true);
    setEditId(id);
    const uniqueItem = list.find((item) => item.id === id);
    const { titel, notiz } = uniqueItem;
    setNotes({ titel, notiz });
  };
  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section>
      {warnung.show && (
        <Alert
          type={warnung.type}
          msg={warnung.msg}
          removeAlert={showAlert}
          list={list}
        />
      )}
      <form
        className="inline-block flex flex-col justify-center w-11/12 md:w-1/2 mx-auto shadow-lg rounded-lg overflow-hidden mt-5 focus:outline-none relative"
        onSubmit={handelSubmit}
      >
        <input
          className="bg-yellow-300 text-xl md:text-2xl text-yellow-900 pl-4"
          placeholder="Überschrift"
          value={notes.titel}
          onChange={handleChange}
          name="titel"
        ></input>
        <textarea
          className="bg-yellow-300 text-xl md:text-2xl text-yellow-900 pl-4"
          placeholder="Notizen ..."
          value={notes.notiz}
          onChange={handleChange}
          name="notiz"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="absolute text-4xl text-yellow-700 rounded-full h-12 w-12 focus:outline-none"
          style={{ right: "0%", bottom: "0%" }}
        >
          {isEditing ? (
            <AiFillRightCircle />
          ) : (
            <AiFillPlusCircle className="" />
          )}
        </button>
      </form>
      {list.length > 0 && (
        <div>
          <KeeperList list={list} removeItem={removeItem} editItem={editItem} />
          <div className="text-center mb-8">
            <button
              className="border-red-500 border-2 text-red-700 px-3 hover:bg-red-500 hover:text-red-200 rounded"
              onClick={clearAll}
            >
              Alles Löschen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
