import secondStyles from'./second.module.css'

const myFunctionSecond = () => {  
     };

const today = new Date(); // вывод текущего времени и компонента Second на страницу.

export const Second = () => {  // вывод компонента Second на страницу.


    function toLocaleTimeString() {
        return today.toLocaleTimeString('en-US');
    }

    return (  // вывод текущего времени и компонента Second на страницу.
    <>
     <div className={secondStyles.wr}>2</div>  
     <div>{toLocaleTimeString('en-US')}</div>  

     </>
    )
}

export default myFunctionSecond;

