import './ExpenseDate.css';

function Date(props) {
  const { data } = props;
  const day = data.toLocaleString('pt-BR', { day: '2-digit'});
  const month = data.toLocaleString('pt-BR', { month: 'long'});
  const year = data.toLocaleString('pt-BR', { year: 'numeric'});

  return (
    <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
  )
}

export default Date;