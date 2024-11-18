// Step 4. Import React and useState
import React, {useState} from 'react';
// Step 5. Import the App.css file
import './App.css'
// Step 6. Create a functional component called App
export default function App()
{
    //Runs Javascript

    //Creates a React Hook for ___
    const [tasks, setTasks] = useState([]);

    //Creates a React Hook for ___
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => 
    {
        setInputValue(event.target.value);
    };

    const handleAddTask = () =>
    {
        if(inputValue.trim())
        {
            //Adds the inputValue to the tasks array
            setTasks([...tasks, inputValue]);

            setInputValue('');
        }
    };

    const handleDeleteTask = (index) =>
    {
        //Copies the current array of items except for the item to delete
        const newTaskList = tasks.filter((task, i) => i != index)

        setTasks(newTaskList);
    };

    //Returns JSX, {} inserts Javascript
    return (
        <div className='list'>
            <h1>🛒 Shopping List 🛒</h1>

            <div class='logo'>
                <img src='/logo192.png' alt='Logo' class='logo'></img>
            </div>

            <div className='input'>
                <input
                    type = 'text'
                    value = {inputValue}
                    onChange={handleInputChange}
                    placeholder='Enter a new item'
                ></input>

                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className='task-item'>
                        {task}
                        <div class='task-actions'>
                            <button onClick={() => handleDeleteTask(index)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
    // Step 8a. Initialize useState state variables

    
    // Step 8b. Create arrow function 'handleInputChange to store the current user input
   
    
    // Step 9. Create arrow function 'handleAddTask' to add tasks to the list
    

    // Step 11. Create arrow function 'handleDeleteTask' with parameter 'index' to delete tasks
   
        // Step 11a. Create a new list of items to keep

        // Step 11b. Set the list to our new list

    // Step 7. Return the JSX for the App component

        // Step 7a. Create a div with className 'list' and create a site header
        
            {/* Step 7b. Create a div with className 'text' and create an input field with:
            type 'text' 
            value inputValue
            onChange set to handleInputChange
            placeholder to any placeholder text
            */}
           
           
            {/* Step 10. Display the shopping list array */}
            
            
                {/* Step 10a. Iterate over every task and retrieve its index*/}