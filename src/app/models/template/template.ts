export interface Template extends Iterable<Template> {
  id: number;
  title: string;
  context: string;
  date: string;
  type: string;
  description: string;
}
