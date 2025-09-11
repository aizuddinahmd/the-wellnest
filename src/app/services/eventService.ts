import { CreateEventDTO, Event } from "@/app/types/event";

// Mock events storage
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Yoga Class",
    start_time: new Date(2024, 11, 20, 9, 0).toISOString(),
    end_time: new Date(2024, 11, 20, 10, 0).toISOString(),
    instructor: "Sarah Johnson",
    class_pax: 15,
    waitlist: 3,
    color: "#00bfae",
    repeat: "weekly",
    repeat_days: [1, 3, 5],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Pilates Session",
    start_time: new Date(2024, 11, 21, 14, 0).toISOString(),
    end_time: new Date(2024, 11, 21, 15, 0).toISOString(),
    instructor: "Mike Chen",
    class_pax: 12,
    waitlist: 1,
    color: "#ff6b6b",
    repeat: "none",
    repeat_days: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const eventService = {
  async createEvent(eventData: CreateEventDTO): Promise<Event> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newEvent: Event = {
      id: Date.now().toString(),
      ...eventData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    mockEvents.push(newEvent);
    return newEvent;
  },

  async getEvents(): Promise<Event[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return [...mockEvents];
  },
};
