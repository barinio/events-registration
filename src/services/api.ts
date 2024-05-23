import axios from "axios";
import { Participants } from "../types/Participants";

const instance = axios.create({
  baseURL: "https://events-registration-backend.onrender.com/"
});

export const getEventsList = async (page: number) => {
  const { data } = await instance.get(`/api/events?page=${page}&limit=12`);
  return data;
};
export const getParticipantsList = async (eventId: string) => {
  const { data } = await instance.get(`/api/participants?eventId=${eventId}`);
  return data;
};

export const addNewParticipant = async (body: Participants) => {
  const { data } = await instance.post(`/api/participants`, body);
  return data;
};
