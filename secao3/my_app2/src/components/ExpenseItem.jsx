import './ExpenseItem.css'
import Date from './Date';
import Card from './Card';
// import React, {useState} from 'react';
import React from 'react';
import Button from './Button';

// function ExpenseItem(props) {
//   const {data:{amount, date}} = props;
//   const [newTitle, setTitle] = useState(props.data.title);

//   const handler = () => {
//     setTitle('Updated!');
//   }

//     const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
//     return (
//       <Card className="expense-item">
//         <Date data={date} />
//         <div className="expense-item__description">
//           <h2>{ newTitle }</h2>
//           <div className="expense-item__price">{formatter.format(amount)}</div>
//           <Button onClick={handler} className="btn btn-danger" />
//         </div>
//       </Card>
//     )
// }

class ExpenseItem extends React.Component{
  state = {
    title: this.props.data.title,
    disabled: false,
  };

  formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  handler = () =>  {
    (this.state.title === 'Updated!')? this.setState({title: 'Updated again!', disabled: true}) : this.setState({title: 'Updated!'}); 
  }
  
  render(){
    const {title, disabled} = this.state;
    const {data:{amount, date}} = this.props;
    return (
      <Card className="expense-item">
        <Date data={date} />
        <div className="expense-item__description">
          <h2>{ title }</h2>
          <div className="expense-item__price">{this.formatter.format(amount)}</div>
          <Button onClick={this.handler} className="btn btn-danger" disabled={disabled}/>
        </div>
      </Card>
    )
  }
}

export default ExpenseItem;