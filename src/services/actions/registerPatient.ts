// "use server";

// export const registerPatient = async (formData: FormData) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
//     {
//       method: "POST",
//       body: formData,
//       cache: "no-store",
//     }
//   );
//   const patientInfo = await res.json();

//   return patientInfo;
// };

"use server";

export const registerPatient = async (formData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
      {
        method: "POST",
        body: formData,
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const patientInfo = await res.json();
    return patientInfo;
  } catch (error) {
    console.error("Error during patient registration:", error);
    throw error;
  }
};
