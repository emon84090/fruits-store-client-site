import React from 'react';

const Blog = () => {
    return (
        <>
            <section className='pt-32 py-5 min-h-screen'>
                <div className="container mx-auto px-3">
                    <div className="blog-all-content grid gap-5 grid-cols-1 md:grid-cols-3">
                        <div className="blog-item shadow-lg border border-gray-100 p-5">
                            <h2 className='text-2xl font-semibold text-gray-800 capitalize'>Difference between javascript and nodejs</h2>
                            <p className='mt-4 text-gray-600'>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript  runtime environment  based on Chrome's V8 JavaScript engine. javascript is basically used on the client-side. and node js is mostly used on the server-side,javascript use for frontend development and node js is use for server development</p>
                        </div>
                        <div className="blog-item shadow-lg border border-gray-100 p-5">
                            <h2 className='text-2xl font-semibold text-gray-800 capitalize'> Differences between sql and nosql databases.</h2>
                            <p className='mt-4 text-gray-600 lowercase'>SQl is a  RELATIONAL DATABASE MANAGEMENT SYSTEM and nosql is a distributed database system.
                                sql databases have fixed or static or predefined schema and nosql have dynamic schema. sql Vertically Scalable. nosql Horizontally scalable </p>
                        </div>
                        <div className="blog-item shadow-lg border border-gray-100 p-5">
                            <h2 className='text-2xl font-semibold text-gray-800 capitalize'>When should we use NodeJS and when should we use MongoDB</h2>
                            <p className='mt-4 text-gray-600'>Nodejs is a Javascript engine that you can write any application you want with.Node js is a server side language.  It runs your Javascript code. node js used to build server. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Blog;