import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom'
import classes from './EventForm.module.css'
import React from 'react';

const sendData = async ({request, params}) => {
  const data =  await request.formData()
  const method = request.method
  let url = 'http://localhost:8080/events/'

  if (method == 'PATCH') {
    url += params.id
  }

  const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description'),
  }
  const result = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
  })

  if (result.status == 422) {
      return result
  }

  if (!result.ok) {
      throw json({message: 'Could not save event'}, {status: 500})
  }

  return redirect('/events')
}

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData()
  let errors = []
  
  if (actionData && actionData.errors) {
    errors = Object.values(actionData.errors)
  }
  const isSubmitting = navigation.state == 'submitting'
  
  const cancelHandler = () => {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {
        errors.length > 0 && <ul>
          {
            React.Children.toArray(
              errors.map(el => <li>{el}</li>)
            )
          }
        </ul>
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event ? event.image : ''} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event ? event.date : ''} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={event ? event.description : ''} required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting..' : 'Save'}</button>
      </div>
    </Form>
  );
}

export {sendData}
export default EventForm;
