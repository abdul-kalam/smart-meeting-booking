import { convertToDateTime } from "./../common/index";
interface validateFormProps {
  isValid: boolean;
  errors: string[];
}
export const validateFormValues = (values: any): validateFormProps => {
  let errors: string[] = [];
  Object.keys(values).forEach(key => {
    validateField(key, errors, values);
  });

  return {
    isValid: errors.length == 0,
    errors: errors,
  };
};

export const validateField = (name: string, errors: string[], values: any) => {
  switch (name) {
    case "title":
      if (values.title.length == 0) {
        errors.push("Title is required");
      }
      break;
    case "date":
      if (values.date.length == 0) {
        errors.push("Date is required");
      }
      break;
    case "startTime":
      if (values.startTime.length == 0) {
        errors.push("Start time is required");
      }
      if (values.startTime.length) {
        let meetingStartDateTime = convertToDateTime(
          values.date,
          parseInt(values.startTime.split(":")[0], 10),
          parseInt(values.startTime.split(":")[1], 10),
        );
        let now = new Date();
        if (now > meetingStartDateTime) {
          errors.push("Start time can not be in past");
        }
      }

      break;
    case "endTime":
      if (values.startTime.length == 0) {
        errors.push("End time is required");
      }
      let meetingStartDateTime = convertToDateTime(
        values.date,
        parseInt(values.startTime.split(":")[0], 10),
        parseInt(values.startTime.split(":")[1], 10),
      );
      const meetingEndDateTime = convertToDateTime(
        values.date,
        parseInt(values.endTime.split(":")[0], 10),
        parseInt(values.endTime.split(":")[1], 10),
      );
      if (meetingEndDateTime < meetingStartDateTime) {
        errors.push("End time should be after start time");
      }
      break;
    case "buildingId":
      if (values.buildingId <= 0) {
        errors.push("Building is required");
      }
      break;
    default:
      break;
  }
};
