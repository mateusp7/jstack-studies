import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import { EditContactForm } from './EditContactForm';

export default async function CreateContactPage({
  params,
}: {
  params: { contactId: string };
}) {
  const contact = await db.contact.findUnique({
    where: {
      id: params.contactId,
    },
  });

  if (!contact) {
    return redirect('/');
  }

  return <EditContactForm contact={contact} />;
}
