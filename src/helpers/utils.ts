import { eachDayOfInterval, format } from "date-fns";
import type { Appointment } from "../models/appointment";

let cachedMonth = new Date().getMonth();
let cachedYear = new Date().getFullYear();
let cachedDays = generateDaysOfMonth(cachedYear, cachedMonth);

function generateDaysOfMonth(year: number, month: number) {
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  return eachDayOfInterval({ start, end }).map((d) => format(d, "dd/MM/yyyy"));
}

export function getDaysOfCurrentMonth() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // se mudou o mês ou o ano, recalcula
  if (currentMonth !== cachedMonth || currentYear !== cachedYear) {
    cachedMonth = currentMonth;
    cachedYear = currentYear;
    cachedDays = generateDaysOfMonth(currentYear, currentMonth);
  }

  return cachedDays;
}

export function delay(ms: number) {
  // simulando tempo de espera pra uma api
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getAppointmentsByDayParts(
  appointments: Appointment[],
  filterDay: string,
) {
  const morning = appointments.filter(
    (appointment) =>
      Number(appointment.time.split(":")[0]) <= 12 &&
      appointment.date === filterDay,
  );
  const afternoon = appointments.filter(
    (appointment) =>
      Number(appointment.time.split(":")[0]) >= 13 &&
      Number(appointment.time.split(":")[0]) <= 18 &&
      appointment.date === filterDay,
  );
  const night = appointments.filter(
    (appointment) =>
      Number(appointment.time.split(":")[0]) >= 19 &&
      appointment.date === filterDay,
  );

  return [morning, afternoon, night];
}
