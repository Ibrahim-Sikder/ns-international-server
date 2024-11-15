import { z } from 'zod';

export const createMission = z.object({
  body:z.object({
    description: z.string({
        required_error: 'Description is required',
      }),
      title: z.string({
        required_error: 'Title is required',
      }),
  })
});
export const updateMission = z.object({
  body:z.object({
    description: z.string({
        required_error: 'Description is required',
      }),
      title: z.string({
        required_error: 'Title is required',
      }),
  })
});

export const missionValidations = {
    createMission,
    updateMission
};
