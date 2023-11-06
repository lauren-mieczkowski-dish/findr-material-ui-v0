export interface Device {
  id: string;
  avatar?: string;
  disabled: boolean;
  macAddress: string;
  firstName: string;
  gender?: "F" | "M" | "NC";
  lastName: string;
  role: string;
}
