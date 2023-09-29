export enum SelectedPage {
  Home = "home",
  Prestations = "prestations",
  OurSpace = "ourspace",
  ContactUS = "contactus",
}

export interface PrestationsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
