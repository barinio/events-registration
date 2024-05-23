export interface Participants {
  eventId?: string;
  fullName: string;
  email: string;
  birth?: string;
  whereHeard?: string;
  registrationTime?: string;
}

export interface RegistrationData {
  date: string;
  count: number;
}
