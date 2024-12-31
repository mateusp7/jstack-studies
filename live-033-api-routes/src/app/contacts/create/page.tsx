'use client'

import { ContactForm } from '@/components/ContactForm';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function CreateContactPage() {
  async function handleSubmit(data: { name: string; email: string }) {
    const response = await fetch('/api/contacts?id=232', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();

  }

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
          Criar contato
        </h1>
      </header>

      <ContactForm onSubmit={handleSubmit}/>
    </>
  );
}
