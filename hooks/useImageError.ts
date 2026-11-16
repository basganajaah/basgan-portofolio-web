"use client";

import { useState, useCallback } from "react";

/**
 * Hook untuk melacak gambar tunggal yang gagal dimuat (404 / broken).
 */
export function useImageError() {
  const [hasError, setHasError] = useState(false);
  const handleError = useCallback(() => setHasError(true), []);
  const reset = useCallback(() => setHasError(false), []);
  return { hasError, handleError, reset };
}

/**
 * Hook untuk melacak galeri gambar berisi banyak src / id.
 */
export function useGalleryImageErrors() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const handleError = useCallback((key: string) => {
    setErrors((prev) => ({ ...prev, [key]: true }));
  }, []);
  const isError = useCallback(
    (key: string) => Boolean(errors[key]),
    [errors],
  );
  return { isError, handleError };
}
