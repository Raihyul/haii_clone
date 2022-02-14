// Main page
const collaboration = require("./main_collaboration.json");
const advisory = require("./main_advisory.json");
// Science page
const publications = require("./science_publications.json");
// News page
const news = require("./news.json");
// Partners page
const investors = require("./partners_investors.json");
const partners = require("./partners_partners.json");
// Gallery page
const video = require("./gallery_video.json");
const photo = require("./gallery_photo.json");
// Members page
const members = require("./members.json");

module.exports = function () {
  return {
    collaboration: collaboration,
    advisory: advisory,
    publications: publications,
    news: news,
    investors: investors,
    partners: partners,
    video: video,
    photo: photo,
    members: members,
  };
};
