"use client"
import React from 'react';
import { useState } from 'react';
const authenticator=()=>{
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };
  const handleReset = () => {
    setTitle('');
    setAuthor('');
    setContent('');
    setShowResult(false);
  };    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-100 border-[1px] border-black text-center p-8 rounded-lg max-w-md w-full shadow-xl shadow-cyan-200">
        <h1 className="text-3xl font-semibold mb-6 ">Enter The News</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="text-gray-600 mb-2 font-semibold block">
              Title
            </label>
            <input
            placeholder='Enter The Title'
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-[1px] border-black rounded-md"
              required
            />
          </div>
            <hr className='border-1 border-black'/>
          <div className="mb-4">
            <label htmlFor="author" className="text-gray-600 mb-2 font-semibold block">
              Author
            </label>
            <input
            placeholder='Enter Author Name'
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border-[1px] border-black rounded-md"
            //   required
            />
          </div>
          <hr className='border-1 border-black'/>

          <div className="mb-6">
            <label htmlFor="content" className="text-gray-600 mb-2 font-semibold block">
              Content
            </label>
            <textarea
            placeholder='Enter Content'

              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border-[1px] border-black rounded-md h-32"
            //   required
            />
          </div>
            <div className='space-x-2'>
                <div></div>
            
            <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-800 py-2 px-6 ml-2 rounded-md hover:bg-gray-400"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 w-15 rounded-md hover:bg-blue-700"
          >
            Check Authenticity
          </button>
            </div>
        </form>
        {showResult && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Authenticity</h2>
            <p className="mb-2"><span className="font-semibold">Title:</span> {title}</p>
            <p className="mb-2"><span className="font-semibold">Author:</span> {author}</p>
            <div className="mb-2">
              <span className="font-semibold">Content:</span>
              <div className="bg-gray-100 p-4 rounded-md break-all text-sm">
                {content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default authenticator;
