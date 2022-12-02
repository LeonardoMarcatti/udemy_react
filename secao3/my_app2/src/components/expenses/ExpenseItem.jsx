import './ExpenseItem.css'
import Date from './Date';
import Card from './Card';
import React, {useState} from 'react';
import Button from './Button';

const ExpenseItem = (props) => {
  const {data:{amount, date}, onDelExpense, id} = props;
  const [newTitle] = useState(props.data.title);

  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  return (
    <li>
    <Card className="expense-item">
      <Date data={date} />
      <div className="expense-item__description">
        <h2>{ newTitle }</h2>
        <div className="expense-item__price">{formatter.format(amount)}</div>
        <div className="edition">
          <Button
            className="btn btn-danger btn-sm"
            value="Delete"
            onDelExpense={onDelExpense}
            id={id}
          />
          <Button
            className="btn btn-success btn-sm"
            value="Update"
            id={id}
          />
        </div>
      </div>
    </Card>
    </li>
  )
}

// class ExpenseItem extends React.Component{
//   state = {
//     title: this.props.data.title,
//     disabled: false,
//   };

//   formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
//   handler = () =>  {
//     (this.state.title === 'Updated!')? this.setState({title: 'Updated again!', disabled: true}) : this.setState({title: 'Updated!'}); 
//   }
  
//   render(){
//     const {title, disabled} = this.state;
//     const {data:{amount, date}} = this.props;
//     return (
//       <Card className="expense-item">
//         <Date data={date} />
//         <div className="expense-item__description">
//           <h2>{ title }</h2>
//           <div className="expense-item__price">{this.formatter.format(amount)}</div>
//           <Button onClick={this.handler} className="btn btn-danger" disabled={disabled}/>
//         </div>
//       </Card>
//     )
//   }
// }

export default ExpenseItem;