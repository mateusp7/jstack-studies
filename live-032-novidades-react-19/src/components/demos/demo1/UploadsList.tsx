import { memo } from "react";
import { UploadCard } from "./UploadCard";
import { IUploadType } from "./types";

interface IUploadsListProps {
  uploads: IUploadType[]
  onStartUpload: (id: string) => void
  onRemoveFile: (id: string) => void
}

const MemoUploadCard = memo(UploadCard);

export function UploadsList({ uploads, onRemoveFile, onStartUpload }: IUploadsListProps) {
  return (
    <div className="space-y-4">
      {uploads.map(upload => (
        <MemoUploadCard
          key={upload.id}
          upload={upload}
          onRemoveFile={onRemoveFile}
          onStartUpload={onStartUpload}
        />
      ))}
    </div>
  );
}
