import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-solid border-2 border-indigo-600 p-5 rounded-md mx-5'>
                <h1 className='font-bold'>Q1:Difference between javascript and nodejs</h1>
                <p>ans:javascript is  a programming language but node js is javascript run time.
                    Javascript used on the client side and node js used on the server side.so thats why javascript is used in fronted development and nodejs used in server side development
                </p>
            </div>
            <div className='border-solid border-2 border-indigo-600 p-5 rounded-md mx-5 my-2'>
                <h1 className='font-bold'>Q2:When should you use nodejs and when should you use mongodb?</h1>
                <p>ans:nodejs is javascript run time ,where its run our javascript  code.mostly node used in build servers to response client side web req.
                    Mongodb is database where we can store our data and also do crud operation.
                    If i want to create server with javascript then i can use node js  and if my project needs storing data ,update data,delete then i can use mongodb
                    Node js and mongodb is the different parts of the web server system but we have to use  them together
                </p>
            </div>
            <div className='border-solid border-2 border-indigo-600 p-5 rounded-md mx-5 my-2'>
                <h1 className='font-bold'>Q3:Differences between sql and nosql databases.</h1>
                <p>ans:sql is a relational database architecture ,it is column row  based database but nosql is a document  oriented database where we can store json data.
                    Sql database are good for complex queries but nosql is not so good  for complex queries. Sql database example:mySql,oracle, and noSql database example:mongdb
                </p>
            </div>
        </div>
    );
};

export default Blogs;