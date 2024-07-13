export type ISchedule = {
  id?: string;
  startDate: string;
  endDate: string;
};

export type IScheduleForm = {
  StartDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};
