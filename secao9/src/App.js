import logo from './assets/investment-calculator-logo.png';
import Table from './components/Table'; 
import Form from './components/Form';
import useCalc from './hook/useCalc';

const App = () => {
  const {reset, calculateHandler, years} = useCalc()

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      <header className="header">
			<img src={logo} alt="logo" />
			<h1>Investment Calculator</h1>
      </header>
      <Form reset={reset} calc={calculateHandler}/>
      {        
        years.length > 0 && (
          <Table data={years} formatter={formatter}/>
        )
      }      
    </div>
  );
}

export default App;
