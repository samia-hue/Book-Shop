import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utilitiiy/addToDB";
import Book from "../Books/Book";

const ReadList = () => {
  // worst case

  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoreBook();
    // console.log(storedBookData,"stored data")
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks)

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);


  const handleSort = (type) =>{
    setSort(type)
    if(type === "pages"){
      const sortByPage = [...readList].sort((a,b) => a.totalPages-b.totalPages)
      setReadList(sortByPage)
    }
    if(type ==="ratings"){
      const sortedByRatings = [...readList].sort((a,b) => a.rating-b.rating)
      setReadList(sortedByRatings)
    }
  }


  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by {sort?sort:""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read :{readList.length}</h2>

          {readList.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>{" "}
    </div>
  );
};

export default ReadList;
