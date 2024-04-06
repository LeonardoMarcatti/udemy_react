import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';
import React, {useEffect} from 'react';

const NewsletterSignup = () => {
  const fetcher = useFetcher()
  const {data, state} = fetcher

  useEffect(() => {
    if (state == 'idle' && data && data.message) {
      alert(data.message)
      const emails = document.querySelectorAll('.email')
      emails.forEach(element => {
       element.value = ''
      });
    }
  }, [data, state])

  return (
    <fetcher.Form action='/newsLetter' method="post" className={classes.newsletter}>
      <input
        type="email"
        name='email'
        className='email'
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;