// import { useState } from 'react';      
import './App.css';
import { First as FirstComponent } from './components/First/First'; // Через "as" можно поменять название компонента.
import { Second } from './components/Second/Second';
import { Third } from './components/Third/Third';
import hummingbird from './assets/hummingbird.png';
import myFunctionFirst from './components/First/First';
import myFunctionSecond from './components/Second/Second';

function App() {
  myFunctionFirst()
  myFunctionSecond ()
 

  return (
    <div className="container">
        <header className="App-header">
        <p>
        Привет!
        </p>
        <img src={hummingbird} className="Hummingbird" alt="" />      
         <FirstComponent />
         <Second />
         <Third />
      </header>         
    </div>
  );
}

export default App;

//    const curentDate = Date.now() // вывод текущего времени
//    console.log(curentDate);
   


// ******** компонент часы **************

// import React, { useState, useEffect } from 'react';

// function Clock() {
// //   // Инициализировать текущее время до текущей даты и времени
//   const [time, setTime] = useState(new Date());

// //   // Обновление времени каждую секунду
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

// //     // Очистить интервал, когда компонент размонтируется
//     return () => clearInterval(interval);
//   }, []);

// //   // Извлечение часов, минут и секунд из текущего времени
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

// //   // Форматировать время как строку
//   const timeString = `${hours}:${minutes}:${seconds}`;

//   return (
//     <div>
//         {/* Показать строку времени  */}
//            <h1>{timeString}</h1>
//     </div>
//   );
// }

// export default Clock;

// ************************************






//  alt="logo"  что это?