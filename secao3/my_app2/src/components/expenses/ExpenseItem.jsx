import './ExpenseItem.css'
import Date from './Date';
import Card from './Card';
import React, {useState} from 'react';
import Button from './Button';

const ExpenseItem = (props) => {
  const {data:{amount, date}} = props;
  const [newTitle, setTitle] = useState(props.data.title);
  const [disabled, setEnable] = useState(false);

  const handler = () => {
    setTitle('Updated!');
    setEnable(true);
  }

  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  return (
    <Card className="expense-item">
      <Date data={date} />
      <div className="expense-item__description">
        <h2>{ newTitle }</h2>
        <div className="expense-item__price">{formatter.format(amount)}</div>
        <Button onClick={handler} className="btn btn-danger" disabled={disabled}/>
      </div>
    </Card>
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