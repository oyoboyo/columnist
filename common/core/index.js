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
import makeDate from "./utilities/content/makeDate";
import makeTitle from "./utilities/content/makeTitle";
import makeReadTime from "./utilities/content/makeReadTime";
import makeSlug from "./utilities/content/makeSlug";
import truncate from "./utilities/content/truncate";

//hooks
import useConfig from "./hooks/useConfig";
import useData from "./hooks/useData";
import useTheme from "./hooks/useTheme";
// Components
import Data from "./components/Data";
import Config from "./components/Config";
import Link from "./components/Link";
import Html from "./components/Html";
import Theme from "./components/Theme";

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
  makeDate,
  makeSlug,
  makeTitle,
  makeReadTime,
  truncate,
  //hooks
  useConfig,
  useTheme,
  //components
  Data,
  Config,
  Theme,
  Link,
  Html,
};
