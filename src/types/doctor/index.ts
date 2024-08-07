export interface Doctor {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  review: any[]; // You may want to specify the structure of the review object if known
  doctorSpecialties: DoctorSpecialty[];
}

export interface DoctorSpecialty {
  specialtiesId: string;
  doctorId: string;
  specialties: any; // You may want to specify the structure of the specialties object if known
}

export interface IDoctor {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: String;
  experience: number | undefined;
  gender: "MALE" | "FEMALE";
  appointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specalties?: ISpecialties[];
}

export interface ISpecialties {
  specialties: string;
  isDeleted?: null;
}

export interface IDoctorFromData {
  doctor: IDoctor;
  password: string;
}
