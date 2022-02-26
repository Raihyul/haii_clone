export interface ICollaboration {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
  image: string;
}

export interface IAdvisory {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
  affiliation: {
    kor: string;
    eng: string;
  };
  image: string;
}

export interface IPublications {
  id: number;
  people: string;
  year: string;
  firstContent: string;
  secondContent: string;
}

export interface INews {
  id: number;
  thumbnail: string;
  date: string;
  url: string;
  title: string;
  content: string;
}

export interface IInvestors {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
  image: string;
}

export interface IPartners {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
  image: string;
}

export interface IVideo {
  id: number;
  url: string;
}

export interface IPhoto {
  id: number;
  title: {
    kor: string;
    eng: string;
  };
  image: string;
}

export interface IMembers {
  id: number;
  name: {
    kor: string;
    eng: string;
  };
  department: {
    kor: string;
    eng: string;
  };
  introduction: {
    kor: string;
    eng: string;
  };
  image: string;
}
