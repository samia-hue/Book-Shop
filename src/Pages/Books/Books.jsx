import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';

const Books = ({data}) => {

    const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch("book-data.json").then(res => res.json()).then(data => setBooks(data))
    // })

    // const bookPromise = fetch('./public/book-data.json').then(res => res.json())


    return (
        <div>
            <h1 className="text-3xl text-center p-6">Books</h1>

            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                    data.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;