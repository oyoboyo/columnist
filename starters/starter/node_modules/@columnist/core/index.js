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

// utilities/text
import capitalize from "./utilities/text/capitalize";
import quantify from "./utilities/text/quantify";
import slugify from "./utilities/text/slugify";
import truncate from "./utilities/text/truncate";
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
  getCollectionFromDir,
  getCollectionFromParams,
  getCollectionsFromDir,
  getCollectionsFromParams,
  getDocumentFromDir,
  getDocumentFromFile,
  getDocumentFromParams,
  // utilities/text
  capitalize,
  quantify,
  slugify,
  truncate,
  //hooks
  useConfig,
  //components
  Config,
  Link,
  Html,
};
