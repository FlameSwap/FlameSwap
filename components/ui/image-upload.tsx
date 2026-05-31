"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageChange: (imageUrl: string | null) => void;
  className?: string;
}

export function ImageUpload({ onImageChange, className }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreview(result);
        onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const removeImage = () => {
    setPreview(null);
    onImageChange(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  if (preview) {
    return (
      <div className={cn("relative rounded-lg overflow-hidden border-2 border-primary/20", className)}>
        <img src={preview} alt="Preview" className="w-full h-48 object-cover" />
        <button
          type="button"
          onClick={removeImage}
          className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
        isDragging ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50",
        className
      )}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <ImageIcon className="w-10 h-10 mx-auto mb-3 text-gray-400" />
      <p className="text-sm text-gray-600 mb-1">Drag & drop or click to upload</p>
      <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
    </div>
  );
}
