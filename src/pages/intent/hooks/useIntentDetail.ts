import { useForm } from "react-hook-form-mui";
import { intentsData } from "../__mock__";
import { IIntent } from "../interface";

export const useIntentDetail = (intentId: string | undefined) => {
  const intent: IIntent | undefined = intentsData.find(
    (data) => data.id.toString() === intentId
  );

  console.log(intent);

  const form = useForm<IIntent>({
    defaultValues: {
      id: intent?.id,
      intentName: intent?.intentName,
    },
  });

  const onSubmit = async (data: IIntent) => {
    console.log(data);
  };

  return { intent, form, onSubmit };
};
