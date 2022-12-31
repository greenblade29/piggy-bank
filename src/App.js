import './App.css';
import pig from './img/piggy.png'
import MyBudget from './components/MyBudget'
import Remaining from './components/Remaining'
import Spent from './components/Spent'
import EList from './components/EList';
import AddNewE from './components/AddNewE';
import { AppProvider } from './context/AppContext';
import { useEffect, useState } from 'react';

function App() {

    const [finalQuote,setFinalQuote]= useState('Right now it\'s only a notion, but I think I can get the money to make it into a concept, and later turn it into an idea.');
    const[finalAuthor,setFinalAuthor]= useState('Woody Allen');
    const [quoteData,setData]= useState(null);
    async function updateQuote() {
      try {
        const MY_API_KEY= process.env.REACT_APP_API_KEY;
        console.log(MY_API_KEY);
        const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=money",
         {headers: {'X-Api-Key': MY_API_KEY}}
        );
        const { statusCode, statusMessage, ...quoteData } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        setData(response);
        console.log(quoteData[0].quote);
        setFinalQuote(quoteData[0].quote);
        setFinalAuthor(quoteData[0].author);
      } catch (error) {
        console.error(error);
        setData({ content: "Oops... Something went wrong" });
      }
    }
    
    console.log(quoteData);
    useEffect(() => {
      let interval = setInterval(() => {
        updateQuote();
      }, 15000);
      return () => {
        clearInterval(interval);
      };
    }, []);

  return (
    <AppProvider>
    <div className="App">
      <div className="starting">
        <h1>Piggy Bank</h1>
        <h3>A simple budget tracker available at your fingertips! 🐽</h3>
        <div className="quote-style">
          <p>{finalQuote}</p>
          <p> ~ {finalAuthor}</p>
        </div>
        <img className="piggy-image" src={pig} alt="piggy bank" />
      </div>
      <section className="values">
        <div className="row">
        <div className='col-sm'>
          <MyBudget/>
        </div>
        <div className='col-sm'>
          <Remaining/>
        </div>
        <div className='col-sm'>
          <Spent/>
        </div>
        </div>
        <div className='add-items'>
          <h3>Add new expense</h3>
          <AddNewE/>
        </div>
        <div className='display-items'>
          <h3>Expenditures</h3>
          <EList/>
        </div>
      </section>
      <div className='footer'>
        <h5>&copy; Developed by Milap Anwani</h5>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
