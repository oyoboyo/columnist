//services/content
import getAllDocumentsFromDir from "./services/content/getAllDocumentsFromDir";
import getAllPathsFromDir from "./services/content/getAllPathsFromDir";
import getCollectionFromDir from "./services/content/getCollectionFromDir";
import getCollectionFromParams from "./services/content/getCollectionFromParams";
import getCollectionsFromDir from "./services/content/getCollectionsFromDir";
import getCollectionsFromParams from "./services/content/getCollectionsFromParams";
import getDocumentFromDir from "./services/content/getDocumentFromDir";
import getDocumentFromFile from "./services/content/getDocumentFromFile";
import getDocumentFromParams from "./services/content/getDocumentFromParams";
import getContentFromAllParams from "./services/content/getContentFromAllParams";
import getDynamicPathsFromDir from "./services/content/getDynamicPathsFromDir";

// utilities/content
import makeSlugFromString from "./utilities/content/makeSlugFromString";
import makeStringFromSlug from "./utilities/content/makeStringFromSlug";
import makeStringFromDate from "./utilities/content/makeStringFromDate";
import calcReadTimeFromText from "./utilities/content/calcReadTimeFromText";
import truncateText from "./utilities/content/truncateText";
//hooks
import useConfig from "./hooks/useConfig";
// Components
import Config from "./components/Config";
import Link from "./components/Link";
import Html from "./components/Html";

export {
  //content
  getAllDocumentsFromDir,
  getAllPathsFromDir,
  getDynamicPathsFromDir,
  getContentFromAllParams,
  getCollectionFromDir,
  getCollectionFromParams,
  getCollectionsFromDir,
  getCollectionsFromParams,
  getDocumentFromDir,
  getDocumentFromFile,
  getDocumentFromParams,
  // utilities/content
  makeStringFromSlug,
  makeStringFromDate,
  makeSlugFromString,
  calcReadTimeFromText,
  truncateText,
  //hooks
  useConfig,
  //components
  Config,
  Link,
  Html,
};
