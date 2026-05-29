export const calendlyUrl = 'https://calendly.com/daddona-michael/new-meeting';

type CalendlyClickEvent = React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function openCalendlyPopup(event: CalendlyClickEvent) {
  event.preventDefault();

  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url: calendlyUrl });
    return;
  }

  window.location.href = calendlyUrl;
}
