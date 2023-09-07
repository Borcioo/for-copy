export interface ImageProp {
  data: {
    id: string;
    attributes: {
      name: string;
      alternativeText: string;
      url: string;
    };
  };
}

export interface HeaderProps {
  id: number;
  title: string;
  description: string;
  from: string;
  to: string;
}

export interface PageProps {
  params: { slug: string };
}
