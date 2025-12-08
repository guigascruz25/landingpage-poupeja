import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";
import { shouldShowConsent, recordConsent } from "@/lib/consent";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (shouldShowConsent()) setOpen(true);
    const onOpen = () => setOpen(true);
    window.addEventListener("open-cookie-consent", onOpen);
    return () => window.removeEventListener("open-cookie-consent", onOpen);
  }, []);

  const handleAccept = () => {
    recordConsent({ accepted: true, marketing: true, analytics: true });
    setOpen(false);
  };

  const handleReject = () => {
    recordConsent({ accepted: false, marketing: false, analytics: false });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Privacidade e Consentimento</DialogTitle>
          <DialogDescription>
            Usamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar uso e oferecer conteúdo personalizado.
            Você pode aceitar ou recusar o uso para fins de marketing e análise. Leia nossa
            {" "}
            <a href={appConfig.privacy_url} target="_blank" rel="noopener noreferrer" className="text-primary underline">Política de Privacidade</a>.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 mt-4">
          <Button variant="default" onClick={handleAccept}>Aceitar todos</Button>
          <Button variant="secondary" onClick={handleReject}>Recusar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
