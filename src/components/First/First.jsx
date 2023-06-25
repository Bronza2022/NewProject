import firstStyles from "./first.module.css";

const myFunctionFirst = () => {  
 // return console.log(100);  // вывод в консоли числа 100
};

export const First = () => {  // вывод компонента First на страницу.


  
function getRandomInRange(min, max) {    // генератор случайного числа
    return Math.floor(Math.random() * (max - min + 1)) + min;  // генератор случайного числа
  }

 
  return (  // генератор случайного числа от 0 до 5 и вывод компонента First на страницу.
    <> 
      <div>{getRandomInRange(111, 999)}</div>   

      <div className={firstStyles.wr}>1</div>
    </>
  );
  };

export default myFunctionFirst;


