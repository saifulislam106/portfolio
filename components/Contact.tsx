// components/Contact.tsx
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => (
  <section id="contact">
    <h2 className="text-2xl font-semibold mb-4">Hire Me</h2>
    <form className="space-y-4 max-w-md">
      <Input placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <Textarea placeholder="Your Message" required />
      <Button type="submit">Send Message</Button>
    </form>
  </section>
);

export default Contact;
