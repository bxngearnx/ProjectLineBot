import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form-mui";
import { TUserForm } from "../../../lib/validations/user";
import { userData } from "../__mock__";
import { IUser } from "../interface";

export const useUser = (userId?: number | undefined) => {
  const user: IUser | undefined = userData.find((data) => data.id === userId);

  const form = useForm<IUser>({
    defaultValues: {
      id: user?.id,
      password: user?.password,
      email: user?.email,
      permission: user?.permission,
      level: user?.level,
    },
    resolver: zodResolver(TUserForm),
  });

  useEffect(() => {
    form.reset({
      id: user?.id,
      password: user?.password,
      email: user?.email,
      permission: user?.permission,
      level: user?.level,
    });
  }, [userId, form, user]);

  const onSubmit = async (data: IUser) => {
    console.log(data);
  };

  return { user, form, onSubmit };
};
