import './ExpenseItem.css'
import Date from './Date.jsx';

function ExpenseItem(props) {
  const { data } = props;
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  return (
    <div className="expense-item">
      <Date data={data.date} />
      <div className="expense-item__description">
        <h2>{ data.title }</h2>
        <div className="expense-item__price">{formatter.format(data.amount)}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;