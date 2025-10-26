import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { APPOINTMENT_KEY, type Appointment } from "../models/appointment";

export default function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENT_KEY,
    [],
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function saveAppointment(appointment: Appointment) {
    setIsSubmitting(true);
    setAppointments([...appointments, appointment]);
    await delay(2000);
    setIsSubmitting(false);
  }
  function deleteAppointment(id: string) {
    setIsSubmitting(true);
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id),
    );
    setIsSubmitting(false);
  }

  return {
    appointments,
    saveAppointment,
    deleteAppointment,
    isSubmitting,
  };
}
