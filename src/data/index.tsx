import { useQuery } from "react-query";
import {
  fetchAdvisory,
  fetchCollaboration,
  fetchInvestors,
  fetchMembers,
  fetchNews,
  fetchPartners,
  fetchPhoto,
  fetchPublications,
  fetchVideo,
} from "../api";
import {
  IAdvisory,
  ICollaboration,
  IInvestors,
  IMembers,
  INews,
  IPartners,
  IPhoto,
  IPublications,
  IVideo,
} from "./dataInterface";

// TODO: isLoading, error 등 처리 방법 추가

export const CollaborationData = () => {
  const { isLoading, error, data } = useQuery<ICollaboration[]>(
    "collaboration",
    fetchCollaboration
  );
  return data;
};

export const AdvisoryData = () => {
  const { isLoading, error, data } = useQuery<IAdvisory[]>(
    "advisory",
    fetchAdvisory
  );
  return data;
};

export const PublicationsData = () => {
  const { isLoading, error, data } = useQuery<IPublications[]>(
    "collaboration",
    fetchPublications
  );
  return data;
};

export const NewsData = () => {
  const { isLoading, error, data } = useQuery<INews[]>(
    "collaboration",
    fetchNews
  );
  return data;
};

export const InvestorsData = () => {
  const { isLoading, error, data } = useQuery<IInvestors[]>(
    "collaboration",
    fetchInvestors
  );
  return data;
};

export const PartnersData = () => {
  const { isLoading, error, data } = useQuery<IPartners[]>(
    "collaboration",
    fetchPartners
  );
  return data;
};

export const VideoData = () => {
  const { isLoading, error, data } = useQuery<IVideo[]>(
    "collaboration",
    fetchVideo
  );
  return data;
};

export const PhotoData = () => {
  const { isLoading, error, data } = useQuery<IPhoto[]>(
    "collaboration",
    fetchPhoto
  );
  return data;
};

export const MembersData = () => {
  const { isLoading, error, data } = useQuery<IMembers[]>(
    "collaboration",
    fetchMembers
  );
  return data;
};
