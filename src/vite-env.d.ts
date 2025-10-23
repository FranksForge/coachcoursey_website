/// <reference types="vite/client" />

interface Window {
  Tally?: {
    loadEmbeds: () => void;
    openPopup: (formId: string, options?: any) => void;
  };
}
