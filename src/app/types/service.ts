export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  button?: string;
  category?: string;
  services?: {
    title: string;
    desc: string;
    button: string;
  }[];
}
