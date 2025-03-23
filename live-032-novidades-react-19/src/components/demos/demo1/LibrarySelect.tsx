import { Input } from "@/components/ui/input";

interface ILibrarySelectProps {
  library: string
  setLibrary: (library: string) => void

}

export function LibrarySelect({ library, setLibrary }: ILibrarySelectProps) {
  return (
    <Input
      value={library}
      onChange={event => setLibrary(event.target.value)}
      placeholder="Nome da biblioteca"
    />
  );
}
