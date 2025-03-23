import { useState } from "react";
import { Header } from "./header";
import { LibrarySelect } from "./LibrarySelect";
import { UploadsList } from "./UploadsList";
import { IUploadType } from "./types";


export function Demo1() {
  const [uploads, setUploads] = useState<IUploadType[]>([]);
  const [library, setLibrary] = useState('');

  const pendingUploads = uploads.filter(upload => upload.progress < 100);

  function handleAddFile() {
    const id = window.crypto.randomUUID();

    setUploads(prevState => (
      prevState.concat({
        id,
        fileName: `${id}.png`,
        progress: 0,
      })
    ));
  }

  function handleStartUpload(uploadId: string) {
    setUploads(prevState => prevState.map(upload => {
      if (upload.id === uploadId) {
        const progress = Math.min(upload.progress + 10, 100);

        return {
          ...upload,
          progress,
        };
      }

      return upload;
    }));
  }

  function handleRemoveFile(uploadId: string) {
    setUploads(prevState => (
      prevState.filter(upload => upload.id !== uploadId
    )));
  }

  return (
    <div className="w-full max-w-xl mx-auto my-10 p-4">
      <Header onAddFile={handleAddFile} />

      <div className="mt-8">
        <div className="mb-4">
          <LibrarySelect library={library} setLibrary={setLibrary} />
        </div>

        <UploadsList
          uploads={pendingUploads}
          onStartUpload={handleStartUpload}
          onRemoveFile={handleRemoveFile}
        />
      </div>
    </div>
  );
}
