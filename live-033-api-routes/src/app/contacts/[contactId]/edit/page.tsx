import { ContactForm } from '@/components/ContactForm';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

const contact = {
  email: 'edit@jstack.com.br',
  name: 'Editing Contact...',
};

export default function CreateContactPage() {
  return (
    <>
      <header>
        <Link
          href="/"
          className="text-muted-foreground flex items-center gap-1 text-xs mb-2 dark:hover:text-sky-300 hover:text-sky-600"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Voltar para a lista</span>
        </Link>
        <h1 className="font-semibold text-3xl tracking-tighter">
          Editar contato
        </h1>
      </header>

      <ContactForm contact={contact} />
    </>
  );
}
