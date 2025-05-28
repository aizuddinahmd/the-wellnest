export interface Event {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  instructor: string;
  class_pax: number;
  waitlist: number;
  color: string;
  repeat: "none" | "daily" | "weekly";
  repeat_days: number[] | null;
  created_at: string;
  updated_at: string;
}

export interface CreateEventDTO {
  title: string;
  start_time: string;
  end_time: string;
  instructor: string;
  class_pax: number;
  waitlist: number;
  color: string;
  repeat: "none" | "daily" | "weekly";
  repeat_days: number[] | null;
}
