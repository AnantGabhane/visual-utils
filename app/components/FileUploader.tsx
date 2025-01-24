"use client";

import { Input } from "@/components/ui/input"
import { setDefaultAutoSelectFamily } from "net";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ASSET_CONFIGS, AssetType } from "../utils/file-upload/asset-configs"
import exp from "constants";

export const MAX_FILE_SIZE: number = 5 * 1024 * 1024; // 5MB in bytes

export type FileUploaderProps = {
  assetType: AssetType;
}

export default function FileUploader({ assetType }: FileUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // image size validation
      if (file.size > ASSET_CONFIGS[assetType].maxSize) {
        setShowSizeError(true);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setShowSizeError(false)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {/* <Label htmlFor="picture">Picture</Label> */}
      <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} />
      {showSizeError && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Image upload size too big. Max size allowed is {MAX_FILE_SIZE}.
          </AlertDescription>
        </Alert>
      )

      }

      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <img src={selectedImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "400px" }} />
        </div>
      )
      }
    </div >
  )
}
