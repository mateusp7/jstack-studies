'use client';

import { ContactForm } from '@/components/ContactForm';
import { queryClient } from '@/lib/query-client';
import { Contact } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

interface EditContactForm {
  contact: Contact;
}

export const EditContactForm = ({ contact }: EditContactForm) => {
  const router = useRouter()
  const { mutate: onEditContact, isPending: isLoadingEditContact } =
    useMutation({
      mutationFn: async (data: { name: string; email: string }) => {
        return await fetch(`/api/contacts/${contact?.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      },
      onSuccess: async (response) => {
        if (response.ok && response.status === 200) {
          toast.success('Contato editado com sucesso');
          queryClient.refetchQueries({
            queryKey: ['contacts'],
          })
          return router.push('/');
        }

        const error = await response.json();

        if (error.error) {
          toast.error(error.error);
        }
      },
      onError: () => {
        toast.error('Ocorreu um erro inesperado ao fazer a solicitação');
      },
    });

  async function handleSubmit(data: { name: string; email: string }) {
    onEditContact(data);
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
          Editar contato
        </h1>
      </header>

      <ContactForm onSubmit={handleSubmit} contact={contact} isLoadingAction={isLoadingEditContact} />
    </>
  );
};
