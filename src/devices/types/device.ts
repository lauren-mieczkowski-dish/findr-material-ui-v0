export interface Device {
  id: string;
  avatar?: string;
  disabled: boolean;
  email: string;
  firstName: string;
  gender?: "F" | "M" | "NC";
  lastName: string;
  role: string;
}
