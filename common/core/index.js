//services/content
import getAllPaths from "./services/content/getAllPaths";
import getAllContent from "./services/content/getAllContent";
import getCollection from "./services/content/getCollection";
import getCollections from "./services/content/getCollections";
import getDirectory from "./services/content/getDirectory";
import getDocument from "./services/content/getDocument";
import getDocuments from "./services/content/getDocuments";
import getDynamicPaths from "./services/content/getDynamicPaths";

// utilities/content
import slugify from "./utilities/content/slugify";
import stringDate from "./utilities/content/stringDate";
import deSlug from "./utilities/content/deSlug";
import calcTime from "./utilities/content/calcTime";
import truncate from "./utilities/content/truncate";
//hooks
import useConfig from "./hooks/useConfig";
// Components
import Config from "./components/Config";
import Link from "./components/Link";
import Html from "./components/Html";

export {
  //content
  getAllPaths,
  getAllContent,
  getCollection,
  getCollections,
  getDirectory,
  getDocument,
  getDocuments,
  getDynamicPaths,
  // utilities/content
  slugify,
  stringDate,
  calcTime,
  deSlug,
  truncate,
  //hooks
  useConfig,
  //components
  Config,
  Link,
  Html,
};
