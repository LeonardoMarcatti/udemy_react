import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';

const Newsletter = () => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

const newLetter = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');
  return { message: `Signup successful to ${email}`};
}

export {newLetter}
export default Newsletter