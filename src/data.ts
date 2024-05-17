import { EventBoard } from "./types/EventBoard";
import { Participants } from "./types/Participants";

export const dataEvents: EventBoard[] = [
  {
    title: "Title1",
    description: "Description",
    eventDate: 17,
    organizer: "Bard"
  },
  {
    title: "Title2",
    description: "Description",
    eventDate: 17,
    organizer: "Bard"
  },
  {
    title: "Title3",
    description: "Description",
    eventDate: 17,
    organizer: "Bard"
  }
];

export const dataParticipants: Participants[] = [
  {
    name: "red",
    email: "red@example"
  },
  {
    name: "green",
    email: "green@example"
  },
  {
    name: "black",
    email: "black@example"
  },
  {
    name: "yellow",
    email: "yellow@example"
  }
];
