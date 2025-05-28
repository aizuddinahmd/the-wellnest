import { CreateEventDTO, Event } from "@/app/types/event";

export const eventService = {
  async createEvent(eventData: CreateEventDTO): Promise<Event> {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create event");
    }

    return response.json();
  },

  async getEvents(): Promise<Event[]> {
    const response = await fetch("/api/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch events");
    }

    return response.json();
  },
};
