import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-green-100 w-3/4 mx-auto  rounded'>
            <h2 className='text-bold text-4xl text-center mb-12'>Some Important Questions</h2>
            <div className='mb-6'>
                <h2 className='text-bold text-3xl'>1. What are the different ways to manage a state in React Application?</h2>
                <p>Redux and the second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB.</p>
            </div>
            <div className='mb-6'>
                <h2 className='text-bold text-3xl'>2. How does prototypical inheritance works?</h2>
                <p>The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Each object has a private property which holds a link to another object called its prototype</p>
            </div>
            <div className='mb-6'>
                <h2 className='text-bold text-3xl'>3. What is unit tests? Why we should write unit tests?</h2>
                <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.It decrease defects and expose them early in the development lifecycle, Increase code readability, enable code reuse</p>
            </div>
            <div>
                <h2 className='text-bold text-3xl'>4. React vs Angular vs Vue?</h2>
                <p><span className='  text-bold text-xl'>React</span> interestingly, combines the UI and behavior of components. For instance. In React, the same part of the code is responsible for creating a UI element and dictating its behavior. In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. </p>
            </div>
        </div>
    );
};

export default Blogs;