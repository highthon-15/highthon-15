import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { UserInfo, loginUser } from "./api/loginUser";

interface MutationProps {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useLoginUserMutation({
  onSuccess,
  onError,
}: MutationProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (userData: UserInfo) => {
      return loginUser(userData);
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      if (onSuccess) onSuccess(data);
      router.push("/");
    },
    onError: (error: any) => {
      if (onError) onError(error);
    },
  });
}