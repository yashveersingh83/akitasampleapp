export interface Milestone {
  id: number ;
  desc:string;
  date:Date;
}

export function createMilestone(params: Partial<Milestone>) {
  return {

  } as Milestone;
}
