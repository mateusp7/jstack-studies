

import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { IUploadType } from "./types";

interface IUploadCardProps {
  upload: IUploadType
  onStartUpload: (id: string) => void
  onRemoveFile: (id: string) => void
}

export function UploadCard({ upload, onStartUpload, onRemoveFile }: IUploadCardProps) {
  return (
    <div
      key={upload.id}
      className="flex border p-2 px-3 rounded-md items-center justify-between gap-4"
    >
      <div className="flex-1">
        <span className="font-medium tracking-tight text-sm">
          {upload.fileName}
        </span>
        <Progress value={upload.progress} className="mt-1 h-2" />
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8"
          onClick={() => onStartUpload(upload.id)}
        >
          Upload
        </Button>

        <Button
          variant="destructive"
          size="sm"
          className="h-8"
          onClick={() => onRemoveFile(upload.id)}
        >
          <Trash2Icon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
